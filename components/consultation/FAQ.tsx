"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I hear back?",
    answer:
      "We personally review every consultation request and typically respond within one business day. If your project is time-sensitive, we'll do our best to reach out even sooner.",
  },
  {
    question: "Does the consultation cost anything?",
    answer:
      "No. Your initial consultation is completely free. It's an opportunity for us to learn about your goals, answer your questions, and determine the best solution for your business.",
  },
  {
    question: "What if I don't know exactly what I need?",
    answer:
      "That's perfectly okay. Many clients come to us with an idea rather than a detailed plan. During the consultation we'll help identify the right technology, timeline, and approach for your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Before We Talk...
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          A few common questions we receive before scheduling a consultation.
        </p>

      </div>

      <div className="mt-16 space-y-5">

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-white/5"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#D4AF37]" : ""
                  }`}
                />

              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-8 leading-8 text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}