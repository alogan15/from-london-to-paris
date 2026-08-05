import Link from "next/link";

const plans = [
  {
    title: "Launch Website",
    price: "Starting at $800",
    description:
      "Everything you need to establish a professional online presence.",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "SEO Ready",
      "Contact Forms",
      "Launch Training",
    ],
    highlighted: false,
  },
  {
    title: "Website Care",
    price: "Starting at $75/mo",
    description:
      "Keep your website secure, updated, and performing at its best long after launch.",
    features: [
      "Content Updates",
      "Security Monitoring",
      "Monthly Backups",
      "Bug Fixes",
      "Performance Optimization",
      "Priority Support",
      "Framework Updates",
    ],
    highlighted: true,
  },
  {
    title: "Monthly Hosting",
    price: "$20/mo",
    description:
      "Reliable hosting infrastructure to keep your website online 24/7.",
    features: [
      "Fast Hosting",
      "SSL Certificate",
      "Database Hosting",
      "Server Monitoring",
      "Domain Connection",
    ],
    highlighted: false,
  },
];

export default function CarePlans() {
  return (
  <section className="border-t border-white/10 bg-zinc-950 py-32 text-white">
    <div className="mx-auto max-w-7xl px-6">

      {/* Heading */}

      <div className="mx-auto mb-20 max-w-4xl text-center">
        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          WEBSITE CARE PLANS
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Your website deserves
          <br />
          ongoing care.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Launching your website is only the beginning. Just like any
          investment, it needs regular maintenance to stay secure, fast,
          reliable, and up to date.
        </p>
      </div>

      {/* Transparent Pricing */}

      <div className="mx-auto mb-20 max-w-3xl rounded-3xl border border-[#D4AF37]/30 bg-black/40 px-8 py-10 text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          TRANSPARENT PRICING
        </p>

        <h3 className="mt-4 text-3xl font-bold">
          Built around your business—not a one-size-fits-all package.
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Every project is different. After a free consultation, we'll provide
          a fixed quote based on your goals, timeline, and requirements—so
          you'll know exactly what to expect before we begin.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          No hidden fees. No surprise invoices. Just honest pricing and clear
          communication.
        </p>

      </div>

      {/* Pricing Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {plans.map((plan) => (

          <div
            key={plan.title}
            className={`rounded-3xl border p-10 transition duration-300 hover:-translate-y-2 ${
              plan.highlighted
                ? "border-[#D4AF37] bg-[#111111]"
                : "border-white/10 bg-black"
            }`}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
              {plan.title}
            </p>

            <h3 className="mt-5 text-4xl font-bold">
              {plan.price}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {plan.description}
            </p>

            <div className="mt-10 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#D4AF37]">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/discovery"
              className={`mt-10 inline-flex rounded-full px-6 py-3 font-semibold transition ${
                plan.highlighted
                  ? "bg-[#D4AF37] text-black hover:scale-105"
                  : "border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              Get Started
            </Link>

          </div>

        ))}

      </div>

      {/* Protect Your Investment */}

    </div>
  </section>
);
}