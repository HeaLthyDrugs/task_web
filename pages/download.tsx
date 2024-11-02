'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export default function Download() {
  const [downloadCount, setDownloadCount] = useState(125); // Example current downloads
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

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Animate the button
    await buttonControls.start({
      scale: [1, 0.9, 1],
      transition: { duration: 0.2 }
    });

    // Add your download logic here
    window.open('your-app-download-link');
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
  };

  return (
    <div className="dark:bg-black-100 bg-white min-h-screen flex flex-col items-center p-6">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-8 text-gray-600">
        Ready to get things done?
      </h1>

      {/* Cool Download Button */}
      <motion.button
        animate={buttonControls}
        onClick={handleDownload}
        disabled={isDownloading}
        className="group relative inline-flex items-center justify-center px-8 py-4 mb-8
                   overflow-hidden rounded-full bg-blue-600 text-white shadow-lg
                   transition-transform hover:scale-105 active:scale-95"
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

        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 -z-10 bg-blue-600 transition-colors group-hover:bg-blue-500"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Progress bar section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6 rounded-3xl shadow-lg bg-white dark:bg-black mb-8"
      >
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Current Downloads</h2>
        </div>
        <div className="mt-0">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>{downloadCount} downloads</span>
            <span>Target: {downloadTarget}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1 }}
              className="bg-blue-600 h-2.5 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Future Updates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md p-6 rounded-3xl shadow-lg bg-white dark:bg-black"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {futureUpdates.title}
        </h2>
        <ul className="space-y-3">
          {futureUpdates.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}