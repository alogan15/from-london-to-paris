import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";

export default function RestaurantExamplePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-50">

      {/* Navigation */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        <Link
          href="/young-creators"
          className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-3 font-semibold text-orange-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <ArrowLeft size={18} />
          Back to Camp
        </Link>

        <div className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow">
          Student Example
        </div>

      </div>

      {/* Hero */}

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

        <div>

          <p className="uppercase tracking-[0.35em] text-orange-500 font-semibold">
            Kendrick's Burger House
          </p>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">
            Fresh Food.
            <br />
            Happy Customers.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Welcome to my very first restaurant website! We serve juicy burgers,
            crispy fries, creamy milkshakes, and fresh ingredients every day.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600">
              View Menu
            </button>

            <button className="rounded-full border-2 border-orange-500 bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50">
              Visit Us
            </button>

          </div>

        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-2xl">

          <Image
            src="/young-creators/images/restaurant/hero.jpg"
            alt="Restaurant"
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />

        </div>

      </section>

    </main>
  );
}