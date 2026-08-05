type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const features = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Gallery",
  "Testimonials",
  "Blog",
  "FAQ",
  "Contact",
  "Booking",
  "Online Store",
  "Resources",
  "Newsletter",
  "Live Chat",
  "Payments",
  "Customer Dashboard",
  "Other (Custom)",
];

export default function Step4WebsiteFeatures({
  formData,
  setFormData,
}: Props) {
  const toggleFeature = (feature: string) => {
    setFormData((prev: any) => ({
      ...prev,
      websiteFeatures: prev.websiteFeatures.includes(feature)
        ? prev.websiteFeatures.filter((f: string) => f !== feature)
        : [...prev.websiteFeatures, feature],
    }));
  };

  return (
    <div className="mx-auto max-w-5xl">

        <div className="grid gap-5 md:grid-cols-2">
        {features.map((feature) => {
            const selected = formData.websiteFeatures.includes(feature);

            return (
            <button
                key={feature}
                type="button"
                onClick={() => {
                if (selected) {
                    setFormData({
                    ...formData,
                    websiteFeatures: formData.websiteFeatures.filter(
                    (item: string) => item !== feature                    ),
                    });
                } else {
                    setFormData({
                    ...formData,
                    websiteFeatures: [...formData.websiteFeatures, feature],
                    });
                }
                }}
                className={`rounded-2xl border p-6 text-left transition ${
                selected
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-white/5 hover:border-[#D4AF37]"
                }`}
            >
                <h3 className="text-xl font-semibold">{feature}</h3>
            </button>
            );
        })}
        </div>
        {formData.websiteFeatures.includes("Other (Custom)") && (
        <div className="mt-8">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-300">
            Tell us about your custom feature
            </label>

            <input
            type="text"
            value={formData.otherFeature}
            onChange={(e) =>
                setFormData({
                ...formData,
                otherFeature: e.target.value,
                })
            }
            placeholder="Example: Customer Portal, AI Chatbot, Live Inventory..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
            />
        </div>
        )}
    </div>
  );
}