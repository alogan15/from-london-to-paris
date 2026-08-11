import { RegistrationFormData } from "@/types/registration";

interface StudentInfoProps {
  formData: RegistrationFormData;
  updateField: (
    field: keyof RegistrationFormData,
    value: any
  ) => void;
}

export default function StudentInfo({
  formData,
  updateField,
}: StudentInfoProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">

            <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Student Information
        </h2>

        <p className="mt-3 text-slate-600">
          Tell us about your future creator.
        </p>
      </div>
<div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student First Name
            </label>

            <input
              type="text"
              value={formData.first_name}
              onChange={(e) =>
                updateField("first_name", e.target.value)
              }
              placeholder="Jordan"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Student Last Name
            </label>

            <input
              type="text"
              value={formData.last_name}
              onChange={(e) =>
                updateField("last_name", e.target.value)
              }
              placeholder="Smith"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>
                    <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Age
            </label>

            <select
              value={formData.student_age ?? ""}
              onChange={(e) =>
                updateField(
                  "student_age",
                  e.target.value === ""
                    ? null
                    : Number(e.target.value)
                )
              }
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select Age</option>

              {[10,11,12,13,14,15,16,17].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Grade
            </label>

            <input
              type="text"
              value={formData.student_grade}
              onChange={(e) =>
                updateField("student_grade", e.target.value)
              }
              placeholder="6th Grade"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>

                    <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Coding Experience
            </label>

            <select
              value={formData.coding_experience}
              onChange={(e) =>
                updateField("coding_experience", e.target.value)
              }
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select Experience</option>
              <option value="None">None</option>
              <option value="Beginner">Beginner</option>
              <option value="Some Experience">
               Some Experience
              </option>
            </select>
          </div>

        </div>
      </div>
    </section>
  );
}