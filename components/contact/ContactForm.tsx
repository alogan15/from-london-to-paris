"use client";

import { ContactFormData } from "@/types/contact";

interface ContactFormProps {
  formData: ContactFormData;
  loading: boolean;
  updateField: (
    field: keyof ContactFormData,
    value: any
  ) => void;
}

export default function ContactForm({
  formData,
  loading,
  updateField,
}: ContactFormProps) {

  return (
    <form
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <h2 className="text-3xl font-bold">
        Tell us about your project
      </h2>

      <p className="mt-3 text-gray-400">
        Fill out the form below and we'll reach out within one business day.
      </p>

      <div className="mt-10 grid gap-6">

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Full Name *
          </label>

          <input
            type="text"
              value={formData.full_name}
              onChange={(e) =>
                updateField("full_name", e.target.value)
              }
            placeholder="John Smith"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Email *
          </label>

          <input
            type="email"
              value={formData.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
            placeholder="john@email.com"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          />
        </div>

        {/* Business */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Business / Organization
          </label>

          <input
            type="text"
              value={formData.business_name}
              onChange={(e) =>
                updateField("business_name", e.target.value)
              }
            placeholder="ABC Company"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          />
        </div>

        {/* Service */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            What are you interested in?
          </label>

          <select
              value={formData.service}
              onChange={(e) =>
                updateField("service", e.target.value)
              }
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          >
            <option>Website Design</option>
            <option>Web Application</option>
            <option>Business Automation</option>
            <option>AI Solution</option>
            <option>QR Experience</option>
            <option>Consultation</option>
            <option>Other</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Estimated Budget
          </label>

          <select
              value={formData.budget}
              onChange={(e) =>
                updateField("budget", e.target.value)
              }
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          >
            <option>Not Sure Yet</option>
            <option>$500 - $1,000</option>
            <option>$1,000 - $3,000</option>
            <option>$3,000 - $5,000</option>
            <option>$5,000+</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Project Details *
          </label>

          <textarea
            rows={6}
              value={formData.message}
              onChange={(e) =>
                updateField("message", e.target.value)
              }
            placeholder="Tell us about your business, goals, timeline, and anything else we should know..."
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none transition focus:border-[#D4AF37]"
          />
        </div>

      <button
        type="submit"
        className="mt-4 rounded-xl bg-[#D4AF37] px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
      >
        Send Project Inquiry
      </button>

      </div>
    </form>
  );
}