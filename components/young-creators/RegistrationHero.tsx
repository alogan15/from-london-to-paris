export default function RegistrationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">

      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">

        {/* Badge */}

        <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-5 py-2 shadow-sm">

          <span className="mr-2 text-xl">🚀</span>

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Fall 2026 Enrollment
          </span>

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">

          Reserve Your

          <br />

          <span className="text-blue-600">
            Child's Spot
          </span>

        </h1>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

          Complete the registration below to reserve your child's seat in
          <span className="font-semibold text-slate-900">
            {" "}Young Creators Coding Camp.
          </span>{" "}
          We intentionally keep our classes small so every student receives
          personal guidance while building real websites.

        </p>

        {/* Stats */}

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-md">

            <p className="text-3xl font-bold text-blue-600">
              10
            </p>

            <p className="mt-2 font-medium text-slate-700">
              Students Per Cohort
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-md">

            <p className="text-3xl font-bold text-blue-600">
              6
            </p>

            <p className="mt-2 font-medium text-slate-700">
              Weeks of Live Instruction
            </p>

          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-md">

            <p className="text-3xl font-bold text-blue-600">
              Ages 10–17
              
              
            </p>

            <p className="mt-2 font-medium text-slate-700">
              Beginner Friendly
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}