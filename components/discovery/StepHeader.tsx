type StepHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  step: number;
  totalSteps: number;
};

export default function StepHeader({
  eyebrow,
  title,
  description,
  step,
  totalSteps,
}: StepHeaderProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mb-16">

      <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
        {eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
        <span>
          Step {step} of {totalSteps}
        </span>

        <span>
          {Math.round(progress)}% Complete
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#D4AF37] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

    </div>
  );
}