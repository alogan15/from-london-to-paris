type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

const goals = [
  "Generate Leads",
  "Book Appointments",
  "Sell Products",
  "Sell Services",
  "Accept Payments",
  "Showcase Portfolio",
  "Display Reviews",
  "Build Brand Awareness",
  "Grow Email List",
  "Membership Area",
  "Mobile App",
  "Customer Dashboard",
  "Other (Custom)",
];

export default function Step3ProjectGoals({
  formData,
  setFormData,
}: Props) {
  const toggleGoal = (goal: string) => {
    setFormData((prev: any) => ({
      ...prev,
      projectGoals: prev.projectGoals.includes(goal)
        ? prev.projectGoals.filter((g: string) => g !== goal)
        : [...prev.projectGoals, goal],
    }));
  };

  return (
    <div className="mx-auto max-w-5xl">

      <div className="grid gap-5 md:grid-cols-2">

        {goals.map((goal) => (
          <button
            key={goal}
            type="button"
            onClick={() => toggleGoal(goal)}
            className={`rounded-2xl border p-6 text-left transition ${
              formData.projectGoals.includes(goal)
                ? "border-[#D4AF37] bg-[#D4AF37]/10"
                : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
            }`}
          >
            <div className="flex items-center justify-between">

              <span className="font-semibold">
                {goal}
              </span>

              {formData.projectGoals.includes(goal) && (
                <span className="text-[#D4AF37] text-xl">
                  ✓
                </span>
              )}
            </div>
          </button>      
        ))}        
        {formData.projectGoals.includes("Other (Custom)") && (
          <div className="mt-8">
            <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-300">
              Tell us about your project goal
            </label>

            <input
              type="text"
              value={formData.otherGoal}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  otherGoal: e.target.value,
                })
              }
              placeholder="Example: Build an internal employee portal, launch an online course, create a client portal..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        )}
      </div>     
    </div>   
  );
}