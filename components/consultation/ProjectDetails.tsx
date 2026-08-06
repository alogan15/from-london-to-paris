export default function ProjectDetails() {
  return (
    <section className="mx-auto mb-20 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

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
            placeholder="Share links or describe designs you admire."
            className="w-full rounded-2xl border border-white/10 bg-black px-6 py-5 leading-8 outline-none transition duration-300 placeholder:text-gray-600 focus:border-[#D4AF37]"
          />
        </div>

      </div>

    </section>
  );
}