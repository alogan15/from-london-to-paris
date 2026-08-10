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

    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            Student Information
          </h2>

          <p className="mt-3 text-slate-600">
            Tell us about your future creator(s).
          </p>
        </div>

        <button
          type="button"
          onClick={addStudent}
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
        >
          + Add Child
        </button>
      </div>

      <div className="mt-10 space-y-8">
        {students.map((student, index) => (
          <div
            key={student.id}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">
                Student {index + 1}
              </h3>

              {students.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStudent(student.id)}
                  className="text-sm font-medium text-red-500 transition hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Student Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Student Name
                </label>

                <input
                  type="text"
                  placeholder="Student Name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Age */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Age
                </label>

                <select
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <option>Select Age</option>

                  {[10, 11, 12, 13, 14, 15, 16, 17].map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
              </div>

              {/* Grade */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Grade
                </label>

                <input
                  type="text"
                  placeholder="6th Grade"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Experience */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Coding Experience
                </label>

                <select
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
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