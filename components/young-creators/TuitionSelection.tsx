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
      badge: "🎉 Save $50",
      description:
        "Reserve your student's seat with a deposit before the Early Enrollment deadline.",
      features: [
        "6-Week Live Coding Camp",
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
      description:
        "Available after the Early Enrollment deadline has ended.",
      features: [
        "6-Week Live Coding Camp",
        "Small Class Sizes",
        "Demo Day Presentation",
        "Certificate of Completion",
      ],
    },
  ];

  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] font-semibold text-blue-600">
          TUITION
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Choose Your Enrollment
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Reserve your student's seat today and save with our Early
          Enrollment discount.
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
              className={`
                relative
                rounded-3xl
                border-2
                p-10
                text-left
                transition-all
                duration-300
                ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 shadow-xl ring-4 ring-blue-100"
                    : "border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg"
                }
              `}
            >
              {isSelected && (
                <CheckCircle
                  className="absolute right-6 top-6 text-blue-600"
                  size={30}
                />
              )}

              <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {plan.badge}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {plan.title}
              </h3>

              <p className="mt-4 text-5xl font-extrabold text-blue-600">
                {plan.price}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {plan.description}
              </p>

              <div className="my-8 border-t border-slate-200" />

              <div className="space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-blue-600"
                    />

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              <div
                className={`
                  mt-10
                  rounded-full
                  py-4
                  text-center
                  font-semibold
                  transition
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                  }
                `}
              >
                {isSelected ? "Selected ✓" : "Select Plan"}
              </div>

            </button>
          );
        })}

      </div>

      <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
        <p className="font-semibold text-blue-700">
          🎉 Early Enrollment Bonus
        </p>

        <p className="mt-2 text-slate-600">
          Reserve your student's seat with a deposit by{" "}
          <span className="font-semibold">
            September 15
          </span>{" "}
          and receive{" "}
          <span className="font-bold text-blue-600">
            $50 off tuition.
          </span>
        </p>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Tuition includes all instruction, learning materials, Demo Day,
        and a Certificate of Completion.
      </p>

    </section>
  );
}