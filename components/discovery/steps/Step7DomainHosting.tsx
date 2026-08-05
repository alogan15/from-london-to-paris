type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step7DomainHosting({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="mx-auto max-w-5xl space-y-16">

      {/* Domain */}

      <div>
        <h3 className="mb-6 text-3xl font-bold">
          Do you already own a domain name?
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          {["Yes", "No"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  hasDomain: option,
                }))
              }
              className={`rounded-2xl border p-8 text-left transition ${
                formData.hasDomain === option
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <h4 className="text-xl font-semibold">{option}</h4>
            </button>
          ))}
        </div>

        {formData.hasDomain === "Yes" && (
          <input
            type="text"
            value={formData.domainName}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                domainName: e.target.value,
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
          {["Yes", "No"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  hasHosting: option,
                }))
              }
              className={`rounded-2xl border p-8 text-left transition ${
                formData.hasHosting === option
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <h4 className="text-xl font-semibold">{option}</h4>
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