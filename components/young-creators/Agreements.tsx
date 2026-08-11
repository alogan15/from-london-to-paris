"use client";

import { CheckCircle } from "lucide-react";
import { RegistrationFormData } from "@/types/registration";

interface AgreementsProps {
  formData: RegistrationFormData;
  updateField: (
    field: keyof RegistrationFormData,
    value: any
  ) => void;
}

const requiredItems = [
  {
    id: "participation",
    title: "Participation Agreement",
    description:
      "I understand this is a live online coding camp and my child is expected to participate respectfully throughout each session.",
  },
  {
    id: "technology",
    title: "Technology Requirements",
    description:
      "I understand my child must have access to a computer, reliable internet, and the required free software before camp begins.",
  },
  {
    id: "policies",
    title: "Camp Policies",
    description:
      "I have read and agree to the Young Creators Coding Camp policies, expectations, and code of conduct.",
  },
];

export default function Agreements({
  formData,
  updateField,
}: AgreementsProps) {

  return (
    <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-bold text-blue-600">
        Before You Submit
      </h2>

      <p className="mt-3 text-slate-600">
        Please review and acknowledge the following items before completing your registration.
      </p>

      {/* Required Agreements */}

 <div className="mt-12">

  <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
    Required Agreements
  </h3>

  <div className="space-y-6">

    {requiredItems.map((item) => (
      <div
        key={item.id}
        className="rounded-3xl border border-slate-200 bg-white p-6"
      >
        <h4 className="text-xl font-semibold text-slate-900">
          {item.title}
        </h4>

        <p className="mt-3 leading-7 text-slate-600">
          {item.description}
        </p>
      </div>
    ))}

  </div>

</div>
<div className="mt-8">

  <button
    type="button"
    onClick={() =>
      updateField(
        "agree_to_terms",
        !formData.agree_to_terms
      )
    }
    className={`
      w-full
      rounded-3xl
      border-2
      p-6
      text-left
      transition-all
      duration-300
      ${
        formData.agree_to_terms
          ? "border-blue-600 bg-blue-50 ring-4 ring-blue-100"
          : "border-slate-200 bg-white hover:border-blue-400"
      }
    `}
  >
    <div className="flex items-center justify-between">

      <div>

        <h4 className="text-xl font-semibold text-slate-900">
          Agreement Confirmation
        </h4>

        <p className="mt-2 leading-7 text-slate-600">
          I have read and agree to the Participation Agreement,
          Technology Requirements, and Camp Policies listed above.
        </p>

      </div>

      <CheckCircle
        size={30}
        className={
          formData.agree_to_terms
            ? "text-blue-600"
            : "text-slate-300"
        }
      />

    </div>

  </button>

</div>
      {/* Optional Media Release */}

      <div className="mt-14">

        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Media Release (Optional)
        </h3>

        <button
          type="button"
            onClick={() =>
              updateField(
                "media_release",
                !formData.media_release
              )
            }          
            className={`
            w-full
            rounded-3xl
            border-2
            p-6
            text-left
            transition-all
            duration-300
            ${
              formData.media_release
                ? "border-blue-600 bg-blue-50 ring-4 ring-blue-100"
                : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50"
            }
          `}
        >
          <div className="flex items-start justify-between gap-6">

            <div>

              <h4 className="text-xl font-semibold text-slate-900">
                Help Us Celebrate Our Students
              </h4>

              <p className="mt-3 leading-7 text-slate-600">
                I give permission for photos, screenshots, or short video clips
                from camp activities to be used on the Young Creators website,
                social media, or future promotional materials. No personal
                information will ever be shared.
              </p>

            </div>

            <CheckCircle
              size={30}
              className={`transition ${
              formData.media_release
                  ? "text-blue-600"
                  : "text-slate-300"
              }`}
            />

          </div>

        </button>

      </div>

      {/* Notice */}

      <div className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-6">

        <p className="leading-7 text-slate-700">
          <span className="font-semibold text-blue-700">
            Registration Notice:
          </span>{" "}
          By submitting this registration, you confirm that the information
          provided is accurate. Registration requests will be reviewed, and
          enrollment will be confirmed by email once your student's seat has
          been reserved.
        </p>

      </div>

    </section>
  );
}