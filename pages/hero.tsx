"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DownloadButton from "@/components/download";

export function Hero() {
  return (
    <div className="dark:bg-black-100 bg-white min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-600"
          >
            Simplicity Meets Productivity
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-8 sm:mb-10 text-gray-600"
          >
            Your tasks. Your time. Your way.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <DownloadButton href="/your-download-link" />
          </motion.div> */}
          <Image
            src="/assets/mockups/Light.png"
            width={500}
            height={500}
            alt="Hero image"
            priority
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
