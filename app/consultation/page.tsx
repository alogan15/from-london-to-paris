"use client";

import { useState } from "react";

import ConsultationHero from "@/components/consultation/ConsultationHero";
import BasicInfo from "@/components/consultation/BasicInfo";
import ProjectDetails from "@/components/consultation/ProjectDetails";
import ServicesInterested from "@/components/consultation/ServicesInterested";
import BudgetTimeline from "@/components/consultation/BudgetTimeline";
import ContactMethod from "@/components/consultation/ContactMethod";
import SubmitConsultation from "@/components/consultation/SubmitConsultation";
import FAQ from "@/components/consultation/FAQ";

export default function ConsultationPage() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
  console.log(formData);

  // We'll connect Supabase next
};
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    email: "",
    phone: "",

    project_description: "",
    project_goals: "",
    current_website: "",
    inspiration_sites: "",

    services_interested: [] as string[],

    estimated_budget: "",
    desired_timeline: "",

    preferred_contact_method: "",
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main className="space-y-12 pb-24>
      <ConsultationHero />

      <BasicInfo
        formData={formData}
        updateField={updateField}
      />

      <ProjectDetails
        formData={formData}
        updateField={updateField}
      />

      <ServicesInterested
        formData={formData}
        updateField={updateField}
      />

      <BudgetTimeline
        formData={formData}
        updateField={updateField}
      />

      <ContactMethod
        formData={formData}
        updateField={updateField}
      />

      <SubmitConsultation
      formData={formData}
      loading={loading}
      onSubmit={handleSubmit}
      />

      <FAQ />
    </main>
  );
}