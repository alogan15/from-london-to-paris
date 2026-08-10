"use client";

import {
  Laptop,
  Wifi,
  Camera,
  Mic,
  Download,
  Monitor,
} from "lucide-react";

const questions = [
  {
    title: "Computer Available",
    icon: Laptop,
    name: "computer",
    options: ["Yes", "No"],
  },
  {
    title: "Reliable Internet",
    icon: Wifi,
    name: "internet",
    options: ["Yes", "Not Sure"],
  },
  {
    title: "Webcam Available",
    icon: Camera,
    name: "webcam",
    options: ["Yes", "No"],
  },
  {
    title: "Working Microphone",
    icon: Mic,
    name: "microphone",
    options: ["Yes", "No"],
  },
  {
    title: "Comfortable Installing Free Software?",
    icon: Download,
    name: "software",
    options: ["Yes", "Need Assistance"],
  },
];

export default function TechnologyCheck() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600">
        Student Technology Readiness
      </h2>

      <p className="mt-3 text-slate-600">
        Let's make sure your student has everything needed for a successful
        coding camp experience.
      </p>

      <div className="mt-12 space-y-10">
        {questions.map((question) => {
          const Icon = question.icon;

          return (
            <div key={question.name}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="text-blue-600" size={22} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {question.title}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {question.options.map((option) => (
                  <label
                    key={option}
                    className="group cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={question.name}
                      value={option}
                      className="peer sr-only"
                    />

                    <div
                      className="
                        rounded-2xl
                        border-2
                        border-slate-200
                        bg-white
                        p-6
                        text-center
                        transition-all
                        duration-300
                        hover:border-blue-400
                        hover:bg-blue-50
                        peer-checked:border-blue-600
                        peer-checked:bg-blue-50
                        peer-checked:ring-4
                        peer-checked:ring-blue-100
                      "
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {option}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          );
        })}

        {/* Operating System */}

        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
              <Monitor className="text-blue-600" size={22} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              Operating System
            </h3>
          </div>

          <select
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-4
              text-slate-900
              transition
              focus:border-blue-600
              focus:outline-none
              focus:ring-4
              focus:ring-blue-100
            "
          >
            <option>Select Operating System</option>
            <option>Windows</option>
            <option>Mac</option>
            <option>Chromebook</option>
            <option>Linux</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    </section>
  );
}