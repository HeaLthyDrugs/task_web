import Link from 'next/link';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <nav className="bg-white text-black py-4 px-6 flex justify-between items-center fixed w-full top-0 z-10">
      <Link href="/" className="text-4xl font-bold">
        TASK
      </Link>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white font-semibold py-2 px-4 rounded-full"
      >
        Download
      </motion.button>
    </nav>
  );
}

