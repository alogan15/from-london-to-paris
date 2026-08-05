type Props = {
  client: string;
  year: string;
  status: string;
};

export default function ProjectStats({
  client,
  year,
  status,
}: Props) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Client
        </p>

        <p className="mt-3 text-xl font-semibold">
          {client}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Year
        </p>

        <p className="mt-3 text-xl font-semibold">
          {year}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Status
        </p>

        <span
          className={`mt-3 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
            status === "Completed"
              ? "bg-green-500/20 text-green-400"
              : status === "Active Development"
              ? "bg-blue-500/20 text-blue-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {status}
        </span>
      </div>

    </div>
  );
}