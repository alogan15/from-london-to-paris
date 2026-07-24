import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites designed to build credibility, attract customers, and grow your business online.",
    image: "/services/website-development.jpg",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "SEO Ready",
      "Contact Forms",
      "Fast Performance",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Custom software that streamlines workflows, improves productivity, and gives your business the tools it needs to grow.",
    image: "/services/web-applications.jpg",
    features: [
      "Dashboards",
      "Client Portals",
      "Booking Systems",
      "Admin Panels",
      "Custom Workflows",
    ],
  },
  {
    title: "AI Solutions",
    description:
      "Use artificial intelligence to automate repetitive work, improve customer experiences, and unlock new opportunities.",
    image: "/services/ai-solutions.jpg",
    features: [
      "AI Chatbots",
      "Business Automation",
      "Content Generation",
      "Internal AI Tools",
      "Workflow Optimization",
    ],
  },
  {
    title: "QR Experiences",
    description:
      "Create memorable digital experiences by connecting printed materials to engaging online content.",
    image: "/services/qr-experiences.jpg",
    features: [
      "Music Experiences",
      "Restaurant Menus",
      "Marketing Campaigns",
      "Product Information",
      "Event QR Codes",
    ],
  },
  {
    title: "Coding Education",
    description:
      "Empowering the next generation through hands-on coding education, mentorship, and real-world projects.",
    image: "/services/coding-education.jpg",
    features: [
      "Coding Camps",
      "Mentorship",
      "Workshops",
      "Project-Based Learning",
      "Beginner Web Development",
    ],
  },
];

export default function Services() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-28 text-center">
        <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
          OUR SERVICES
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Building software
          <br />
          solutions for
          <br />
          small businesses.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          From custom websites to AI-powered tools, we help businesses grow
          through thoughtful design, modern technology, and software built
          around their goals.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
        >
          Start a Project
        </Link>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`grid items-center gap-16 py-24 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Content */}
            <div>
              <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
                Service
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                {service.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                {service.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-[#D4AF37]/50 hover:bg-white/10"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Website Care Plans Preview */}
      <section className="border-t border-white/10 bg-zinc-950 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
            WEBSITE CARE PLANS
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Your website deserves ongoing care.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Launching your website is only the beginning. We provide ongoing
            maintenance, security updates, backups, and support to keep your
            investment running smoothly long after launch.
          </p>

          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Ask About Care Plans
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Ready to build something amazing?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Whether you need a custom website, business software, AI solution, or
          ongoing website support, From London to Paris is ready to help bring
          your vision to life.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
        >
          Let's Build Together
        </Link>
      </section>
    </main>
  );
}