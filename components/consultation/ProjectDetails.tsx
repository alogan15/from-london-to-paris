  import { ConsultationFormData } from "@/types/consultation";

  interface ProjectDetailsProps {
  formData: ConsultationFormData;
  updateField: (
    field: keyof ConsultationFormData,
    value: any
  ) => void;
}

export default function ProjectDetails({
  formData,
  updateField,
}: ProjectDetailsProps) {

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-10">

      <h2 className="text-3xl font-bold">
        Tell Us About Your Project
      </h2>

      <p className="mt-3 text-gray-400">
        The more we understand your goals, the better we can prepare for our
        consultation.
      </p>

      <div className="mt-10 space-y-8">

        {/* Project Description */}

        <div>
          <label className="mb-3 block text-lg font-semibold">
            What would you like to build?
          </label>

          <textarea
            rows={6}
              value={formData.project_description}
              onChange={(e) =>
                updateField("project_description", e.target.value)
              }
            placeholder="Tell us about your project, business, or idea..."
            className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 leading-8 outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#D4AF37]"
          />
        </div>

        {/* Business Goals */}

        <div>
          <label className="mb-3 block text-lg font-semibold">
            What are you hoping to accomplish?
          </label>

          <textarea
            rows={4}
              value={formData.project_goals}
              onChange={(e) =>
                updateField("project_goals", e.target.value)
              }
            placeholder="Examples: Generate more leads, improve customer experience, automate a manual process, launch a new business..."
            className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 leading-8 outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#D4AF37]"
          />
        </div>

        {/* Current Website */}

        <div>
          <label className="mb-3 block text-lg font-semibold">
            Do you currently have a website?
          </label>

          <input
            type="text"
              value={formData.current_website}
              onChange={(e) =>
                updateField("current_website", e.target.value)
              }
            placeholder="https://yourwebsite.com (leave blank if none)"
            className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 outline-none transition duration-300 focus:border-[#D4AF37]"
          />
        </div>

        {/* Inspiration */}

        <div>
          <label className="mb-3 block text-lg font-semibold">
            Any websites or apps you like?
          </label>

          <textarea
            rows={3}
              value={formData.inspiration_sites}
              onChange={(e) =>
                updateField("inspiration_sites", e.target.value)
              }
            placeholder="Share links or describe designs you admire."
            className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 leading-8 outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#D4AF37]"
          />
        </div>

      </div>

    </section>
  );
}