import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}