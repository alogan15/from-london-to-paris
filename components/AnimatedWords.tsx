"use client";

import { useEffect, useState } from "react";

const words = [
  "digital solutions.",
  "websites.",
  "web applications.",
  "AI tools.",
  "QR experiences.",
  "coding education.",
  "Launch Kits.",
];


export default function AnimatedWords() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`text-[#D4AF37] transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[index]}
    </span>
  );
}