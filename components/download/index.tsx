'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { BackgroundGradient } from '../ui/background-gradient';

interface DownloadButtonProps {
  text?: string;
  href: string;
}

export default function DownloadButton({ text = "Download Now", href }: DownloadButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <BackgroundGradient className="relative inline-flex items-center gap-2 px-3 py-3 overflow-hidden rounded-full text-white font-medium group" >
          <motion.div
            className="relative z-10"
          >
            <FiDownload size={20} />
          </motion.div>
        </BackgroundGradient>
      </a>
    </div>
  );
}
