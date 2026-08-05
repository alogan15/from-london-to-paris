const benefits = [
  "Accurate project recommendations",
  "Clear project scope",
  "Faster development",
  "Transparent pricing",
  "Less back-and-forth",
  "A smoother launch",
];

export default function DiscoveryBenefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-32">

      <div className="rounded-3xl border border-white/10 bg-zinc-950 p-12">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          WHY DISCOVERY?
        </p>

        <h2 className="mt-5 text-4xl font-bold">
          We don't guess.
          <br />
          We learn first.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Our Discovery Questionnaire takes about 10–15 minutes and gives us
          everything we need to recommend the right solution for your business.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-black/40 px-6 py-5"
            >
              ✓ {item}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}