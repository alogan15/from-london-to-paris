"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function SubmitRegistration() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

      <p className="uppercase tracking-[0.35em] font-semibold text-blue-600">
        REVIEW & SUBMIT
      </p>

      <h2 className="mt-5 text-5xl font-bold text-slate-900">
        You're Almost Finished
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Please review your information before submitting your registration.
        Once submitted, we'll review your application and contact you with
        the next steps to officially reserve your student's seat.
      </p>

      {/* Information Cards */}

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {/* What Happens Next */}

        <div className="rounded-3xl border border-blue-100 bg-slate-50 p-8">

          <h3 className="text-xl font-bold text-slate-900">
            What Happens Next?
          </h3>

          <ul className="mt-6 space-y-4 text-slate-600">

            <li>✅ We review your registration.</li>

            <li>✅ You'll receive a confirmation email.</li>

            <li>✅ Payment instructions will be provided.</li>

            <li>✅ You'll receive a Welcome Packet before camp begins.</li>

          </ul>

        </div>

        {/* Need Help */}

        <div className="rounded-3xl border border-blue-100 bg-slate-50 p-8">

          <h3 className="text-xl font-bold text-slate-900">
            Need Help?
          </h3>

          <div className="mt-6 space-y-4 text-slate-600">

            <p>
              📧 <span className="font-medium">fltp8125@gmail.com</span>
            </p>

            <p>
              📞 <span className="font-medium">(267) 581-2282</span>
            </p>

            <p>
              We're happy to answer any questions before you enroll.
            </p>

          </div>

        </div>

      </div>

      {/* Security Notice */}

      <div className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5">

        <ShieldCheck
          size={22}
          className="text-blue-600"
        />

        <p className="font-medium text-slate-700">
          Your information is secure and will never be shared.
        </p>

      </div>

      {/* Submit Button */}

      <button
        type="submit"
        className="
          mt-14
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-blue-600
          px-12
          py-5
          text-lg
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-700
          hover:shadow-xl
        "
      >
        Reserve My Spot

        <ArrowRight size={22} />

      </button>

      <p className="mt-8 text-sm text-slate-500">
        Submission does not guarantee enrollment. Registration is confirmed
        once accepted and payment has been received.
      </p>

      <div className="mt-12 border-t border-slate-200 pt-8">

        <Link
          href="/young-creators"
          className="font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
        >
          ← Return to Young Creators
        </Link>

      </div>

    </section>
  );
}