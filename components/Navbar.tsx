"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.25em] text-white"
          >
            <span className="hidden md:block">
              From London to Paris
            </span>

            <span className="block md:hidden">
              FLTP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">
              Home
            </Link>

            <Link href="/portfolio" className="text-sm text-gray-300 hover:text-white">
              Work
            </Link>

            <Link href="/services" className="text-sm text-gray-300 hover:text-white">
              Services
            </Link>

            <Link href="/young-creators" className="text-sm text-gray-300 hover:text-white">
              Young Creators
            </Link>

            <Link href="/contact" className="text-sm text-gray-300 hover:text-white">
              Contact
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Slide Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 bg-[#090909] border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

          <h2 className="text-lg font-bold tracking-[0.25em] text-white">
            FLTP
          </h2>

          <button onClick={() => setOpen(false)}>
            <X className="text-white" size={28} />
          </button>
        </div>

        <nav className="flex flex-col px-8 py-10">

          {[
            "Home",
            "Work",
            "Services",
            "Young Creators",
            "Launch Kits",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 rounded-full border border-[#D4AF37] py-4 text-center font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Start Project
          </Link>

          <div className="mt-auto pt-16">
            <p className="text-center uppercase tracking-[0.4em] text-xs text-gray-600">
              Learn • Build • Launch
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}