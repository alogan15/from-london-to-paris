"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="/young-creators"
            className="flex items-center gap-4"
          >
            <Image
              src="/logo/logo.png"
              alt="Young Creators"
              width={70}
              height={70}
              priority
            />

            <div className="hidden sm:block">
              <h2 className="text-xl font-bold text-slate-900">
                Young Creators
              </h2>

              <p className="text-sm font-medium text-blue-600">
                Learn • Build • Launch
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            <Link
              href="/young-creators"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/young-creators#curriculum"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Curriculum
            </Link>

            <Link
              href="/young-creators#parents"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Parents
            </Link>

            <Link
              href="/young-creators#about"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/young-creators#faq"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              FAQ
            </Link>

            <Link
              href="/young-creators#contact"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}

          <Link
            href="/young-creators/enroll"
            className="hidden items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 lg:flex"
          >
            Reserve Your Spot
            <ArrowRight size={18} />
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu size={32} className="text-slate-800" />
          </button>

        </div>
      </header>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-80 bg-white p-8 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            Young Creators
          </h2>

          <button onClick={() => setOpen(false)}>
            <X className="text-slate-700" />
          </button>

        </div>

        <nav className="flex flex-col gap-6">

          {[
            ["Home", "/young-creators"],
            ["Curriculum", "/young-creators#curriculum"],
            ["Parents", "/young-creators#parents"],
            ["About", "/young-creators#about"],
            ["FAQ", "/young-creators#faq"],
            ["Contact", "/young-creators#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-slate-200 pb-4 text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}

        </nav>

        <Link
          href="/young-creators/enroll"
          onClick={() => setOpen(false)}
          className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white"
        >
          Reserve Your Spot
          <ArrowRight size={18} />
        </Link>

      </aside>
    </>
  );
}