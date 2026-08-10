import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Trophy,
  Users,
  CalendarDays,
  MapPin,
} from "lucide-react";

const players = [
  {
    name: "Jalen Hurts",
    position: "Quarterback",
    image: "/young-creators/images/sports/jalen.webp",
  },
  {
    name: "Devonta Smith",
    position: "Wide Receiver",
    image: "/young-creators/images/sports/devonta.jpeg",
  },
  {
    name: "Saquon Barkley",
    position: "Running Back",
    image: "/young-creators/images/sports/saquan.jpeg",
  },
];

export default function SportsExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50">

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
          Student Example
        </div>

      </div>

      {/* Hero */}

      <section className="relative overflow-hidden">

        <Image
          src="/young-creators/images/sports/eagles.webp"
          alt="Football Stadium"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-6 text-center text-white">

   

          <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
            GO BIRDS!
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">
            Welcome to my Philadelphia Eagles fan page!
            Here you'll find my favorite players,
            upcoming games, and photos from the season.
          </p>



        </div>

      </section>



            {/* Featured Players */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="text-center">

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            MY FAVORITES
            </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every fan has their favorite players. Here are mine!
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {players.map((player) => (

            <div
              key={player.name}
              className="overflow-hidden rounded-3xl border-2 border-blue-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <Image
                src={player.image}
                alt={player.name}
                width={500}
                height={500}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {player.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  {player.position}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Upcoming Game */}

      <section className="bg-[#004C54] py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-12 text-center shadow-xl">

          <p className="uppercase tracking-[0.35em] text-black">
            NEXT GAME
          </p>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Eagles vs Cowboys
          </h2>

          <div className="mt-12 flex flex-col justify-center gap-10 md:flex-row">

            <div className="flex items-center gap-3 text-lg font-medium text-slate-700">

              <CalendarDays className="text-blue-600" />

              September 14

            </div>

            <div className="flex items-center gap-3 text-lg font-medium text-slate-700">

              <MapPin className="text-blue-600" />

              Lincoln Financial Field

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-200 bg-white py-12">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

          <p className="text-slate-600">
            Created by Ethan • Young Creators Coding Camp
          </p>

          <Link
            href="/young-creators"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Camp
          </Link>

        </div>

      </footer>

    </main>
  );
}