"use client";

import { useState } from "react";

import Step1BusinessInfo from "./steps/Step1BusinessInfo";
import Step2AboutBusiness from "./steps/Step2AboutBusiness";
import Step3ProjectGoals from "./steps/Step3ProjectGoals";
import Step4WebsiteFeatures from "./steps/Step4WebsiteFeatures";
import StepHeader from "./StepHeader";


export default function DiscoveryForm() {
const [step, setStep] = useState(1);

const [formData, setFormData] = useState({
  businessName: "",
  contactName: "",
  email: "",
  phone: "",

  businessDescription: "",
  productsServices: "",
  differentiator: "",

  projectGoals: [] as string[],

  websiteFeatures: [] as string[],

  otherFeature: "",
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

      {/* Navigation */}

      <div className="mt-16 flex justify-between">

        <button
          onClick={() => setStep(Math.max(step - 1, 1))}
          disabled={step === 1}
          className="rounded-full border border-white/20 px-8 py-4 disabled:opacity-30"
        >
          ← Previous
        </button>

        <button
          onClick={() => setStep(Math.min(step + 1, 8))}
          className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Next →
        </button>

      </div>

    </div>
  );
}