import Download from "@/pages/download";
import Features from "@/pages/features";
import Footer from "@/pages/footer";
import { Hero } from "@/pages/hero";

import { useRef } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </div>
  );
}
