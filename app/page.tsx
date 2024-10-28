import Footer from "@/pages/footer";
import { Hero } from "@/pages/hero";
import { Tabs } from "@/pages/tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Tabs />
      <Footer />
    </div>
  );
}
