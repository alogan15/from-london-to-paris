import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Build } from "@/components";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Build />
      <Projects />
      <Footer />
    </main>
  );
}