"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

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

export default function Agreements() {
  const [required, setRequired] = useState<string[]>([]);
  const [mediaRelease, setMediaRelease] = useState(false);

  const toggleRequired = (id: string) => {
    setRequired((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

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

          {requiredItems.map((item) => {
            const isChecked = required.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleRequired(item.id)}
                className={`
                  w-full
                  rounded-3xl
                  border-2
                  p-6
                  text-left
                  transition-all
                  duration-300
                  ${
                    isChecked
                      ? "border-blue-600 bg-blue-50 ring-4 ring-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50"
                  }
                `}
              >
                <div className="flex items-start justify-between gap-6">

                  <div>

                    <h4 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                  <CheckCircle
                    size={30}
                    className={`transition ${
                      isChecked
                        ? "text-blue-600"
                        : "text-slate-300"
                    }`}
                  />

                </div>

              </button>
            );
          })}

        </div>

      </div>

      {/* Optional Media Release */}

      <div className="mt-14">

        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Media Release (Optional)
        </h3>

        <button
          type="button"
          onClick={() => setMediaRelease(!mediaRelease)}
          className={`
            w-full
            rounded-3xl
            border-2
            p-6
            text-left
            transition-all
            duration-300
            ${
              mediaRelease
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
                mediaRelease
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