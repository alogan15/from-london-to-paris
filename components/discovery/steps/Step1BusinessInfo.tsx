type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step1BusinessInfo({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mt-12 grid gap-8">

        {/* Business Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Business Name
          </label>

          <input
            type="text"
            value={formData.business_name}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
              business_name: e.target.value,
              }))
            }
            placeholder="From London to Paris LLC"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Contact Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Owner / Primary Contact
          </label>

          <input
            type="text"
            value={formData.owner_name}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
              owner_name: e.target.value,
              }))
            }
            placeholder="John Smith"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Phone Number
          </label>

          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            placeholder="(555) 555-5555"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

      </div>

    </div>
  );
}