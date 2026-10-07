"use client";

import { useState } from "react";
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

const hosting = [
  {
    name: "Vercel Hosting",
    description: "FLTP hosts your website through our managed hosting infrastructure for $20/month.",
  },
  {
    name: "SSL Certificate",
    description: "Helps encrypt data sent between your website and its visitors, providing a secure connection.",
  },
  {
    name: "Deployment",
    description: "FLTP publishes your website to the internet and manages updates so your latest version stays live.",
  },
  {
    name: "Domain Connection",
    description: "FLTP connects your domain name to your website so visitors can access it using your chosen URL.",
  },
  {
    name: "Server Monitoring",
    description: "FLTP monitors the hosting server for uptime, performance, and security issues.",
  },
]

const thirdPartyServices = [
  {
    name: "Supabase",
    description:
      "A database and backend platform used to store information, manage user accounts, and power web applications.",
  },
  {
    name: "Payment Processors",
    description:
      "Services such as Square or Stripe that securely process customer payments.",
  },
  {
    name: "Email & SMS Services",
    description:
      "Services used to send emails, text messages, notifications, confirmations, and other communications.",
  },
  {
    name: "External Software Connections",
    description:
      "Connections that allow your website to communicate with another service or application.",
  },
  {
    name: "Other Software Platforms",
    description:
      "Third-party tools your project may need to provide specific features or functionality.",
  },
  
];

function ServiceItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        className="group flex w-full items-center gap-3 text-left"
        aria-expanded={open}
      >
        <span className="text-[#D4AF37]">✓</span>

        <span className="border-b border-transparent transition group-hover:border-[#D4AF37]">
          {name}
        </span>

        <span
          className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-xs text-gray-400 transition group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
          aria-hidden="true"
        >
          i
        </span>
      </button>

      {open && (
        <div className="mt-3 rounded-xl border border-[#D4AF37]/20 bg-zinc-900 p-4 text-sm leading-6 text-gray-400 shadow-xl">
          {description}
        </div>
      )}

      <div className="pointer-events-none absolute bottom-8 left-8 z-20 hidden w-72 rounded-xl border border-[#D4AF37]/20 bg-zinc-900 p-4 text-sm leading-6 text-gray-400 opacity-0 shadow-2xl transition-opacity duration-200 group-hover:block group-hover:opacity-100">
        {description}
      </div>
    </div>
  );
}

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
            Every project is different. After a free consultation, we'll
            provide a fixed quote based on your goals, timeline, and
            requirements—so you'll know exactly what to expect before we begin.
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
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
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

        {/* Third-Party Services */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12">

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              THIRD-PARTY SERVICES
            </p>

            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Your business. Your accounts. Clear responsibilities.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Some websites require additional third-party services to support
              databases, applications, payments, email, or other functionality.
              We keep these services separate from your FLTP hosting and
              maintenance fees.
            </p>
          </div>

          {/* Service Responsibilities */}

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* FLTP Hosting */}

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-7">
              <p className="text-lg font-semibold text-white">
                FLTP Hosting
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                FLTP hosts your website through our managed hosting
                infrastructure for $20/month.
              </p>

                  <div className="mt-6 space-y-4">
                {hosting.map((service) => (
                  <ServiceItem
                    key={service.name}
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </div>

              {/* <div className="mt-6 space-y-3">
                {[
                  "Vercel Hosting",
                  "SSL Certificate",
                  "Deployment",
                  "Domain Connection",
                  "Server Monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[#D4AF37]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Client-Owned Services */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-lg font-semibold text-white">
                Client-Owned Services
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                Some projects require additional third-party services. These
                services are established under your ownership whenever
                practical, with subscription and usage fees paid directly by
                your business.
              </p>

              <div className="mt-6 space-y-4">
                {thirdPartyServices.map((service) => (
                  <ServiceItem
                    key={service.name}
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Development & Production */}

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-lg font-semibold text-white">
                Development &amp; Testing
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                FLTP may use free-tier services while your website is being
                built and tested. These services may be upgraded or replaced
                when your website moves into production.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-lg font-semibold text-white">
                Production Launch
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                When your website goes live, required third-party services are
                established under your ownership whenever practical. FLTP can
                configure and integrate these services as part of your project.
              </p>
            </div>

          </div>

          {/* Why This Matters */}

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-7">

            <p className="text-lg font-semibold text-[#D4AF37]">
              Why this matters
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-gray-400">
              FLTP manages and supports your website while keeping
              project-specific third-party costs separate from your hosting
              and maintenance fees. Your business retains ownership of the
              external services and data it relies on.
            </p>

          </div>

          <p className="mt-8 text-sm leading-6 text-gray-500">
            Third-party service fees are separate from FLTP hosting and
            maintenance fees. Required services and associated costs will be
            identified before launch.
          </p>

        </div>

      </div>
    </section>
  );
}