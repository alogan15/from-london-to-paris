import Image from "next/image";
import Link from "next/link";
import CarePlans from "./CarePlans";

const services = [
{
  eyebrow: "BUILD YOUR PRESENCE",
  title: "Website Development",
  description:
    "Your website is more than an online brochure—it's often the first impression customers have of your business. We create modern, high-performing websites that build trust, generate leads, and help your business grow.",
  image: "/services/website-design.jpg",
  features: [
    "Custom Design",
    "Mobile Responsive",
    "SEO Ready",
    "Contact Forms",
    "Fast Performance",
  ],
  quote: "Your business deserves more than a template.",
  button: "Start Your Website",
},
{
  eyebrow: "CUSTOM SOFTWARE",
  title: "Web Applications",
  description:
    "Every business is different. We create custom web applications that simplify operations, improve efficiency, and help your team work smarter.",
  image: "/services/custom-software.jpg",
  features: [
    "Dashboards",
    "Client Portals",
    "Booking Systems",
    "Admin Panels",
    "Custom Workflows",
  ],
    quote: "Software built around your business—not the other way around.",
    button: "Build My App",
},
{
  eyebrow: "WORK SMARTER",
  title: "AI Solutions",
  description:
    "Artificial intelligence can save time, reduce repetitive work, and improve customer experiences. We build practical AI tools that deliver real business value.",
  image: "/services/ai-integ.png",
  features: [
    "AI Chatbots",
    "Business Automation",
    "Content Generation",
    "Internal AI Tools",
    "Workflow Optimization",
  ],
  quote: "Save hours every week through intelligent automation.",
  button: "Explore AI",
},
{
  eyebrow: "DIGITAL EXPERIENCES",
  title: "QR Experiences",
  description:
    "Transform printed materials into interactive digital experiences that engage customers, share information, and create memorable moments.",
  image: "/services/qr-exp.png",
  features: [
    "Music Experiences",
    "Restaurant Menus",
    "Marketing Campaigns",
    "Product Information",
    "Event QR Codes",
  ],
  quote: "Turn every scan into an experience.",
  button: "Create an Experience",
},
{
  eyebrow: "INVEST IN THE FUTURE",
  title: "Coding Education",
  description:
    "We believe technology changes lives. Through hands-on instruction and real-world projects, we help students build confidence and valuable coding skills.",
  image: "/services/code-educ.png",
  features: [
    "Coding Camps",
    "Mentorship",
    "Workshops",
    "Project-Based Learning",
    "Beginner Web Development",
  ],
  quote: "Teaching tomorrow's developers today.",
  button: "Learn More",
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

      <p className="mt-8 text-xl font-medium text-[#D4AF37]">
        Technology built around your business—not the other way around.
      </p>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Whether you need a custom website or AI-powered tools, we design software that helps your business grow.
      </p>

      <Link
        href="/discovery"
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
          className={`grid items-center gap-20 py-28 lg:grid-cols-2 ${
            index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Content */}
          <div className="relative">

            {/* Background Number */}
            <p className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 select-none text-[11rem] font-black text-white/14">
              {String(index + 1).padStart(2, "0")}
            </p>

            {/* Eyebrow */}
            <p className="relative uppercase tracking-[0.35em] text-sm font-semibold text-[#D4AF37]">
              {service.eyebrow}
            </p>

            {/* Title */}
            <h2 className="relative mt-4 text-4xl font-bold md:text-5xl">
              {service.title}
            </h2>

            {/* Gold Divider */}
            <div className="relative mt-6 h-[2px] w-20 bg-[#D4AF37]" />

            {/* Description */}
            <p className="relative mt-8 text-lg leading-8 text-gray-400">
              {service.description}
            </p>

            {/* Quote */}
            {service.quote && (
              <p className="relative mt-10 text-xl font-semibold leading-relaxed text-[#D4AF37]">
                {service.quote}
              </p>
            )}

            {/* Features */}
            <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-[#D4AF37]/50 hover:bg-white/10"
                >
                  <span className="text-[#D4AF37]">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              href="/discovery"
              className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:gap-4"
            >
              {service.button || "Start Your Project"} →
            </Link>

          </div>

          {/* Image */}
          <div className="group overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={700}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      ))}
    </section>

    {/* Website Care Plans Preview */}
    <CarePlans /> 

    {/* Final CTA */}
    <section className="mx-auto max-w-6xl px-6 py-28 text-center">
      <h2 className="text-4xl font-bold md:text-6xl">
        Let's build something that grows your business.
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Technology should help your business move faster,
        not create more work.
      </p>

      <Link
        href="/consultation"
        className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
      >
          Schedule a Free 30-Minute Consultation      
      </Link>
    </section>
  </main>
);
}