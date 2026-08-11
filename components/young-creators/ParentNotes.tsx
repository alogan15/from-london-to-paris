"use client";

import { RegistrationFormData } from "@/types/registration";

interface ParentNotesProps {
  formData: RegistrationFormData;
  updateField: (
    field: keyof RegistrationFormData,
    value: any
  ) => void;
}

export default function ParentNotes({
  formData,
  updateField,
}: ParentNotesProps) {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600">
        Parent Notes
      </h2>

      <p className="mt-3 text-slate-600">
        Is there anything you'd like us to know about your student before
        camp begins? This section is completely optional.
      </p>

      <div className="mt-10">
        <label
          htmlFor="parentNotes"
          className="mb-3 block text-sm font-medium text-slate-700"
        >
          Additional Information
        </label>

        <textarea
          id="parentNotes"
          rows={8}
          value={formData.parent_notes}
          onChange={(e) =>
            updateField("parent_notes", e.target.value)
          }
          placeholder={`Examples:

• My child has never coded before.

• My child loves video games and wants to learn how they're made.

• My child may need additional learning support.

• My child is excited to learn web development.

Feel free to share anything that will help us create the best experience possible.`}
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-5
            leading-8
            text-slate-900
            placeholder:text-slate-400
            transition
            focus:border-blue-600
            focus:outline-none
            focus:ring-4
            focus:ring-blue-100
          "
        />
      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <p className="text-sm leading-7 text-slate-600">
          <span className="font-semibold text-blue-700">
            Optional:
          </span>{" "}
          This is a great place to tell us about your child's interests,
          learning style, goals, accommodations, or anything else you'd
          like the instructor to know before the first day of camp.
        </p>
      </div>
    </section>
  );
}