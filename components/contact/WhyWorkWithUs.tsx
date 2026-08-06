import {
  Code2,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: <Code2 className="h-8 w-8 text-[#D4AF37]" />,
    title: "Custom Solutions",
    description:
      "Every website and application is designed specifically for your business. No templates. No one-size-fits-all approach.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-[#D4AF37]" />,
    title: "Real Industry Experience",
    description:
      "Built by a former software engineer and instructor with experience developing modern web applications and teaching the next generation of developers.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#D4AF37]" />,
    title: "A Collaborative Process",
    description:
      "We work with you from discovery through launch, keeping communication clear and ensuring your goals remain the priority.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[#D4AF37]" />,
    title: "Built to Grow",
    description:
      "Our focus isn't just launching a website—it's creating digital solutions that can evolve alongside your business.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="text-center">
        <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
          Why Choose FLTP
        </p>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
          More than a website.
          <br />
          A long-term technology partner.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          We combine technical expertise, thoughtful design, and a collaborative
          process to build digital experiences that help businesses grow with
          confidence.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
          >
            {reason.icon}

            <h3 className="mt-6 text-2xl font-semibold">
              {reason.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              {reason.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}