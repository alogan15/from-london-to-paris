interface BasicInfoProps {
  formData: {
    first_name: string;
    last_name: string;
    business_name: string;
    email: string;
    phone: string;
  };
  updateField: (field: string, value: string) => void;
}

export default function BasicInfo({
  formData,
  updateField,
}: BasicInfoProps) {
  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0B0B0B] p-10">

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
            value={formData.first_name}
            onChange={(e) => updateField("first_name", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="John"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Last Name
          </label>

          <input
            value={formData.last_name}
            onChange={(e) => updateField("last_name", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="Smith"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Business Name
          </label>

          <input
            value={formData.business_name}
            onChange={(e) => updateField("business_name", e.target.value)}
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
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="john@email.com"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-gray-400">
            Phone Number
          </label>

          <input
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-[#D4AF37]"
            placeholder="(267) 555-1234"
          />
        </div>

      </div>

    </section>
  );
}