import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Globe, Heart } from "lucide-react";

export default function PortfolioExamplePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100">

      {/* Navigation */}

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow">
          Student Example
        </div>
      
      </div>

      {/* Hero */}

      <section className="mx-auto max-w-5xl px-6 py-12 text-center">

        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-8 border-white shadow-xl">

          <Image
            src="/young-creators/images/portfolio/student.jpg"
            alt="Student"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />

        </div>

        <h1 className="mt-8 text-6xl font-extrabold text-slate-900">
          Hi, I'm
          <span className="text-blue-600"> Maya!</span>
        </h1>

        <p className="mt-6 text-2xl text-slate-600">
          Future Web Developer 🚀
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Welcome to my very first website! I love learning new things,
          solving problems, and creating cool projects with code.
        </p>

      </section>

      {/* About */}

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-3">

        <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600">
            About Me
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            My favorite subject is science. I enjoy learning how
            websites work and want to become a software engineer one day.
          </p>

        </div>

        <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600">
            My Hobbies
          </h2>

          <ul className="mt-6 space-y-4 text-lg text-slate-700">

            <li>⚽ Soccer</li>
            <li>🎮 Video Games</li>
            <li>🎨 Drawing</li>
            <li>💻 Coding</li>

          </ul>

        </div>

        <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600">
            Favorite Things
          </h2>

          <ul className="mt-6 space-y-4 text-lg text-slate-700">

            <li>🍕 Pizza</li>
            <li>🎵 Music</li>
            <li>🐶 Dogs</li>
            <li>🌎 Traveling</li>

          </ul>

        </div>

      </section>

      {/* Projects */}

      <section className="mx-auto max-w-6xl px-6 pb-24">

        <h2 className="text-center text-5xl font-bold text-slate-900">
          My Projects
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {[
            "My Favorite Animal",
            "Restaurant Website",
            "Sports Fan Page",
          ].map((project) => (
            <div
              key={project}
              className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
                💻
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {project}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Built during Young Creators Coding Camp.
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-blue-100 bg-white">

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">

          <p className="font-medium text-slate-600">
            Made with
            <Heart className="mx-2 inline text-red-500" size={18} />
            by Maya
          </p>

          <div className="flex gap-6 text-blue-600">

            <Mail />

            <Globe />

          </div>

        </div>

      </footer>

    </main>
  );
}