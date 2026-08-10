import Link from "next/link";
import Curriculum from "@/components/young-creators/cirriculum/Curriculum";
import Navbar from "@/components/young-creators/Navbar";
import {
  User,
  Trophy,
  Pizza,
  Music,
  Briefcase,
  Rocket,
  CircleHelp,
} from "lucide-react";

export default function YoungCreatorsPage() {

const projects = [
  {
    icon: User,
    title: "Personal Portfolio",
    href: "/young-creators/projects/portfolio",
    text: "Create a website that introduces yourself...",
  },
  {
    icon: Trophy,
    title: "Favorite Team Website",
    href: "/young-creators/projects/sports",
    text: "Design a modern fan page for your favorite sports team.",
  },
  {
    icon: Pizza,
    title: "Restaurant Website",
    href: "/young-creators/projects/restaurant",
    text: "Build a professional restaurant homepage.",
  },
  {
    icon: Music,
    title: "Music Artist Page",
    href: "/young-creators/projects/music",
    text: "Showcase your favorite artist or album.",
  },
  {
    icon: Briefcase,
    title: "Business Landing Page",
    href: "/young-creators/projects/business",
    text: "Learn how businesses present products online.",
  },
  {
    icon: Rocket,
    title: "Final Showcase Project",
    href: "/young-creators/projects/showcase",
    text: "Combine everything into your final website.",
  },
];


  return (


<main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
  
        <Navbar />

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-32 text-center">

        <p className="uppercase tracking-[0.4em] text-slate-600">
          🚀 Fall 2026 Enrollment Open
        </p>

        <h1 className="text-7xl font-extrabold leading-tight text-slate-900">
          Build More Than
          <br />
          <span className="text-[#2563EB]">Websites.</span>
          <br />
          Build Confidence.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-600">
          Learn real web development through hands-on projects taught by an
          experienced software engineer. Students don't just learn to code—
          they create websites they're proud to share.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-6 sm:flex-row">

          <Link
            href="/young-creators/enroll"
            className="rounded-full bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
          >
            Reserve Your Spot
          </Link>

          <Link
            href="#journey"
              className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border-2
              border-[#2563EB]
              bg-white
              px-8
              py-4
              font-semibold
              text-[#2563EB]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EFF6FF]
              hover:shadow-md
              "
          >
            Explore Curriculum →
          </Link>

        </div>

      </section>

      {/* Why Young Creators */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">


        <Curriculum />

        </div>

      </section>
          {/* The Journey */}

          <section
            id="journey"
            className="mx-auto max-w-7xl px-6 py-28"
          >

            <div className="text-center">

              <p className="uppercase tracking-[0.4em] text-slate-600">
                THE JOURNEY
              </p>

              <h2 className="mt-6 text-4xl font-bold md:text-6xl text-slate-900">
                Six Weeks.
              </h2>
                <br />
              <h2 className="mt-6 text-4xl font-bold md:text-6xl text-[#2563EB]">
                One Incredible Transformation.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                Every week builds on the last. Students leave camp with practical
                skills, confidence, and a real website they can proudly share.
              </p>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-slate-600">

              {[
                {
                  week: "Week 1",
                  title: "HTML Foundations",
                  text: "Learn how websites are structured and build your very first web page.",
                },
                {
                  week: "Week 2",
                  title: "CSS Styling",
                  text: "Add colors, layouts, spacing, fonts, and animations to bring your website to life.",
                },
                {
                  week: "Week 3",
                  title: "JavaScript Basics",
                  text: "Introduce interactivity by responding to clicks, buttons, and user input.",
                },
                {
                  week: "Week 4",
                  title: "Responsive Design",
                  text: "Make websites look great on phones, tablets, and desktop computers.",
                },
                {
                  week: "Week 5",
                  title: "Build Your Final Project",
                  text: "Combine everything you've learned into a polished personal website.",
                },
                {
                  week: "Week 6",
                  title: "Launch Day 🚀",
                  text: "Deploy your website online and present your project during Demo Day.",
                },
              ].map((item) => (
                <div
                  key={item.week}
                    className="
                    group
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#2563EB]
                    hover:shadow-xl
                    text-slate-900
                    ">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB]">
                    {item.week}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* What Students Build */}

<section className="mx-auto max-w-7xl px-6 py-28">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-slate-600">
      WHAT STUDENTS BUILD
    </p>

    <h2 className="mt-6 text-4xl font-bold md:text-6xl text-slate-900">
      Real Projects.
    </h2>
      <br />
    <h2 className="text-4xl font-bold md:text-6xl text-[#2563EB]">
      Real Confidence.
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Students don't just complete lessons—they leave with projects they can
      proudly share with friends, family, and future schools.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{[
  {
    emoji: "👤",
    title: "Personal Portfolio",
    text: "Create a website that introduces yourself, your hobbies, and your accomplishments.",
    href: "/young-creators/projects/portfolio",
  },
  {
    emoji: "🏀",
    title: "Favorite Team Website",
    text: "Design a modern fan page for your favorite sports team or athlete.",
    href: "/young-creators/projects/sports",
  },
  {
    emoji: "🍕",
    title: "Restaurant Website",
    text: "Build a professional restaurant homepage complete with menus and contact information.",
    href: "/young-creators/projects/restaurant",
  },
  {
    emoji: "🎵",
    title: "Music Artist Page",
    text: "Showcase your favorite artist or album with custom layouts and media sections.",
    href: "/young-creators/projects/music",
  },
  {
    emoji: "💼",
    title: "Business Landing Page",
    text: "Learn how real businesses present their products and services online.",
    href: "/young-creators/projects/business",
  },
  {
    emoji: "🚀",
    title: "Final Showcase Project",
    text: "Combine everything you've learned into a polished website presented on Demo Day.",
    href: "/young-creators/projects/showcase",
  },
].map((project) => (
  <div
    key={project.title}
    className="
      group
      rounded-3xl
      border-2
      border-blue-100
      bg-gradient-to-br
      from-white
      to-blue-50
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#2563EB]
      hover:shadow-2xl
      hover:ring-4
      hover:ring-blue-100
    "
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#4F8CFF] text-3xl shadow-lg">
      {project.emoji}
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#2563EB]">
      {project.title}
    </h3>

    <p className="mt-4 leading-8 text-slate-600">
      {project.text}
    </p>

<Link
  href={project.href}
  className="mt-8 inline-flex items-center font-semibold text-[#2563EB] hover:underline"
>
  View Project →
</Link>
  </div>
))}

  </div>

</section>

{/* Meet Your Instructor */}

<section className="mx-auto max-w-7xl px-6 py-32">

  <div className="grid items-center gap-20 lg:grid-cols-2">

    {/* Photo */}

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

      <img
        src="/images/andrelogan.png"
        alt="Andrè Logan"
        className="h-full w-full object-cover"
      />

    </div>

    {/* Content */}

    <div>

      <p className="uppercase tracking-[0.4em] text-slate-900">
        MEET YOUR INSTRUCTOR
      </p>

      <h2 className="mt-6 text-5xl font-bold text-[#2563EB]">
        Andrè Logan
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">
        I'm passionate about helping young people discover that technology
        isn't just something they use—it's something they can create.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        As a former Software Engineer at JPMorgan Chase and former Software
        Development Instructor at Code Differently, I've had the opportunity
        to build real-world software and teach the next generation of
        developers.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        My goal is simple: give every student the confidence to build,
        experiment, solve problems, and leave camp with a website they're
        excited to share.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#2563EB]">
            2+
          </p>

          <p className="mt-2 text-slate-600">
            Years Teaching Software Development
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#2563EB]">
            2+
          </p>

          <p className="mt-2 text-slate-600">
            Years as a Software Engineer
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#2563EB]">
            Project
          </p>

          <p className="mt-2 text-slate-600">
            Based Learning
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#2563EB]">
            Small
          </p>

          <p className="mt-2 text-slate-600">
            Class Sizes (10-15 Students)
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Camp Details */}

<section className="mx-auto max-w-7xl px-6 py-32">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-slate-600">
      CAMP DETAILS
    </p>

    <h2 className="mt-6 text-4xl font-bold md:text-6xl text-slate-900">
      Everything You Need
    </h2>
      <br />
    <h2 className="mt-6 text-4xl font-bold md:text-6xl text-[#2563EB]">
      To Know
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
      Designed to provide students with a fun, engaging, and supportive
      introduction to web development.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


{projects.map((project) => {
  const Icon = project.icon;

  return (
    <div
      key={project.title}
      className="
        group
        rounded-3xl
        border-2
        border-blue-100
        bg-gradient-to-br
        from-white
        to-blue-50
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#2563EB]
        hover:shadow-2xl
        hover:ring-4
        hover:ring-blue-100
      "
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#4F8CFF] shadow-lg">
        <Icon
          size={34}
          className="text-white transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#2563EB]">
        {project.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {project.text}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-[#2563EB] opacity-0 transition-all duration-300 group-hover:opacity-100">
        View Project →
      </div>
    </div>
  );
})}

  </div>

</section>

{/* Frequently Asked Questions */}

<section className="mx-auto max-w-7xl px-6 py-32">

<div className="text-center">

  <p className="uppercase tracking-[0.4em] font-semibold text-[#2563EB]">
    FREQUENTLY ASKED QUESTIONS
  </p>

  <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
    Questions Parents
    <br />
    <span className="text-[#2563EB]">
      Often Ask
    </span>
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
    Everything you need to know before enrolling your student.
  </p>

</div>

  <div className="mt-20 space-y-6">

{[
  {
    question: "Does my child need coding experience?",
    answer:
      "No. This camp is designed for beginners. We'll guide students step by step from their very first line of code.",
  },
  {
    question: "Does my child need a laptop?",
    answer:
      "Yes. Students should have access to a laptop or desktop computer with a reliable internet connection. Tablets and phones are not recommended.",
  },
  {
    question: "What software is required?",
    answer:
      "We'll use free tools including Visual Studio Code, Google Meet, Zoom, and a reliable internet connection. Instructions will be provided before camp begins.",
  },
  {
    question: "Will students build a real website?",
    answer:
      "Absolutely. Every student will complete projects throughout the camp and publish a final website they can proudly share.",
  },
  {
    question: "What happens if my child misses a class?",
    answer:
      "We'll work with families to help students stay on track by providing guidance and resources whenever possible.",
  },
  {
    question: "Will students receive a certificate?",
    answer:
      "Yes. Students who complete the camp will receive a Young Creators Certificate of Completion.",
  },
].map((faq) => (
  <div
    key={faq.question}
    className="
      group
      rounded-3xl
      border-2
      border-blue-100
      bg-gradient-to-br
      from-white
      to-blue-50
      p-8
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#2563EB]
      hover:shadow-2xl
      hover:ring-4
      hover:ring-blue-100
    "
  >
<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] shadow-md transition-transform duration-300 group-hover:scale-110">
  <CircleHelp size={24} className="text-white" />
</div>

    <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#2563EB]">
      {faq.question}
    </h3>

    <p className="mt-5 leading-8 text-slate-600">
      {faq.answer}
    </p>
  </div>
))}

  </div>

</section>

{/* Final CTA */}

<section className="mx-auto max-w-6xl px-6 py-32 text-center">

  <p className="uppercase tracking-[0.4em] text-slate-600">
    READY TO GET STARTED?
  </p>

  <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl text-slate-900">
    Give Your Child
    <br />
    <span className="text-[#2563EB]">
      A Head Start
    </span>
    <br />
    In Technology.
  </h2>

  <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-600">
    Young Creators is more than a coding camp. Students build confidence,
    solve real problems, and create websites they're excited to share with
    friends and family.
  </p>

  <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row">

    <Link
      href="/young-creators/enroll"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#2563EB]
        px-10
        py-5
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-700
        hover:shadow-xl
      "
    >
      Reserve Your Spot →
    </Link>

    <a
      href="mailto:fltp8125@gmail.com"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border-2
        border-[#2563EB]
        bg-white
        px-10
        py-5
        text-lg
        font-semibold
        text-[#2563EB]
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-50
        hover:shadow-lg
      "
    >
      Ask a Question
    </a>

  </div>

</section>

    </main>
  );
}