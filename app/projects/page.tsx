import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "StopLee Golf Club",
    description:
      "A modern golf league platform featuring live leaderboards, statistics, power rankings, schedules, and season history.",
    image: "/projects/new-dashboard-stoplee.png",
    tech: ["Next.js", "React", "Tailwind", "Supabase"],
    reverse: false,
  },
  {
    title: "Young Creators",
    description:
      "An online coding academy designed to teach students real-world web development through engaging projects and live instruction.",
    image: "/projects/young-creators.png",
    tech: ["Next.js", "React", "Tailwind"],
    reverse: true,
  },
  {
    title: "Pay Homage",
    description:
      "An interactive QR-powered music experience allowing listeners to rate songs, leave feedback, and engage with artists in real time.",
    image: "/projects/pay-homage.png",
    tech: ["Next.js", "Supabase", "QR"],
    reverse: false,
  },
  {
    title: "Sociable Travels",
    description:
      "A travel platform focused on helping customers discover trips, leave reviews, and share unforgettable experiences.",
    image: "/projects/sociable-travels.jpg",
    tech: ["Next.js", "React", "Tailwind"],
    reverse: true,
  },
    {
    title: "Drama Club",
    description:
      "A premium fashion website designed to elevate the Drama Club brand through modern design, immersive visuals, and a seamless shopping experience.",
    image: "/projects/drama-club.jpg",
    tech: ["Next.js", "Shopify", "Tailwind", "E-Commerce"],
    reverse: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="mb-24 text-center">

          <p className="mb-3 uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Work
          </p>

          <h2 className="text-5xl font-bold">
            Real projects.
            <br />
            Real solutions.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            Every project starts with a problem. Our job is building
            technology that solves it.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-36">

          {projects.map((project) => (
            <div
              key={project.title}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                project.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-4 shadow-2xl">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1400}
                    height={900}
                    className="w-full rounded-2xl object-cover transition duration-500 hover:scale-105"
                />
                </div>

              {/* Content */}

              <div>

                <h3 className="mb-6 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-8 leading-8 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-10 flex flex-wrap gap-3">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-sm text-[#D4AF37]"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <Link
                  href="/"
                  className="font-semibold text-[#D4AF37] transition hover:opacity-70"
                >
                  Explore →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}