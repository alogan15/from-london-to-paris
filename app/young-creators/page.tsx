import Link from "next/link";

export default function YoungCreatorsPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-32 text-center">

        <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
          YOUNG CREATORS
        </p>

        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
          Build More Than
          <br />
          Websites.
          <br />
          Build Confidence.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-400">
          Learn real web development through hands-on projects taught by an
          experienced software engineer. Students don't just learn to code—
          they create websites they're proud to share.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">

          <Link
            href="/young-creators/enroll"
            className="rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
          >
            Reserve Your Spot
          </Link>

          <Link
            href="#journey"
            className="rounded-full border border-white/20 px-10 py-5 text-lg transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Explore the Camp
          </Link>

        </div>

      </section>

      {/* Why Young Creators */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
            WHY YOUNG CREATORS
          </p>

          {/* The Journey */}

          <section
            id="journey"
            className="mx-auto max-w-7xl px-6 py-28"
          >

            <div className="text-center">

              <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
                THE JOURNEY
              </p>

              <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                Six Weeks.
                <br />
                One Incredible Transformation.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
                Every week builds on the last. Students leave camp with practical
                skills, confidence, and a real website they can proudly share.
              </p>

            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    {item.week}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* What Students Build */}

<section className="mx-auto max-w-7xl px-6 py-28">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
      WHAT STUDENTS BUILD
    </p>

    <h2 className="mt-6 text-4xl font-bold md:text-6xl">
      Real Projects.
      <br />
      Real Confidence.
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
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
      },
      {
        emoji: "🏀",
        title: "Favorite Team Website",
        text: "Design a modern fan page for your favorite sports team or athlete.",
      },
      {
        emoji: "🍕",
        title: "Restaurant Website",
        text: "Build a professional restaurant homepage complete with menus and contact information.",
      },
      {
        emoji: "🎵",
        title: "Music Artist Page",
        text: "Showcase your favorite artist or album with custom layouts and media sections.",
      },
      {
        emoji: "💼",
        title: "Business Landing Page",
        text: "Learn how real businesses present their products and services online.",
      },
      {
        emoji: "🚀",
        title: "Final Showcase Project",
        text: "Combine everything you've learned into a polished website presented on Demo Day.",
      },
    ].map((project) => (
      <div
        key={project.title}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
      >
        <div className="text-5xl">
          {project.emoji}
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-6 leading-8 text-gray-400">
          {project.text}
        </p>
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

      <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
        MEET YOUR INSTRUCTOR
      </p>

      <h2 className="mt-6 text-5xl font-bold">
        Andrè Logan
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-400">
        I'm passionate about helping young people discover that technology
        isn't just something they use—it's something they can create.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        As a former Software Engineer at JPMorgan Chase and former Software
        Development Instructor at Code Differently, I've had the opportunity
        to build real-world software and teach the next generation of
        developers.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        My goal is simple: give every student the confidence to build,
        experiment, solve problems, and leave camp with a website they're
        excited to share.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#D4AF37]">
            2+
          </p>

          <p className="mt-2 text-gray-400">
            Years Teaching Software Development
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#D4AF37]">
            2+
          </p>

          <p className="mt-2 text-gray-400">
            Years as a Software Engineer
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#D4AF37]">
            Project
          </p>

          <p className="mt-2 text-gray-400">
            Based Learning
          </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <p className="text-3xl font-bold text-[#D4AF37]">
            Small
          </p>

          <p className="mt-2 text-gray-400">
            Class Sizes
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Camp Details */}

<section className="mx-auto max-w-7xl px-6 py-32">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
      CAMP DETAILS
    </p>

    <h2 className="mt-6 text-4xl font-bold md:text-6xl">
      Everything You Need
      <br />
      To Know
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Designed to provide students with a fun, engaging, and supportive
      introduction to web development.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        title: "👦 Ages",
        value: "10–17 Years Old",
      },
      {
        title: "📅 Duration",
        value: "8 Weeks",
      },
      {
        title: "💻 Format",
        value: "Live Online",
      },
      {
        title: "🗓 Schedule",
        value: "Tuesday & Thursday\n4:30 PM – 6:00 PM",
      },
      {
        title: "👥 Class Size",
        value: "Maximum of 10 Students",
      },
{
  title: "💲 Early Enrollment",
  value:
    "$250 Early Bird\n\nRegular Tuition: $300\n\nSave $50 when you enroll before the Early Enrollment Deadline.",
},
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
      >
        <h3 className="text-2xl font-bold">
          {item.title}
        </h3>

        <p className="mt-6 whitespace-pre-line text-lg leading-8 text-gray-400">
          {item.value}
        </p>
      </div>
    ))}

  </div>

</section>

{/* Frequently Asked Questions */}

<section className="mx-auto max-w-7xl px-6 py-32">

  <div className="text-center">

    <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
      FREQUENTLY ASKED QUESTIONS
    </p>

    <h2 className="mt-6 text-4xl font-bold md:text-6xl">
      Questions Parents
      <br />
      Often Ask
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
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
          "We'll use free tools including Visual Studio Code/CodePen, Google Meet, Zoom, and stable Wifi. Instructions will be provided before camp begins.",
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
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h3 className="text-2xl font-bold">
          {faq.question}
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          {faq.answer}
        </p>
      </div>
    ))}

  </div>

</section>

{/* Final CTA */}

<section className="mx-auto max-w-6xl px-6 py-32 text-center">

  <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
    READY TO GET STARTED?
  </p>

  <h2 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
    Give Your Child
    <br />
    A Head Start
    <br />
    In Technology.
  </h2>

  <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-400">
    Young Creators is more than a coding camp. It's an opportunity for
    students to build confidence, solve problems, and create something
    they're proud to share. Whether your child dreams of becoming a
    developer or simply wants to explore technology, this is where the
    journey begins.
  </p>

  <div className="mt-14 flex flex-col justify-center gap-6 sm:flex-row">

    <Link
      href="/discovery"
      className="rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
    >
      Reserve Your Spot
    </Link>

    <a
      href="mailto:fltp8125@gmail.com"
      className="rounded-full border border-white/20 px-10 py-5 text-lg transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
    >
      Ask a Question
    </a>

  </div>

  <p className="mt-10 text-sm uppercase tracking-[0.3em] text-gray-500">
    Limited class sizes • Live instruction • Hands-on learning
  </p>

</section>
          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Learning by Building.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every lesson is project-based. Students learn modern web
            development while building real websites from the ground up.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-2xl font-bold">
              💡 Learn by Building
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              No boring lectures. Students write real code from day one and
              see their projects come to life.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-2xl font-bold">
              🚀 Real Skills
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Learn HTML, CSS, JavaScript, responsive design, GitHub, and
              website deployment.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-2xl font-bold">
              🤝 Small Class Sizes
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Every student receives personal guidance and mentorship in a
              supportive learning environment.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}