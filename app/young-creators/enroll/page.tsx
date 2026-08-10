import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Laptop, Users } from "lucide-react";

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="mt-12 text-center">
          <p className="uppercase tracking-[0.35em] text-slate-500">
            FALL 2026 ENROLLMENT
          </p>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Reserve Your Spot
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Complete the registration form below to reserve your child's seat
            in Young Creators Coding Camp.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <Calendar className="mb-4 text-blue-600" size={34} />

            <h3 className="text-2xl font-bold">
              Schedule
            </h3>

            <p className="mt-3 text-slate-600">
              Tuesdays & Thursdays
            </p>

            <p className="text-slate-600">
              2:00 PM – 3:30 PM
            </p>

            <p className="text-slate-600">
              6 Weeks
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <Users className="mb-4 text-blue-600" size={34} />

            <h3 className="text-2xl font-bold">
              Ages
            </h3>

            <p className="mt-3 text-slate-600">
              10–17 Years Old
            </p>

            <p className="text-slate-600">
              Limited to 10–15 Students
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <Clock className="mb-4 text-blue-600" size={34} />

            <h3 className="text-2xl font-bold">
              Tuition
            </h3>

            <p className="mt-3 text-4xl font-bold text-blue-600">
              $300
            </p>

            <p className="text-slate-600">
              Entire 6-week program
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <Laptop className="mb-4 text-blue-600" size={34} />

            <h3 className="text-2xl font-bold">
              Requirements
            </h3>

            <p className="mt-3 text-slate-600">
              Laptop or Desktop Computer
            </p>

            <p className="text-slate-600">
              Internet Connection
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl border border-blue-100 bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Registration Form
          </h2>

          <form className="mt-8 space-y-6">

            <input
              type="text"
              placeholder="Parent / Guardian Name"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="text"
              placeholder="Student Name"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="number"
              placeholder="Student Age"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Anything you'd like us to know?"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 focus:border-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-8 py-5 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Registration
            </button>

          </form>

        </div>

      </section>
    </main>
  );
}