import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em] uppercase text-white"
        >
          From London to Paris
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-gray-300 transition hover:text-white">
            Home
          </Link>

          <Link href="/portfolio" className="text-sm text-gray-300 transition hover:text-white">
            Work
          </Link>

          <Link href="/services" className="text-sm text-gray-300 transition hover:text-white">
            Services
          </Link>

          <Link href="/young-creators" className="text-sm text-gray-300 transition hover:text-white">
            Young Creators
          </Link>

          <Link href="/contact" className="text-sm text-gray-300 transition hover:text-white">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full border border-[#D4AF37] px-5 py-2 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          Start a Project
        </Link>
      </nav>
    </header>
  );
}