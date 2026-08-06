"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SubmitRegistration() {
  return (
    <section className="mx-auto mb-32 max-w-5xl rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/10 to-black p-10 text-center">

      <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
        REVIEW & SUBMIT
      </p>

      <h2 className="mt-5 text-5xl font-bold">
        You're Almost Finished
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Please review your information before submitting your registration.
        Once submitted, we'll review your application and contact you with
        the next steps to officially reserve your student's seat.
      </p>

      {/* What's Included */}

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-left">

          <h3 className="text-xl font-semibold">
            What Happens Next?
          </h3>

          <ul className="mt-6 space-y-4 text-gray-400">

            <li>✓ We review your registration.</li>

            <li>✓ You'll receive a confirmation email.</li>

            <li>✓ Payment instructions will be provided.</li>

            <li>✓ You'll receive a Welcome Packet before camp begins.</li>

          </ul>

        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-left">

          <h3 className="text-xl font-semibold">
            Need Help?
          </h3>

          <div className="mt-6 space-y-5 text-gray-400">

            <p>
              📧 fltp8125@gmail.com
            </p>

            <p>
              📞 (267) 581-2282
            </p>

            <p>
              We're happy to answer any questions before you enroll.
            </p>

          </div>

        </div>

      </div>

      {/* Secure Notice */}

      <div className="mt-12 flex items-center justify-center gap-3 text-[#D4AF37]">

        <ShieldCheck size={20} />

        <p className="text-sm">
          Your information is secure and will never be shared.
        </p>

      </div>

      {/* Submit Button */}

      <button
        type="submit"
        className="mt-14 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-12 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
      >
        Reserve My Spot

        <ArrowRight size={22} />

      </button>

      <p className="mt-8 text-sm text-gray-500">
        Submission does not guarantee enrollment. Registration is confirmed
        once accepted and payment has been received.
      </p>

      <div className="mt-12 border-t border-white/10 pt-8">

        <Link
          href="/young-creators"
          className="text-sm text-gray-500 transition hover:text-[#D4AF37]"
        >
          ← Return to Young Creators
        </Link>

      </div>

    </section>
  );
}