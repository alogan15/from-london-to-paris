import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Build } from "@/components/index";
import WhyFLTP from "@/components/WhyFLTP";

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