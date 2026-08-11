"use client";

import { useState } from "react";

import { RegistrationFormData } from "@/types/registration";
import { submitRegistration } from "@/services/registration";

import RegistrationHero from "./RegistrationHero";
import ParentInfo from "./ParentInfo";
import StudentInfo from "./StudentInfo";
import TechnologyCheck from "./TechnologyCheck";
import TuitionSelection from "./TuitionSelection";
import ParentNotes from "./ParentNotes";
import Agreements from "./Agreements";
import SubmitRegistration from "./SubmitRegistration";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<RegistrationFormData>({
    first_name: "",
    last_name: "",

    parent_name: "",
    parent_email: "",
    parent_phone: "",

    student_age: null,
    student_grade: "",

    emergency_contact_name: "",
    emergency_contact_phone: "",

    coding_experience: "",

    has_laptop: false,
    internet_access: false,
    has_webcam: false,
    has_microphone: false,
    can_install_software: false,
    operating_system: "",

    allergies_or_notes: "",

    tuition_plan: "",

    agree_to_terms: false,
    media_release: false,
  });

  const updateField = (
    field: keyof RegistrationFormData,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const { error } = await submitRegistration(formData);

    setLoading(false);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("Registration submitted successfully!");

    setFormData({
      first_name: "",
      last_name: "",

      parent_name: "",
      parent_email: "",
      parent_phone: "",

      student_age: null,
      student_grade: "",

      emergency_contact_name: "",
      emergency_contact_phone: "",

      coding_experience: "",

    has_laptop: false,
    internet_access: false,
    has_webcam: false,
    has_microphone: false,
    can_install_software: false,
    operating_system: "",

      allergies_or_notes: "",

      tuition_plan: "",

      agree_to_terms: false,
      media_release: false,
    });
  };

  return (
    <main className="space-y-24">

      <RegistrationHero />

      <ParentInfo
        formData={formData}
        updateField={updateField}
      />

      <StudentInfo
        formData={formData}
        updateField={updateField}
      />

      <TechnologyCheck
        formData={formData}
        updateField={updateField}
      />

      <TuitionSelection
        formData={formData}
        updateField={updateField}
      />

      <ParentNotes
        formData={formData}
        updateField={updateField}
      />

      <Agreements
        formData={formData}
        updateField={updateField}
      />

      <SubmitRegistration
        formData={formData}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </main>
  );
}