"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const budgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
  "Let's Discuss",
];

const timelines = [
  "ASAP",
  "Within 30 Days",
  "1–3 Months",
  "Flexible",
  "Just Exploring",
];

export default function BudgetTimeline() {
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          PROJECT DETAILS
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Budget & Timeline
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          This helps us recommend the best solution for your business and
          prepare for our consultation.
        </p>

      </div>

      {/* Budget */}

      <div className="mt-16">

        <h3 className="mb-6 text-2xl font-bold">
          Estimated Budget
        </h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {budgets.map((item) => {
            const selected = budget === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setBudget(item)}
                className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                  selected
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-black hover:border-[#D4AF37]/40 hover:-translate-y-1"
                }`}
              >
                {selected && (
                  <CheckCircle
                    className="absolute right-4 top-4 text-[#D4AF37]"
                    size={24}
                  />
                )}

                <p className="text-lg font-semibold">
                  {item}
                </p>

              </button>
            );
          })}

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-16">

        <h3 className="mb-6 text-2xl font-bold">
          Desired Timeline
        </h3>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {timelines.map((item) => {
            const selected = timeline === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setTimeline(item)}
                className={`relative rounded-2xl border p-6 text-left transition-all duration-300 ${
                  selected
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-black hover:border-[#D4AF37]/40 hover:-translate-y-1"
                }`}
              >
                {selected && (
                  <CheckCircle
                    className="absolute right-4 top-4 text-[#D4AF37]"
                    size={24}
                  />
                )}

                <p className="text-lg font-semibold">
                  {item}
                </p>

              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}