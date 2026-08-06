"use client";

import { useState } from "react";

type Student = {
  id: number;
};

export default function StudentInfo() {
  const [students, setStudents] = useState<Student[]>([{ id: 1 }]);

  const addStudent = () => {
    setStudents((prev) => [...prev, { id: Date.now() }]);
  };

  const removeStudent = (id: number) => {
    if (students.length === 1) return;

    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <section className="mx-auto mb-20 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            Student Information
          </h2>

          <p className="mt-3 text-gray-400">
            Tell us about your future creator(s).
          </p>
        </div>

        <button
          type="button"
          onClick={addStudent}
          className="rounded-full border border-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          + Add Child
        </button>

      </div>

      <div className="mt-10 space-y-12">

        {students.map((student, index) => (

          <div
            key={student.id}
            className="rounded-2xl border border-white/10 bg-black/30 p-8"
          >

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-2xl font-bold text-[#D4AF37]">
                Student {index + 1}
              </h3>

              {students.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStudent(student.id)}
                  className="text-sm text-red-400 transition hover:text-red-300"
                >
                  Remove
                </button>
              )}

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {/* Student Name */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Student Name
                </label>

                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              {/* Age */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Age
                </label>

                <select className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]">
                  <option>Select Age</option>

                  {[10, 11, 12, 13, 14, 15, 16, 17].map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
              </div>

              {/* Grade */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Grade
                </label>

                <input
                  type="text"
                  placeholder="6th Grade"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              {/* Experience */}

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Coding Experience
                </label>

                <select className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]">
                  <option>None</option>
                  <option>Beginner</option>
                  <option>Some Experience</option>
                </select>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}