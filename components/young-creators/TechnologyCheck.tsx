"use client";

import { Laptop, Wifi, Camera, Mic, Download, Monitor } from "lucide-react";

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
    <section className="mx-auto mb-20 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <h2 className="text-3xl font-bold">
            Student Technology Readiness
      </h2>

      <p className="mt-3 text-gray-400">
        Let's make sure your student has everything needed for a great learning
        experience.
      </p>

      <div className="mt-12 space-y-10">

        {questions.map((question) => {
          const Icon = question.icon;

          return (
            <div key={question.name}>

              <div className="mb-5 flex items-center gap-3">

                <Icon className="text-[#D4AF37]" size={24} />

                <h3 className="text-xl font-semibold">
                  {question.title}
                </h3>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                {question.options.map((option) => (
                  <label
                    key={option}
                    className="group relative cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={question.name}
                      value={option}
                      className="peer sr-only"
                    />

                    <div className="rounded-2xl border border-white/10 bg-black p-6 transition-all duration-300 hover:border-[#D4AF37] peer-checked:border-[#D4AF37] peer-checked:bg-[#D4AF37]/10">

                      <p className="text-lg font-semibold transition group-hover:text-[#D4AF37] peer-checked:text-[#D4AF37]">
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

            <Monitor className="text-[#D4AF37]" size={24} />

            <h3 className="text-xl font-semibold">
              Operating System
            </h3>

          </div>

          <select className="w-full rounded-2xl border border-white/10 bg-black px-5 py-5 outline-none transition focus:border-[#D4AF37]">

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