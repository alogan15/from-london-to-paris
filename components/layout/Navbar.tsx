"use client";

import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Rocket,
  GraduationCap,
  CalendarDays,
} from "lucide-react";
import { useState, useEffect } from "react";
import GetStartedDropdown from "@/components/common/GetStartedDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.35em] text-white"
          >
            <span className="hidden md:block">
              From London to Paris
            </span>

            <span className="block md:hidden">
              FLTP
            </span>
            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-[#D4AF37]/80">
              Learn • Build • Launch
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link href="/" className="text-sm text-gray-300 hover:text-white">
              Home
            </Link>

            <Link href="/projects" className="text-sm text-gray-300 hover:text-white">
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


            <GetStartedDropdown />


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
className={`fixed inset-0 z-50 overflow-y-auto bg-[#090909] transform transition-transform duration-300 ease-in-out ${
  open ? "translate-x-0" : "translate-x-full"
}`}
>
  {/* Header */}
  <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
    <div>
      <h2 className="text-lg font-bold tracking-[0.15em] text-white">
        From London to Paris
      </h2>

      <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/80">
        Learn • Build • Launch
      </p>
    </div>

    <button onClick={() => setOpen(false)}>
      <X className="text-white" size={28} />
    </button>
  </div>

<nav className="flex min-h-[calc(100vh-80px)] flex-col px-8 py-10">

    {/* Navigation */}

    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
    >
      Home
    </Link>

    <Link
      href="/projects"
      onClick={() => setOpen(false)}
      className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
    >
      Work
    </Link>

    <Link
      href="/services"
      onClick={() => setOpen(false)}
      className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
    >
      Services
    </Link>

    <Link
      href="/young-creators"
      onClick={() => setOpen(false)}
      className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
    >
      Young Creators
    </Link>

    <Link
      href="/discovery"
      onClick={() => setOpen(false)}
      className="border-b border-white/5 py-5 text-lg text-gray-300 transition hover:text-[#D4AF37]"
    >
      Contact
    </Link>

    {/* Get Started */}

    <div className="mt-10">

      <button
        onClick={() => setGetStartedOpen(!getStartedOpen)}
        className="flex w-full items-center justify-between rounded-full border border-[#D4AF37] px-5 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
      >
        Get Started

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            getStartedOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {getStartedOpen && (

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          {/* Start Project */}

          <Link
            href="/discovery/form"
            onClick={() => {
              setGetStartedOpen(false);
              setOpen(false);
            }}
            className="flex items-center justify-between border-b border-white/10 px-5 py-5 hover:bg-white/5"
          >
            <div className="flex items-center gap-4">

              <Rocket
                className="text-[#D4AF37]"
                size={20}
              />

              <div>

                <p className="font-semibold text-white">
                  Start a Project
                </p>

                <p className="text-sm text-gray-400">
                  Get a custom solution
                </p>

              </div>

            </div>

            <ChevronRight size={18} />
          </Link>

          {/* Coding Camp */}

          <Link
            href="/young-creators/enroll"
            onClick={() => {
              setGetStartedOpen(false);
              setOpen(false);
            }}
            className="flex items-center justify-between border-b border-white/10 px-5 py-5 hover:bg-white/5"
          >
            <div className="flex items-center gap-4">

              <GraduationCap
                className="text-[#D4AF37]"
                size={20}
              />

              <div>

                <p className="font-semibold text-white">
                  Join Coding Camp
                </p>

                <p className="text-sm text-gray-400">
                  Reserve your student's spot
                </p>

              </div>

            </div>

            <ChevronRight size={18} />
          </Link>

          {/* Consultation */}

          <Link
            href="/consultation"
            onClick={() => {
              setGetStartedOpen(false);
              setOpen(false);
            }}
            className="flex items-center justify-between px-5 py-5 hover:bg-white/5"
          >
            <div className="flex items-center gap-4">

              <CalendarDays
                className="text-[#D4AF37]"
                size={20}
              />

              <div>

                <p className="font-semibold text-white">
                  Book Consultation
                </p>

                <p className="text-sm text-gray-400">
                  Free discovery call
                </p>

              </div>

            </div>

            <ChevronRight size={18} />
          </Link>

        </div>

      )}

    </div>

    {/* Footer */}

    <div className="mt-auto pt-16">

      <p className="text-center uppercase tracking-[0.35em] text-[11px] text-gray-600">
        Learn • Build • Launch
      </p>

    </div>

  </nav>
</aside>


    </>
  );
}