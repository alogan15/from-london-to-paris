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

              <Link href="/young-creators" className="block hover:text-white">
                Young Creators
              </Link>

              <Link href="/discovery" className="block hover:text-white">
                Start a Project
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Connect
            </h3>

            <div className="space-y-4 text-gray-400">

              <a
                href="mailto:fltp8125@gmail.com"
                className="block hover:text-white"
              >
                📧 fltp8125@gmail.com
              </a>

              <a
                href="tel:+12675812282"
                className="block hover:text-white"
              >
                📱 (267) 581-2282
              </a>

              <a
                href="https://www.instagram.com/dre.logan/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/in/andre-logan/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/alogan15"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} From London to Paris LLC. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Serving clients remotely across the United States.
          </p>

        </div>

      </div>
    </footer>
  );
}