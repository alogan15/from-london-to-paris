import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">

   

        {/* Message */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-gray-400">
          We create modern digital experiences that educate,
          grow businesses, and launch ideas into the world.
        </p>

        {/* Social Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-white">
            Instagram
          </Link>

          <Link href="/" className="transition hover:text-white">
            LinkedIn
          </Link>

          <Link href="/" className="transition hover:text-white">
            GitHub
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} From London to Paris. All rights
            reserved.
          </p>

         
        </div>

      </div>
    </footer>
  );
}