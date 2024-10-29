'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { BackgroundGradient } from '../ui/background-gradient';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';

interface DownloadButtonProps {
  text?: string;
  href: string;
}

export default function DownloadButton({ text = "Download Now", href }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const loadingStates = [
    {
      text: "Checking off our checklist...",
    },
    {
      text: "Organizing digital sticky notes...",
    },
    {
      text: "Decluttering your future...",
    },
    {
      text: "Finding lost to-dos under the couch...",
    },
    {
      text: "Aligning tasks perfectly...",
    },
    {
      text: "Scheduling productivity boosts...",
    },
    {
      text: "Making procrastination disappear...",
    },
    {
      text: "Adding extra hours to your day...",
    },
    {
      text: "Mastering the art of getting things done...",
    },
    {
      text: "Welcome to your organized life! ✓",
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

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
            <FiDownload size={20} />
          </motion.div>
        </BackgroundGradient>
      </button>
    </div>
  );
}
