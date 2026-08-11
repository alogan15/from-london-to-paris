"use client";

import {
  Laptop,
  Wifi,
  Camera,
  Mic,
  Download,
  Monitor,
} from "lucide-react";

import { StudentData } from "@/types/registration";

interface TechnologyCheckProps {
  students: StudentData[];

  updateStudent: (
    id: string,
    field: keyof StudentData,
    value: any
  ) => void;
}

const questions = [
  {
    title: "Computer Available",
    icon: Laptop,
    field: "has_laptop" as const,
    options: ["Yes", "No"],
  },
  {
    title: "Reliable Internet",
    icon: Wifi,
    field: "internet_access" as const,
    options: ["Yes", "No"],
  },
  {
    title: "Webcam Available",
    icon: Camera,
    field: "has_webcam" as const,
    options: ["Yes", "No"],
  },
  {
    title: "Working Microphone",
    icon: Mic,
    field: "has_microphone" as const,
    options: ["Yes", "No"],
  },
  {
    title: "Comfortable Installing Free Software?",
    icon: Download,
    field: "can_install_software" as const,
    options: ["Yes", "Need Assistance"],
  },
];

export default function TechnologyCheck({
  students,
  updateStudent,
}: TechnologyCheckProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-slate-900">
        Student Technology Readiness
      </h2>

      <p className="mt-3 text-slate-600">
        Let's make sure each student has everything needed for a successful
        coding camp experience.
      </p>

      <div className="mt-12 space-y-12">
        {students.map((student, studentIndex) => (
          <div
            key={student.id}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Technology for Student {studentIndex + 1}
            </h3>

            <div className="space-y-10">
              {questions.map((question) => {
                const Icon = question.icon;

                return (
                  <div key={question.field}>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                        <Icon
                          className="text-blue-600"
                          size={22}
                        />
                      </div>

                      <h4 className="text-xl font-semibold text-slate-900">
                        {question.title}
                      </h4>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {question.options.map((option) => (
                        <label
                          key={option}
                          className="group cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`${student.id}-${question.field}`}
                            value={option}
                            checked={
                              student[question.field] ===
                              (option === "Yes")
                            }
                            onChange={() =>
                              updateStudent(
                                student.id,
                                question.field,
                                option === "Yes"
                              )
                            }
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

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <Monitor
                      className="text-blue-600"
                      size={22}
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-slate-900">
                    Operating System
                  </h4>
                </div>

                <select
                  value={student.operating_system}
                  onChange={(e) =>
                    updateStudent(
                      student.id,
                      "operating_system",
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">
                    Select Operating System
                  </option>

                  <option value="Windows">
                    Windows
                  </option>

                  <option value="Mac">
                    Mac
                  </option>

                  <option value="Chromebook">
                    Chromebook
                  </option>

                  <option value="Linux">
                    Linux
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}