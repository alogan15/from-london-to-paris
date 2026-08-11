"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { ConsultationFormData } from "@/types/consultation";

interface SubmitConsultationProps {
  formData: ConsultationFormData;
  onSubmit: () => void;
  loading: boolean;
}

export default function SubmitConsultation({
  formData,
  onSubmit,
  loading,
}: SubmitConsultationProps) {
  
  return (
    <section className="mx-auto mb-32 max-w-5xl rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/10 to-black p-10 text-center">

      <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
        READY TO GET STARTED?
      </p>

      <h2 className="mt-5 text-5xl font-bold">
        Let's Start the Conversation
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Once you submit your consultation request, we'll personally review
        your information and reach out within one business day to schedule
        the next steps.
      </p>

      {/* What Happens Next */}

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-left">

          <h3 className="text-2xl font-semibold">
            What Happens Next?
          </h3>

          <ul className="mt-6 space-y-4 text-gray-400 leading-7">

            <li>✓ We'll review your project details.</li>

            <li>✓ We'll contact you within one business day.</li>

            <li>✓ We'll schedule your free consultation.</li>

            <li>✓ You'll receive a personalized recommendation.</li>

          </ul>

        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-left">

          <h3 className="text-2xl font-semibold">
            Questions?
          </h3>

          <div className="mt-6 space-y-5 text-gray-400 leading-7">

            <p>
              📧 fltp8125@gmail.com
            </p>

            <p>
              📞 (267) 581-2282
            </p>

            <p>
              We're always happy to answer questions before your consultation.
            </p>

          </div>

        </div>

      </div>

      {/* Security */}

      <div className="mt-12 flex items-center justify-center gap-3 text-[#D4AF37]">

        <ShieldCheck size={20} />

        <p className="text-sm">
          Your information is secure and will never be shared.
        </p>

      </div>

      {/* Submit */}

      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className="mt-14 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-12 py-5 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Request Consultation"}
        {!loading && <ArrowRight size={20} />}
      </button>

      <p className="mt-8 text-sm text-gray-500">
        There is no cost or obligation for your initial consultation.
      </p>

    </section>
  );
}