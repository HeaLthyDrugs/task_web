'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { BackgroundGradient } from '../ui/background-gradient';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { supabase } from '@/supabase';


interface DownloadButtonProps {
  text?: string;
  href: string;
}

export default function DownloadButton({ text = "Download Now", href }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = async () => {
    try {
      await supabase.from('downloads').insert({
        download_source: 'floating',
        user_agent: window.navigator.userAgent
      });

      const link = document.createElement('a');
      link.href = './release/app-release.apk';
      link.download = 'task.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error recording download:', error);
    }
  };

  const loadingStates = [
    {
      text: "Rage quitting the Microsoft - ToDo...",
    },
    {
      text: "Thinking of not using any todo apps again...",
    },
    {
      text: "But still searching for the perfect one...",
    },
    {
      text: "Stumbled upon Task...",
    },
    {
      text: "Liked the simple design, but not the limited features...",
    },
    {
      text: "Still pressed the Download button...",
    },
    {
      text: "Now you're downloading Task...",
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <Loader 
        loadingStates={loadingStates} 
        loading={loading} 
        duration={2000} 
        onLoadingComplete={handleDownload}
      />

      {loading && (
        <button
          className="fixed top-5 right-5 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
      <button rel="noopener noreferrer" onClick={() => setLoading(true)}>
        <BackgroundGradient className="relative inline-flex items-center gap-2 px-3 py-3 overflow-hidden rounded-full text-white font-medium group" >
          <motion.div
            className="relative z-10"
          >
            <FiDownload size={16} />
          </motion.div>
        </BackgroundGradient>
      </button>
    </div>
  );
}
