import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Build } from "@/components";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Build />
      <Footer />
    </main>
  );
}