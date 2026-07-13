import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#050505] px-6 pt-24">
      <div className="mx-auto max-w-5xl text-center">

    

        {/* Headline */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          We don't just
          <br />
          build websites.
          <br />
          <span className="text-15xl text-[#D4AF37]">
            We create digital solutions.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
From custom websites and web applications to coding education, QR experiences, AI solutions, and business automation, we create digital solutions that help entrepreneurs, organizations, and creators turn ideas into reality.        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#e5c04a]"
          >
            View Our Work
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-black"
          >
            Start a Project
          </Link>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Learn • Build • Launch
          </p>
        </div>

      </div>
    </section>
  );
}