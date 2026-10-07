
import Image from "next/image";
import Link from "next/link";
import ProjectStats from "./ProjectStats";

type Project = {
  title: string;
  client: string;
  category: string;
  year: string;
  status: string;

  image: string;

  problem: string;
  solution: string;

  services: string[];
  results: string[];

  deliverables: string[];
  stack: string[];

  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };

  demo: string;
  github: string;
};

type Props = {
  project: Project;
  reverse?: boolean;
};

export default function FeaturedProject({
  project,
  reverse = false,
}: Props) {
  return (
    <section
      className={`grid items-center gap-20 py-28 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          {project.category}
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          {project.title}
        </h2>

        <div className="mt-6 h-[2px] w-20 bg-[#D4AF37]" />

        <ProjectStats
          client={project.client}
          year={project.year}
          status={project.status}
        />

        {/* Challenge */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold">
            Challenge
          </h3>

          <p className="mt-3 leading-8 text-gray-400">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold">
            Solution
          </h3>

          <p className="mt-3 leading-8 text-gray-400">
            {project.solution}
          </p>
        </div>

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="absolute right-5 top-0 text-8xl font-serif leading-none text-[#D4AF37]/15"
            >
              &ldquo;
            </span>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Client Testimonial
            </p>

            <blockquote className="relative mt-5 text-lg leading-8 text-gray-200">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-lg font-semibold text-[#D4AF37]">
                {project.testimonial.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="font-semibold text-white">
                  {project.testimonial.name}
                </p>

                {project.testimonial.role && (
                  <p className="mt-1 text-sm text-gray-400">
                    {project.testimonial.role}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Deliverables */}
        <div className="mt-12">
          <h3 className="mb-5 text-xl font-semibold">
            Deliverables
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.deliverables.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="mb-5 text-xl font-semibold">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          {project.demo &&
            project.demo !== "#" && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Website
              </Link>
            )}
        </div>
      </div>
    </section>
  );
}