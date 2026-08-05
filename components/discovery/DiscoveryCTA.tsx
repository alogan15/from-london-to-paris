import Link from "next/link";

export default function DiscoveryCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-32 text-center">

      <h2 className="text-4xl font-bold md:text-6xl">
        Ready to begin?
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        The questionnaire takes about 10–15 minutes to complete. Once submitted,
        we'll review your project and reach out to schedule your Discovery Call.
      </p>

      <Link
        href="/discovery/form"
        className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
      >
        Begin Discovery
      </Link>

    </section>
  );
}