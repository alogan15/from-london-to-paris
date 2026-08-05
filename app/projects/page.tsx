import Link from "next/link";
import { projects } from "@/components/projects/projectData";
import FeaturedProject from "@/components/projects/FeaturedProject";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}

      <section className="mx-auto max-w-6xl px-6 py-28 text-center">

        <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
          OUR WORK
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Real software.
          <br />
          Real solutions.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Every project starts with a unique challenge. Explore how we've
          helped businesses, organizations, and creators transform ideas
          into modern digital experiences.
        </p>

      </section>

      {/* Projects */}

      <section className="mx-auto max-w-7xl px-6">

        {projects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 py-28">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
            READY TO START?
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Let's build your next project.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you need a business website, custom software,
            AI solution, or something completely unique,
            we'd love to hear about your vision.
          </p>

          <Link
            href="/discovery"
            className="mt-12 inline-flex rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>

        </div>

      </section>

    </main>
  );
}