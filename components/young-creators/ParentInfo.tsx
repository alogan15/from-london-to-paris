export default function ParentInfo() {
  return (
    <section className="mx-auto mb-12 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <h2 className="text-3xl font-bold">
        Parent Information
      </h2>

      <p className="mt-3 text-gray-400">
        Tell us a little about yourself.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Parent / Guardian Name
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Email Address
          </label>

          <input
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="john@email.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Phone Number
          </label>

          <input
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="(267) 555-1234"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Preferred Contact
          </label>

          <select className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 outline-none transition focus:border-[#D4AF37]">
            <option>Email</option>
            <option>Phone</option>
            <option>Text Message</option>
          </select>
        </div>

      </div>

    </section>
  );
}