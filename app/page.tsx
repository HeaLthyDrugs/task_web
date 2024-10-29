'use client';

import Cursor from "@/components/cursor";
import Footer from "@/pages/footer";
import { Hero } from "@/pages/hero";
import { Tabs } from "@/pages/tabs";
import { useRef } from "react";

export default function Home() {
  const stickyElement = useRef(null);
  return (
    <div className="flex flex-col min-h-screen" ref={stickyElement}>
      <Cursor stickyElement={stickyElement} />
      <Hero />
      <Tabs />
      <Footer />
    </div>
  );
}
