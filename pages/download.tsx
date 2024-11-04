'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import ghostAnimation from '@/public/assets/animations/ghost.json';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { supabase } from '@/supabase';


export default function Download() {
  const [downloadCount, setDownloadCount] = useState(0);
  const downloadTarget = 177;
  const progressPercentage = (downloadCount / downloadTarget) * 100;

  const futureUpdates = {
    title: "Coming in Next Update",
    features: [
      "Notes",
      "Voice command support",
      "Offline functionality",
      "Performance improvements"
    ]
  };

  const buttonControls = useAnimation();
  const [isDownloading, setIsDownloading] = useState(false);

  // Fetch initial download count
  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const { count, error } = await supabase
          .from('downloads')
          .select('*', { count: 'exact' });
        
        if (error) throw error;
        setDownloadCount(count || 0);
      } catch (error) {
        console.error('Error fetching download count:', error);
      }
    };

    fetchDownloadCount();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('downloads')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'downloads' },
        (payload) => {
          setDownloadCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Record download in Supabase
      await supabase.from('downloads').insert({
        download_source: 'main',
        user_agent: window.navigator.userAgent
      });

      // Animate the button
      await buttonControls.start({
        scale: [1, 0.9, 1],
        transition: { duration: 0.2 }
      });

      // Download APK file
      const link = document.createElement('a');
      link.href = './release/app-release.apk';
      link.download = 'task.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadCount(prev => prev + 1);

      // Show success state
      await buttonControls.start({
        backgroundColor: '#22c55e', // green-500
        transition: { duration: 0.2 }
      });

      setTimeout(() => {
        buttonControls.start({
          backgroundColor: '#2563eb', // blue-600
          transition: { duration: 0.2 }
        });
        setIsDownloading(false);
      }, 2000);
    } catch (error) {
      console.error('Error recording download:', error);
      // Still proceed with download even if tracking fails
    }
  };

  return (
    <div className="dark:bg-black-100 bg-white flex flex-col items-center p-6">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 text-gray-600">
        Ready to get things done?
      </h1>

      {/* Add Ghost Animation */}
      <div className="w-48 h-48 mb-8"> {/* Adjust size as needed */}
        <Lottie
          animationData={ghostAnimation}
          loop={true}
          autoplay={true}
        />
      </div>

      <span className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 font-medium">
        Download Task Now!
      </span>

      {/* Cool Download Button */}
      <motion.button
        animate={buttonControls}
        onClick={handleDownload}
        disabled={isDownloading}
        className="group relative inline-flex items-center justify-center px-8 py-4 mb-8
                   overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 
                   text-white shadow-lg transition-all duration-300
                   hover:scale-105 hover:shadow-xl active:scale-95
                   disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="relative flex items-center gap-2 text-lg font-semibold">
          {isDownloading ? (
            <>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5"
              >
                <svg className="animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </motion.div>
              Downloading...
            </>
          ) : (
            <>
              Download Now
              <motion.svg 
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ y: 0 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </motion.svg>
            </>
          )}
        </span>

        {/* Animated gradient background effect */}
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 
                     transition-all duration-300 group-hover:opacity-90"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Add shimmer effect */}
        <div className="absolute inset-0 -z-10 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundSize: '200% 100%',
            backgroundPosition: '-100% 0',
          }}
        />
      </motion.button>
    </div>
  );
}