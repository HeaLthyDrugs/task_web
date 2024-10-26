"use client";

import { motion } from "framer-motion";
import { Navbar } from "./navbar";

export function Hero() {
  return (
    <div className="dark:bg-black-100 bg-white h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center text-white">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Your App Name
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-medium mb-8 text-gray-300"
          >
            The perfect solution for your needs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-lg"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
}
