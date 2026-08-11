import { RegistrationFormData } from "@/types/registration";

interface ParentInfoProps {
  formData: RegistrationFormData;
  updateField: (
    field: keyof RegistrationFormData,
    value: any
  ) => void;
}

export default function ParentInfo({
  formData,
  updateField,
}: ParentInfoProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-slate-900">
        Parent Information
      </h2>

      <p className="mt-3 text-slate-600">
        Tell us a little about yourself so we know who to contact throughout the
        program.
      </p>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Parent / Guardian Name
          </label>

          <input
            type="text"
            value={formData.parent_name}
            onChange={(e) =>
              updateField("parent_name", e.target.value)
            }
            placeholder="John Smith"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            value={formData.parent_email}
            onChange={(e) =>
              updateField("parent_email", e.target.value)
            }
            placeholder="john@email.com"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <input
            type="tel"
            value={formData.parent_phone}
            onChange={(e) =>
              updateField("parent_phone", e.target.value)
            }
            placeholder="(267) 555-1234"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Preferred Contact
          </label>

          <select
            value={formData.preferred_contact}
            onChange={(e) =>
              updateField("preferred_contact", e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 transition focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Select One</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Text Message">Text Message</option>
          </select>
        </div>
    </section>
  );
}