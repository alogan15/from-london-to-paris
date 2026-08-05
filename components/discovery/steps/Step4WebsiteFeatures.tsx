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

        {features.map((feature) => (
          <button
            key={feature}
            type="button"
            onClick={() => toggleFeature(feature)}
            className={`rounded-2xl border p-6 text-left transition ${
              formData.websiteFeatures.includes(feature)
                ? "border-[#D4AF37] bg-[#D4AF37]/10"
                : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
            }`}
          >
            <div className="flex items-center justify-between">

              <span className="font-semibold">
                {feature}
              </span>

              {formData.websiteFeatures.includes(feature) && (
                <span className="text-xl text-[#D4AF37]">
                  ✓
                </span>
              )}

            </div>
          </button>
        ))}

      </div>
    </div>
  );
}