import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16">

        {/* Top */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* Brand */}
          <div className="max-w-md">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              From London to Paris
            </p>

            <h2 className="mb-4 text-3xl font-bold">
              Learn. Build. Launch.
            </h2>

            <p className="text-gray-400">
              We create modern digital experiences that educate,
              grow businesses, and launch ideas into the world.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 text-gray-400">

            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <Link href="/portfolio" className="transition hover:text-white">
              Work
            </Link>

            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>

            <Link href="/young-creators" className="transition hover:text-white">
              Young Creators
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} From London to Paris.
            All rights reserved.
          </p>

          <p>
            Built with Next.js • React • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}