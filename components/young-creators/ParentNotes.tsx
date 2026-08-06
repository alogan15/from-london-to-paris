"use client";

export default function ParentNotes() {
  return (
    <section className="mx-auto mb-20 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <h2 className="text-3xl font-bold">
        Parent Notes
      </h2>

      <p className="mt-3 text-gray-400">
        Is there anything you'd like us to know about your student before
        camp begins? This section is optional.
      </p>

      <div className="mt-10">

        <label
          htmlFor="parentNotes"
          className="mb-3 block text-lg font-semibold"
        >
          Additional Information
        </label>

        <textarea
          id="parentNotes"
          rows={8}
          placeholder="Examples:

• My child has never coded before.

• My child loves video games and wants to learn how they're made.

• My child may need additional learning support.

• My child is excited to learn web development.

Feel free to share anything that will help us create the best experience possible."
          className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 leading-8 outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#D4AF37]"
        />

      </div>

      <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

        <p className="text-sm leading-7 text-gray-400">
          <span className="font-semibold text-[#D4AF37]">
            Optional:
          </span>{" "}
          This is a great place to tell us about your child's interests,
          learning style, goals, or anything else you'd like the instructor
          to know before the first day of camp.
        </p>

      </div>

    </section>
  );
}