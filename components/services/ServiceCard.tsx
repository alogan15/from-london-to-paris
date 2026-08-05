import Image from "next/image";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function ServiceCard({
  number,
  title,
  description,
  image,
  reverse = false,
}: ServiceCardProps) {
  return (
    <section
      className={`grid items-center gap-16 py-24 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0B]">
        <Image
          src={image}
          alt={title}
          width={1400}
          height={900}
          className="w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          {number}
        </p>

        <h2 className="mb-6 text-5xl font-bold">{title}</h2>

        <p className="mb-10 text-lg leading-8 text-gray-400">
          {description}
        </p>

        <button className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black">
          Learn More
        </button>
      </div>
    </section>
  );
}