import {
  Globe,
  Bot,
  QrCode,
  GraduationCap,
} from "lucide-react";

export default function Build() {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description:
        "Modern websites designed to help businesses stand out and convert visitors into customers.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description:
        "Save time with AI workflows, automations, and intelligent business tools.",
    },
    {
      icon: QrCode,
      title: "QR Experiences",
      description:
        "Interactive QR code solutions for events, products, music, restaurants, and marketing.",
    },
    {
      icon: GraduationCap,
      title: "Coding Education",
      description:
        "Helping the next generation learn real-world coding through Young Creators.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#050505] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#D4AF37]">
            What We Build
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technology that solves real problems.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every project begins with understanding the problem.
            Then we design the right digital solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-10 transition duration-300 hover:border-[#D4AF37] hover:bg-white/[0.04]"
              >
                <Icon
                  size={38}
                  className="mb-8 text-[#D4AF37]"
                />

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}