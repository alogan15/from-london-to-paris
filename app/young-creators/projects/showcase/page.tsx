import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Rocket,
  Award,
  Globe,
  GraduationCap,
} from "lucide-react";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100">

      {/* Navigation */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow">
          Final Project
        </div>

      </div>

      {/* Hero */}

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

        <div>

          <p className="uppercase tracking-[0.35em] font-semibold text-blue-600">
            Demo Day
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-slate-900">
            Your Final
            <br />
            Website Project
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            This is where everything comes together. Students combine
            HTML, CSS, JavaScript, layouts, images, and creativity into
            one website they're proud to present.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700">
              Present Project
            </button>

            <button className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
              View Gallery
            </button>

          </div>

        </div>

        <Image
          src="/young-creators/images/showcase/hero.jpg"
          alt="Student presenting project"
          width={700}
          height={700}
          className="rounded-[2rem] shadow-2xl"
        />

      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">

  <div className="grid gap-8 md:grid-cols-4">

    <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

      <Rocket className="text-blue-600" size={34} />

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        HTML
      </h3>

      <p className="mt-3 text-slate-600">
        Structure your website.
      </p>

    </div>

    <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

      <Award className="text-yellow-500" size={34} />

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        CSS
      </h3>

      <p className="mt-3 text-slate-600">
        Make it look amazing.
      </p>

    </div>

    <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

      <Globe className="text-green-600" size={34} />

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        JavaScript
      </h3>

      <p className="mt-3 text-slate-600">
        Add interaction.
      </p>

    </div>

    <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-lg">

      <GraduationCap className="text-purple-600" size={34} />

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        Launch
      </h3>

      <p className="mt-3 text-slate-600">
        Publish your website.
      </p>

    </div>

  </div>

</section>
<section className="mx-auto max-w-5xl px-6 py-24 text-center">

  <h2 className="text-5xl font-black text-slate-900">
    Congratulations!
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
    By the end of camp, you'll have the skills to build websites,
    solve problems with code, and confidently share your work with
    friends and family.
  </p>


</section>

</main>
);
}