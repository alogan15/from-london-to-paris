import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
              From London to Paris
            </h2>

            <p className="mt-3 uppercase tracking-[0.35em] text-sm text-[#D4AF37]">
              Learn • Build • Launch
            </p>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
              We build software solutions for small businesses, organizations, and creators. Our mission is to help you transform your ideas into modern digital experiences that drive growth and success.
            </p>


          </div>

          {/* Navigation */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Navigation
            </h3>

            <div className="space-y-4 text-gray-400">

              <Link href="/" className="block hover:text-white">
                Home
              </Link>

              <Link href="/services" className="block hover:text-white">
                Services
              </Link>

              <Link href="/projects" className="block hover:text-white">
                Work
              </Link>

              <Link href="/discovery" className="block hover:text-white">
                Discovery
              </Link>

              <Link href="/young-creators" className="block hover:text-white">
                Young Creators
              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Services
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Website Design</p>

              <p>Custom Software</p>

              <p>Business Automation</p>

              <p>Website Care Plans</p>

              <p>Discovery & Strategy</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} From London to Paris. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-gray-400">

            <Link href="/" className="hover:text-white">
              Instagram
            </Link>

            <Link href="/" className="hover:text-white">
              LinkedIn
            </Link>

            <Link href="/" className="hover:text-white">
              GitHub
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}