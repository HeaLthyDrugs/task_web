import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/helper/button';

export function Navbar() {
  return (
    <motion.nav 
      className="bg-black text-white py-4 px-6 flex justify-between items-center fixed w-[95%] top-4 left-1/2 z-10 rounded-full shadow-lg"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="/" className="text-4xl font-bold">
        TASK
      </Link>
      <div className="flex items">
        <Button />
      </div>
    </motion.nav>
  );
}
