export default function ParentInfo() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600">
        Parent Information
      </h2>

      <p className="mt-3 text-slate-600">
        Tell us a little about yourself so we know who to contact throughout the program.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Parent / Guardian Name
          </label>

          <input
            type="text"
            placeholder="John Smith"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@email.com"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="(267) 555-1234"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Preferred Contact
          </label>

          <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100">
            <option>Email</option>
            <option>Phone</option>
            <option>Text Message</option>
          </select>
        </div>
      </div>
    </section>
  );
}