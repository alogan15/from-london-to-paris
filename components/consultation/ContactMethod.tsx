"use client";

import { ConsultationFormData } from "@/types/consultation";
import {
  Mail,
  Phone,
  Video,
  CheckCircle,
} from "lucide-react";

const methods = [
  {
    id: "email",
    title: "Email",
    description: "Perfect for detailed project discussions.",
    icon: Mail,
  },
  {
    id: "phone",
    title: "Phone Call",
    description: "Let's have a quick conversation about your project.",
    icon: Phone,
  },
  {
    id: "video",
    title: "Virtual Meeting",
    description: "Meet virtually to discuss ideas face-to-face.",
    icon: Video,
  },
];

interface ContactMethodProps {
  formData: ConsultationFormData;
  updateField: (
    field: keyof ConsultationFormData,
    value: any
  ) => void;
}

export default function ContactMethod({
  formData,
  updateField,
}: ContactMethodProps) {

  return (
    <section className="mx-auto mb-20 max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">

      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
          CONTACT PREFERENCE
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          How Would You Like
          <br />
          To Connect?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Choose the communication method that's most convenient for you.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        {methods.map((method) => {
          const Icon = method.icon;
          const isSelected =
            formData.preferred_contact_method === method.id;


          return (
            <button
              key={method.id}
              type="button"
              onClick={() =>
                updateField("preferred_contact_method", method.id)
              }
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
                <Icon
                  size={28}
                  className="text-[#D4AF37]"
                />
              </div>

              <h3 className="text-2xl font-bold">
                {method.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {method.description}
              </p>

            </button>
          );
        })}

      </div>

    </section>
  );
}