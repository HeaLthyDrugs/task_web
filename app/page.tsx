import Download from "@/pages/download";
import Features from "@/pages/features";
import Footer from "@/pages/footer";
import Hero from "@/pages/hero";
import Updates from "@/pages/updates";

import { useRef } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black-100">
      <Hero />
      <Features />
      <div className="mb-20">
        <Updates />
      </div>
      <div className="mt-20 mb-20">
        <Download />
      </div>
      <Footer />
    </div>
  );
}
