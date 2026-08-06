"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function TuitionSelection() {
  const [selected, setSelected] = useState("early");

  const plans = [
    {
      id: "early",
      title: "Early Enrollment",
      price: "$250",
      badge: "Save $50",
      description: "Register before the Early Enrollment Deadline.",
      features: [
        "8-Week Live Coding Camp",
        "Small Class Sizes",
        "Demo Day Presentation",
        "Certificate of Completion",
      ],
    },
    {
      id: "standard",
      title: "Standard Enrollment",
      price: "$300",
      badge: "Regular Tuition",
      description: "Available after Early Enrollment ends.",
      features: [
        "8-Week Live Coding Camp",
        "Small Class Sizes",
        "Demo Day Presentation",
        "Certificate of Completion",
      ],
    },
  ];

  return (
    <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          TUITION
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Choose Your Enrollment
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Reserve your student's seat today and take advantage of Early
          Enrollment pricing while spaces are still available.
        </p>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {plans.map((plan) => {
          const isSelected = selected === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelected(plan.id)}
              className={`relative rounded-3xl border p-10 text-left transition-all duration-300 ${
                isSelected
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-black hover:border-[#D4AF37]/40"
              }`}
            >
              {isSelected && (
                <CheckCircle
                  className="absolute right-6 top-6 text-[#D4AF37]"
                  size={30}
                />
              )}

              <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
                {plan.title}
              </p>

              <h3 className="mt-6 text-6xl font-bold">
                {plan.price}
              </h3>

              <p className="mt-4 font-semibold text-[#D4AF37]">
                {plan.badge}
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                {plan.description}
              </p>

              <div className="my-8 border-t border-white/10" />

              <div className="space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#D4AF37]"
                    />

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <div
                className={`mt-10 rounded-full py-4 text-center font-semibold transition ${
                  isSelected
                    ? "bg-[#D4AF37] text-black"
                    : "border border-white/10"
                }`}
              >
                {isSelected ? "Selected" : "Select Plan"}
              </div>

            </button>
          );
        })}

      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Tuition includes all instruction, learning materials, Demo Day, and a
        Certificate of Completion.
      </p>

    </section>
  );
}