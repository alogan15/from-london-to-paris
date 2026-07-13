import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Learn from "@/components/Learn"
import Build from "@/components/Build"
import Launch from "@/components/Launch"
import FeaturedProjects from "@/components/FeaturedProjects"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Learn />
      <Build />
      <Launch />
      <FeaturedProjects />
      <CTA />
      <Footer />
    </main>
  )
}