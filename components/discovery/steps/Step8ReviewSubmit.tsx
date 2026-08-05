type Props = {
  formData: any;
};

export default function Step8ReviewSubmit({ formData }: Props) {
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

          <p><strong>Business:</strong> {formData.businessName || "-"}</p>

          <p><strong>Contact:</strong> {formData.contactName || "-"}</p>

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

          <p>{formData.businessDescription || "-"}</p>

          <p>
            <strong>Products / Services:</strong><br />
            {formData.productsServices || "-"}
          </p>

          <p>
            <strong>What makes you different?</strong><br />
            {formData.differentiator || "-"}
          </p>

        </div>

      </div>

      {/* Goals */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Project Goals
        </h3>

        <p>
          {formData.projectGoals.length
            ? formData.projectGoals.join(", ")
            : "-"}
        </p>

        {formData.otherGoal && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.otherGoal}
          </p>
        )}

      </div>

      {/* Features */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Website Features
        </h3>

        <p>
          {formData.websiteFeatures.length
            ? formData.websiteFeatures.join(", ")
            : "-"}
        </p>

        {formData.otherFeature && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.otherFeature}
          </p>
        )}

      </div>

      {/* Design */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Design Preferences
        </h3>

        <p>
          {formData.designStyles.length
            ? formData.designStyles.join(", ")
            : "-"}
        </p>

        <p className="mt-4">
          <strong>Brand Colors:</strong> {formData.brandColors || "-"}
        </p>

        <p className="mt-4">
          <strong>Inspiration:</strong><br />
          {formData.inspirationSites || "-"}
        </p>

      </div>

      {/* Assets */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Content & Assets
        </h3>

        <p>
          {formData.contentAssets.length
            ? formData.contentAssets.join(", ")
            : "-"}
        </p>

        {formData.otherAsset && (
          <p className="mt-4">
            <strong>Other:</strong> {formData.otherAsset}
          </p>
        )}

        <p className="mt-4">
          <strong>Need Content Help:</strong>{" "}
          {formData.needContentHelp || "-"}
        </p>

      </div>

      {/* Domain */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h3 className="mb-6 text-2xl font-bold">
          Domain & Hosting
        </h3>

        <p>
          <strong>Owns Domain:</strong> {formData.hasDomain || "-"}
        </p>

        <p className="mt-3">
          <strong>Domain:</strong> {formData.domainName || "-"}
        </p>

        <p className="mt-3">
          <strong>Hosting:</strong> {formData.hasHosting || "-"}
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
          className="rounded-full bg-[#D4AF37] px-12 py-5 text-lg font-semibold text-black transition hover:scale-105"
        >
          Submit Discovery Form
        </button>

      </div>

    </div>
  );
}