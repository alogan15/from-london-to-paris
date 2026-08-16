type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step2AboutBusiness({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl">

      <div className="space-y-10">

        {/* Business Description */}

        <div>
          <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Describe your business
          </label>

          <p className="mb-4 text-sm text-gray-500">
            Tell us about your business in 2–3 sentences.
          </p>

          <textarea
            rows={5}
            value={formData.business_description}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                business_description: e.target.value,
              }))
            }
            placeholder="We are a family-owned plumbing company serving residential and commercial customers throughout southeastern Pennsylvania..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Products & Services */}

        <div>
          <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Products & Services
          </label>

          <p className="mb-4 text-sm text-gray-500">
            What products or services does your business offer?
          </p>

          <textarea
            rows={5}
            value={formData.products_services}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                products_services: e.target.value,
              }))
            }
            placeholder="Residential plumbing, emergency repairs, water heater installation, drain cleaning..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        {/* Competitive Advantage */}

        <div>
          <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            What makes your business different?
          </label>

          <p className="mb-4 text-sm text-gray-500">
            Why should customers choose you over your competitors?
          </p>

          <textarea
            rows={5}
            value={formData.competitive_advantage}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                competitive_advantage: e.target.value,
              }))
            }
            placeholder="We've served the community for over 20 years and pride ourselves on honest pricing, fast response times, and exceptional customer service."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

      </div>

    </div>
  );
}