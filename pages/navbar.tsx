import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/helper/button';

export function Navbar() {
  return (
    <motion.nav 
      className="bg-white text-black py-4 px-6 flex justify-between items-center fixed w-[100%] top-0 left-1/2 z-10"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href="/" className="text-3xl font-bold">
        TASK
      </Link>
      <div className="flex items">
        <Button />
      </div>
    </motion.nav>
  );
}
