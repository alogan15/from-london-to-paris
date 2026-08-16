"use client";

import { useState } from "react";

import Step1BusinessInfo from "./steps/Step1BusinessInfo";
import Step2AboutBusiness from "./steps/Step2AboutBusiness";
import Step3ProjectGoals from "./steps/Step3ProjectGoals";
import Step4WebsiteFeatures from "./steps/Step4WebsiteFeatures";
import Step5DesignPreferences from "./steps/Step5DesignPreferences";
import Step6ContentAssets from "./steps/Step6ContentAssets";
import Step7DomainHosting from "./steps/Step7DomainHosting";
import Step8ReviewSubmit from "./steps/Step8ReviewSubmit";
import StepHeader from "./StepHeader";
import { submitDiscovery } from "@/services/discovery";


export default function DiscoveryForm() {
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  try {
    setLoading(true);

    console.log(formData);

    await submitDiscovery(formData);

    console.log(JSON.stringify(formData, null, 2));

    alert("Discovery form submitted!");
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
const [step, setStep] = useState(1);

const [formData, setFormData] = useState({
  business_name: "",
  owner_name: "",
  email: "",
  phone: "",

  business_description: "",
  products_services: "",
  competitive_advantage: "",

  project_goals: [] as string[],
  other_goal: "",

  website_features: [] as string[],
  other_feature:"",

  design_preferences: [] as string[],
  brand_assets: [] as string[],
  preferred_brand_colors: "",
  websites_you_like: "",

  branding_help: false,

  owns_domain: false,
  owns_hosting: false,

  domain_name: "",
});


  return (
    <div className="mx-auto max-w-5xl">

      {/* Header */}

<StepHeader
  eyebrow={
        step === 1
      ? "FOUNDATION"
      : step === 2
      ? "YOUR BUSINESS"
      : step === 3
      ? "YOUR VISION"
      : step === 4
      ? "BUILD YOUR WEBSITE"
      : step === 5
      ? "YOUR STYLE"
      : step === 6
      ? "CONTENT"
      : step === 7
      ? "DOMAIN & HOSTING"
      : step === 8
      ? "REVIEW"
      : ""
  }
  title={
        step === 1
      ? "Business Information"
      : step === 2
      ? "About Your Business"
      : step === 3
      ? "Project Goals"
      : step === 4
      ? "Website Features"
      : step === 5
      ? "Design Preferences"
      : step === 6
      ? "Content & Brand Assets"
      : step === 7
      ? "Domain & Hosting"
      : step === 8
      ? "Review & Submit"
      : ""
  }
  description={
        step === 1
      ? "Let's start with the basics so we know who we're building for."
      : step === 2
      ? "Help us understand your business, what you offer, and what makes you stand out."
      : step === 3
      ? "What would you like your website or software to accomplish? Select everything that applies."
      : step === 4
      ? "Select the pages and functionality you'd like included. Don't worry—you can always add or remove features later."
      : step === 5
      ? "Help us understand the visual style you're looking for. We'll use this to create a website that reflects your brand."      
      : step === 6
      ? "Tell us what content you already have and what you'd like us to help create."
      : step === 7
      ? "Tell us about your domain and hosting. If you don't have either, we can take care of everything for you."
      : step === 8
      ? "Take one final look before submitting your discovery questionnaire."
      : ""
  }
  step={step}
  totalSteps={8}
/>

      {/* Current Step */}

            {step === 1 && (
            <Step1BusinessInfo
                formData={formData}
                setFormData={setFormData}
            />
            )}      
            {step === 2 && (
            <Step2AboutBusiness
                formData={formData}
                setFormData={setFormData}
            />
            )}
            {step === 3 && (
            <Step3ProjectGoals
                formData={formData}
                setFormData={setFormData}
            />
            )}

            {step === 4 && (
              <Step4WebsiteFeatures
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 5 && (
              <Step5DesignPreferences
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 6 && (
              <Step6ContentAssets
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 7 && (
              <Step7DomainHosting
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {step === 8 && (
            <Step8ReviewSubmit
                formData={formData}
                loading={loading}
                onSubmit={handleSubmit}
            />
            )}

      {/* Navigation */}
        <div className="mt-16 flex justify-between">
          <button
            onClick={() => setStep(Math.max(step - 1, 1))}
            disabled={step === 1}
            className="rounded-full border border-white/20 px-8 py-4 disabled:opacity-30"
          >
            ← Previous
          </button>

          {step < 8 && (
            <button
              onClick={() => setStep(step + 1)}
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Next →
            </button>
          )}
        </div>
    </div>
  );
}