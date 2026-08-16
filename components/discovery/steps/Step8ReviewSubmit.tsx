type Props = {
  formData: any;
  loading: boolean;
  onSubmit: () => void;
};

export default function Step8ReviewSubmit({
  formData,
  loading,
  onSubmit,
}: Props) {
  
  return (
    <div className="mx-auto max-w-5xl space-y-10">

      {/* Thank You */}

      <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8">

        <h2 className="text-3xl font-bold">
          You're almost done.
        </h2>

        <p className="mt-4 leading-8 text-gray-400">
          Review your information below. Once submitted, we'll review your
          project and reach out to schedule your free discovery consultation.
        </p>

      </div>

      {/* Business */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Business Information
        </h3>

        <div className="space-y-3">

          <p><strong>Business:</strong> {formData.business_name || "-"}</p>

          <p><strong>Contact:</strong> {formData.owner_name || "-"}</p>

          <p><strong>Email:</strong> {formData.email || "-"}</p>

          <p><strong>Phone:</strong> {formData.phone || "-"}</p>

        </div>

      </div>

      {/* About */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          About Your Business
        </h3>

        <div className="space-y-5">

          <p>{formData.business_description || "-"}</p>

          <p>
            <strong>Products / Services:</strong><br />
            {formData.products_services || "-"}
          </p>

          <p>
            <strong>What makes you different?</strong><br />
            {formData.competitive_advantage || "-"}
          </p>

        </div>

      </div>

      {/* Goals */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Project Goals
        </h3>

        <p>
          {formData.project_goals?.length
            ? formData.project_goals.join(", ")
            : "-"}
        </p>

        {formData.other_goal && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.other_goal}
          </p>
        )}

      </div>

      {/* Features */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Website Features
        </h3>

        <p>
          {formData.website_features?.length
            ? formData.website_features.join(", ")
            : "-"}
        </p>

        {formData.other_feature && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.other_feature}
          </p>
        )}

      </div>

      {/* Design */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Design Preferences
        </h3>

        <p>
          {formData.design_preferences?.length
            ? formData.design_preferences.join(", ")
            : "-"}
        </p>

        <p className="mt-4">
          <strong>Brand Colors:</strong> {formData.preferred_brand_colors || "-"}
        </p>

        <p className="mt-4">
          <strong>Inspiration:</strong><br />
          {formData.websites_you_like || "-"}
        </p>

      </div>

      {/* Assets */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Content & Assets
        </h3>

        <p>
          {formData.brand_assets?.length
            ? formData.brand_assets.join(", ")
            : "-"
          }
        </p>

        {formData.other_asset && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.other_asset}
          </p>
        )}

        <p className="mt-4">
          <strong>Branding Help:</strong>{" "}
          {formData.branding_help ? "Yes" : "No"}
        </p>

      </div>

      {/* Domain */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Domain & Hosting
        </h3>

          <p>
            <strong>Owns Domain:</strong>{" "}
            {formData.owns_domain ? "Yes" : "No"}
          </p>

        <p className="mt-3">
          <strong>Domain:</strong> {formData.domain_name || "-"}
        </p>

        <p className="mt-3">
          <strong>Hosting:</strong>{" "}
          {formData.owns_hosting ? "Yes" : "No"}
        </p>

      </div>

      {/* Agreement */}

      <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8">

        <h3 className="text-2xl font-bold">
          What happens next?
        </h3>

        <p className="mt-5 leading-8 text-gray-300">
          After submitting your discovery questionnaire, we'll review your
          responses and schedule a free consultation to discuss your project,
          timeline, recommendations, and provide a fixed project quote.
        </p>

      </div>

      {/* Submit */}

      <div className="flex justify-center">

      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className="rounded-full bg-[#D4AF37] px-12 py-5 text-lg font-semibold text-black transition hover:scale-105 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Discovery Form"}
      </button>

      </div>

    </div>
  );
}