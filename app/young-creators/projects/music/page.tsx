import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Music2,
  Disc3,
} from "lucide-react";

export default function MusicArtistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-950 via-slate-950 to-black text-white">

      {/* Navigation */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-slate-900 px-5 py-3 font-semibold text-violet-300 transition hover:border-violet-400"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold">
          Student Example
        </div>

      </div>

      {/* Hero */}

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

        <div>

          <p className="uppercase tracking-[0.35em] text-violet-300">
            Featured Artist
          </p>

          <h1 className="mt-6 text-7xl font-black">
            Nova
          </h1>

          <p className="mt-6 text-2xl text-violet-300">
            Pop • R&B • Soul
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Welcome to my music page! Here you can listen to my latest songs,
            explore albums, and learn more about my journey as an artist.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500">
              <Play size={20} fill="white" />
              Play Music
            </button>

            <button className="rounded-full border border-violet-500 px-8 py-4 font-semibold text-violet-300 transition hover:bg-violet-500/20">
              Follow
            </button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>

              <h3 className="text-4xl font-black">
                12
              </h3>

              <p className="text-slate-400">
                Songs
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black">
                3
              </h3>

              <p className="text-slate-400">
                Albums
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black">
                1.2M
              </h3>

              <p className="text-slate-400">
                Monthly Listeners
              </p>

            </div>

          </div>

        </div>

        <div className="relative">

          <Image
            src="/young-creators/images/music/artist.jpg"
            alt="Artist"
            width={600}
            height={700}
            className="rounded-[2rem] shadow-2xl"
          />

        </div>

      </section>

    </main>
  );
}