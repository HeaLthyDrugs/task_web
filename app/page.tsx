import Footer from "@/pages/footer";
import { Hero } from "@/pages/hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Hero />
      <Footer />
    </div>
  );
}
