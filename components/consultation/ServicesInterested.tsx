"use client";

import {
  Globe,
  Code2,
  Bot,
  Workflow,
  QrCode,
  GraduationCap,
  CircleHelp,
  CheckCircle,
} from "lucide-react";
import { ConsultationFormData } from "@/types/consultation";

interface ServicesInterestedProps {
  formData: ConsultationFormData;
  updateField: (
    field: keyof ConsultationFormData,
    value: any
  ) => void;
}

const services = [
  {
    id: "website",
    title: "Website Development",
    description: "Custom websites built to grow your business.",
    icon: Globe,
  },
  {
    id: "software",
    title: "Custom Software",
    description: "Dashboards, portals, and internal tools.",
    icon: Code2,
  },
  {
    id: "ai",
    title: "AI Solutions",
    description: "AI assistants, chatbots, and automation.",
    icon: Bot,
  },
  {
    id: "automation",
    title: "Business Automation",
    description: "Save time by automating repetitive work.",
    icon: Workflow,
  },
  {
    id: "qr",
    title: "QR Experiences",
    description: "Interactive digital experiences using QR codes.",
    icon: QrCode,
  },
  {
    id: "education",
    title: "Coding Education",
    description: "Schools, camps, workshops, and training.",
    icon: GraduationCap,
  },
  {
    id: "unsure",
    title: "Help Me Decide",
    description: "We'll recommend the best solution during our consultation.",
    icon: CircleHelp,
  },
];

export default function ServicesInterested({
  formData,
  updateField,
}: ServicesInterestedProps) {

    const toggleService = (id: string) => {
      const current = formData.services_interested;

      if (current.includes(id)) {
        updateField(
          "services_interested",
          current.filter((item) => item !== id)
        );
      } else {
        updateField(
          "services_interested",
          [...current, id]
        );
      }
    };

  return (
    <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          SERVICES
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          What Are You Interested In?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Select one or more services you're interested in learning more
          about. Don't worry if you're unsure—we'll help you determine the
          right solution during our consultation.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => {
          const Icon = service.icon;
          const isSelected =
            formData.services_interested.includes(service.id);
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`relative rounded-3xl border p-8 text-left transition-all duration-300 ${
                isSelected
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_35px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-black hover:border-[#D4AF37]/40 hover:-translate-y-1"
              }`}
            >
              {isSelected && (
                <CheckCircle
                  className="absolute right-5 top-5 text-[#D4AF37]"
                  size={26}
                />
              )}

              <div className="mb-6 inline-flex rounded-2xl bg-[#D4AF37]/10 p-4">
                <Icon className="text-[#D4AF37]" size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

            </button>
          );
        })}

      </div>

    </section>
  );
}