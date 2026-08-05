type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const assets = [
  "Logo",
  "Photos",
  "Videos",
  "Product Images",
  "Written Content",
  "Brand Colors",
  "Brand Fonts",
  "Social Media Content",
  "Marketing Materials",
  "Other (Custom)",
];

export default function Step6ContentAssets({
  formData,
  setFormData,
}: Props) {
  const toggleAsset = (asset: string) => {
    setFormData((prev: any) => ({
      ...prev,
      contentAssets: prev.contentAssets.includes(asset)
        ? prev.contentAssets.filter((a: string) => a !== asset)
        : [...prev.contentAssets, asset],
    }));
  };

  return (
    <div className="mx-auto max-w-5xl">

      {/* Asset Selection */}

      <div className="grid gap-5 md:grid-cols-2">
        {assets.map((asset) => {
          const selected = formData.contentAssets.includes(asset);

          return (
            <button
              key={asset}
              type="button"
              onClick={() => toggleAsset(asset)}
              className={`rounded-2xl border p-6 text-left transition ${
                selected
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{asset}</span>

                {selected && (
                  <span className="text-xl text-[#D4AF37]">
                    ✓
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Other */}

      {formData.contentAssets.includes("Other (Custom)") && (
        <div className="mt-8">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-300">
            Tell us about your additional assets
          </label>

          <input
            type="text"
            value={formData.otherAsset}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                otherAsset: e.target.value,
              }))
            }
            placeholder="Example: Drone footage, employee headshots, brochures..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      )}

      {/* Need Help */}

      <div className="mt-16">

        <h3 className="mb-8 text-3xl font-bold">
            Need Help Preparing Your Brand?
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <button
            type="button"
            onClick={() =>
              setFormData((prev: any) => ({
                ...prev,
                needContentHelp: "Yes",
              }))
            }
            className={`rounded-2xl border p-8 text-left transition ${
              formData.needContentHelp === "Yes"
                ? "border-[#D4AF37] bg-[#D4AF37]/10"
                : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
            }`}
          >
            <h4 className="text-xl font-semibold">
                Yes, I'd like professional help
            </h4>

            <p className="mt-4 text-gray-400">
             We can assist with branding, website copy, logo design, photography guidance, content organization, and other creative assets needed to launch your website.
            </p>
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData((prev: any) => ({
                ...prev,
                needContentHelp: "No",
              }))
            }
            className={`rounded-2xl border p-8 text-left transition ${
              formData.needContentHelp === "No"
                ? "border-[#D4AF37] bg-[#D4AF37]/10"
                : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
            }`}
          >
            <h4 className="text-xl font-semibold">
              No thanks
            </h4>

            <p className="mt-4 text-gray-400">
              I already have everything needed for my project.
            </p>
          </button>

        </div>

      </div>

    </div>
  );
}