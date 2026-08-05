import Link from "next/link";

export default function YoungCreatorsPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-32 text-center">

        <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
          YOUNG CREATORS
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Learn to Build
          <br />
          Real Websites.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          A hands-on coding camp where students learn HTML, CSS,
          JavaScript, and modern web development by creating real
          projects they can proudly share.
        </p>

        <Link
          href="/discovery"
          className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-5 font-semibold text-black transition hover:scale-105"
        >
          Join the Next Camp
        </Link>

      </section>

      {/* Placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">

        <h2 className="text-4xl font-bold">
          Page Under Construction
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          We're building an exciting experience for future developers.
          Soon you'll be able to explore the curriculum, instructor,
          projects, schedule, pricing, and reserve your spot online.
        </p>

      </section>

    </main>
  );
}