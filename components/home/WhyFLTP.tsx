export default function WhyFLTP() {
  const values = [
    {
      title: "Mobile First",
      description:
        "Every experience is designed to perform beautifully across phones, tablets, and desktops.",
    },
    {
      title: "Built to Scale",
      description:
        "From startups to growing organizations, we build solutions that evolve with your business.",
    },
    {
      title: "Modern Technology",
      description:
        "Powered by Next.js, React, AI, and modern development practices for speed and reliability.",
    },
    {
      title: "Partnership",
      description:
        "Launching is only the beginning. We continue improving and supporting your digital products.",
    },
  ];

  return (
    <section className="bg-[#050505] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37]">
            Why FLTP
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Building websites is easy.
            <br />
            Building solutions people love
            <br />
            to use is where we shine.
          </h2>

        </div>

        {/* Values */}

        <div>

          {values.map((item) => (
            <div
              key={item.title}
              className="border-t border-white/10 py-14"
            >
              <h3 className="mb-4 text-3xl font-semibold">
                {item.title}
              </h3>

              <p className="max-w-3xl text-lg leading-8 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

          <div className="border-t border-white/10"></div>

        </div>

      </div>
    </section>
  );
}