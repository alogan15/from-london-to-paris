import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">

      <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-black to-black p-10 md:p-16">

        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.4em] text-[#D4AF37]">
            Ready To Build?
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Have a project in mind?
            <br />
            Let's make it happen.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            If you're ready to build a website, web application, or custom
            software solution, our Discovery Questionnaire helps us understand
            your goals so we can prepare the best recommendation for your
            business.
          </p>

          <div className="mt-12">

            <Link
              href="/discovery"
              className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105"
            >
              Start Your Project

              <ArrowRight size={22} />

            </Link>

          </div>

          <p className="mt-8 text-sm text-gray-500">
            Takes about 10 minutes • No obligation • Personalized recommendations
          </p>

        </div>

      </div>

    </section>
  );
}