import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import { Build } from "@/components/index";
import WhyFLTP from "@/components/home/WhyFLTP";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Build />
      <WhyFLTP />
      <Footer />
    </main>
  );
}