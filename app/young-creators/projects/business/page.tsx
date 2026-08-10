import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Star,
} from "lucide-react";

export default function BusinessLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">

      {/* Navigation */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow">
          Student Example
        </div>

      </div>

      {/* Hero */}

      <section className="mx-auto grid max-w-7xl items-center gap-20 px-6 py-16 lg:grid-cols-2">

        <div>

          <p className="uppercase tracking-[0.35em] font-semibold text-blue-600">
            Professional Cleaning Services
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-slate-900">
            A Cleaner Home
            <br />
            Starts Here.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Bright Clean Co. provides reliable residential and commercial
            cleaning services with friendly staff and affordable pricing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
              Book Now
            </button>

            <button className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
              Learn More
            </button>

          </div>

          <div className="mt-12 grid gap-5">

            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-green-600" />
              Residential Cleaning
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-green-600" />
              Commercial Cleaning
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <CheckCircle2 className="text-green-600" />
              Free Estimates
            </div>

          </div>

        </div>

        <div>

          <Image
            src="/young-creators/images/business/hero.jpg"
            alt="Cleaning Service"
            width={700}
            height={700}
            className="rounded-[2rem] shadow-2xl"
          />

        </div>

      </section>

      {/* Trust Bar */}

      <section className="mx-auto flex max-w-7xl flex-wrap justify-center gap-12 border-y border-slate-200 py-10 text-slate-700">

        <div className="flex items-center gap-2">
          <Star className="fill-yellow-400 text-yellow-400" />
          5-Star Reviews
        </div>

        <div className="flex items-center gap-2">
          <Phone />
          Free Estimates
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-green-600" />
          Licensed & Insured
        </div>

      </section>

    </main>
  );
}