"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Rocket,
  GraduationCap,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Start a Project",
    description: "Get a custom solution",
    href: "/discovery/form",
    icon: Rocket,
  },
  {
    title: "Join Coding Camp",
    description: "Reserve your student's spot",
    href: "/young-creators/enroll",
    icon: GraduationCap,
  },
  {
    title: "Book a Consultation",
    description: "Let's talk about your project",
    href: "/consultation",
    icon: CalendarDays,
  },
];

export default function GetStartedDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 px-6 py-3 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
      >
        Get Started

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-80 overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] shadow-2xl">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/5 px-6 py-5 transition hover:bg-white/5"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#D4AF37]/10 p-3">
                    <Icon
                      className="text-[#D4AF37]"
                      size={20}
                    />
                  </div>

                  <div>

                    <p className="font-semibold text-white">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </div>

                <ArrowRight
                  size={18}
                  className="text-gray-500 transition group-hover:text-[#D4AF37] group-hover:translate-x-1"
                />

              </Link>
            );
          })}

        </div>
      )}
    </div>
  );
}