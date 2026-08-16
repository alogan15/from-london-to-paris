type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const styles = [
  "Luxury",
  "Modern",
  "Minimal",
  "Corporate",
  "Streetwear",
  "Creative",
  "Elegant",
  "Fun",
  "Bold",
  "Dark Theme",
  "Light Theme",
  "Other (Custom)",
];

export default function Step5DesignPreferences({
  formData,
  setFormData,
}: Props) {
  const toggleStyle = (style: string) => {
    setFormData((prev: any) => ({
      ...prev,
      design_preferences: prev.design_preferences.includes(style)
        ? prev.design_preferences.filter((s: string) => s !== style)
        : [...prev.design_preferences, style],
    }));
  };

  return (
    <div className="space-y-10">
      {/* Style Selection */}

      <div className="grid gap-5 md:grid-cols-2">
        {styles.map((style) => {
          const selected = formData.design_preferences.includes(style);

          return (
            <button
              key={style}
              type="button"
              onClick={() => toggleStyle(style)}
              className={`rounded-2xl border p-6 text-left transition ${
                selected
                  ? "border-[#D4AF37] bg-[#D4AF37]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{style}</span>

                {selected && (
                  <span className="text-xl text-[#D4AF37]">✓</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Other */}

      {formData.design_preferences.includes("Other (Custom)") && (
        <div>
          <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
            Describe your preferred style
          </label>

          <input
            type="text"
            value={formData.other_design_style}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                other_design_style: e.target.value,
              }))
            }
            placeholder="Describe your design style..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      )}

      {/* Preferred Colors */}

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
          Preferred Brand Colors
        </label>

        <input
          type="text"
          value={formData.preferred_brand_colors}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              preferred_brand_colors: e.target.value,
            }))
          }
          placeholder="Black & Gold, Navy Blue, Forest Green..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
        />
      </div>

      {/* Inspiration */}

      <div>
        <label className="mb-3 block text-sm font-semibold uppercase tracking-wide text-gray-300">
          Websites You Like
        </label>

        <textarea
          rows={5}
          value={formData.websites_you_like}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              websites_you_like: e.target.value,
            }))
          }
          placeholder="Share links to websites you love and tell us what you like about them..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
        />
      </div>
    </div>
  );
}