export default function BasicInfo() {
  return (
    <section className="mx-auto mb-20 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <h2 className="text-3xl font-bold">
        Tell Us About Yourself
      </h2>

      <p className="mt-3 text-gray-400">
        Let's start with the basics.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            First Name
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="John"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Last Name
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="Smith"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Business Name
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Email Address
          </label>

          <input
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="john@email.com"
          />
        </div>

        <div className="md:col-span-2">

          <label className="mb-2 block text-sm text-gray-400">
            Phone Number
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="(267) 555-1234"
          />

        </div>

      </div>

    </section>
  );
}