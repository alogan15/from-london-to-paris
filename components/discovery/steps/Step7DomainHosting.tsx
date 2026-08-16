type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step7DomainHosting({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-10">
      {/* Domain */}

      <div>
        <h3 className="mb-6 text-3xl font-bold">
          Do you already own a domain name?
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          {[true, false].map((option) => (
            <button
              key={String(option)}
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  owns_domain: option,
                }))
              }
              className={`rounded-2xl border p-8 text-left transition ${
                formData.owns_domain === option
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <h4 className="text-xl font-semibold">
                {option ? "Yes" : "No"}
              </h4>
            </button>
          ))}
        </div>

        {formData.owns_domain && (
          <input
            type="text"
            value={formData.domain_name}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                domain_name: e.target.value,
              }))
            }
            placeholder="example.com"
            className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        )}
      </div>

      {/* Hosting */}

      <div>
        <h3 className="mb-6 text-3xl font-bold">
          Do you currently have website hosting?
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          {[true, false].map((option) => (
            <button
              key={String(option)}
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  owns_hosting: option,
                }))
              }
              className={`rounded-2xl border p-8 text-left transition ${
                formData.owns_hosting === option
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <h4 className="text-xl font-semibold">
                {option ? "Yes" : "No"}
              </h4>
            </button>
          ))}
        </div>
      </div>

      {/* Hosting Help */}

      <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8">
        <h3 className="text-2xl font-bold">
          Need help with your domain or hosting?
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Don't worry if you're unsure. We can register your domain,
          connect it, set up secure hosting, SSL certificates,
          business email, and everything needed to get your website online.
        </p>
      </div>
    </div>
  );
}