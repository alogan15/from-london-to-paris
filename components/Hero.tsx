import Link from "next/link";
import AnimatedWords from "@/components/AnimatedWords";

export default function Hero() {
  return (
    <section className="bg-[#050505] px-6 pt-32 pb-12">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center text-center">

        {/* Headline */}
        <h1 className="font-extrabold tracking-tight leading-[0.95] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">

          We don't just
          <br />
          build websites.
          <br />

          <span className="text-[#D4AF37]">
            We create digital <AnimatedWords />
          </span>

        </h1>

        {/* Supporting Text */}
        <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">
          From custom websites and web applications to coding education,
          QR experiences, AI solutions, and business automation, we help
          entrepreneurs, organizations, and creators turn ideas into reality.
        </p>

        {/* Signature Line */}
        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
          Building software solutions for small businesses
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            href="/projects"
            className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e5c04a]"
          >
            View Our Work
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-10 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
          >
            Start Project
          </Link>

        </div>

      </div>

      {/* Divider */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-10">

        <p className="text-center text-sm uppercase tracking-[0.45em] text-gray-500">
          Learn • Build • Launch
        </p>

      </div>
    </section>
  );
}