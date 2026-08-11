"use client";

import { useState } from "react";

import { RegistrationFormData, StudentData } from "@/types/registration";
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

const [formData, setFormData] =
  useState<RegistrationFormData>({
    parent_name: "",
    parent_email: "",
    parent_phone: "",

    preferred_contact: "Email",

    students: [
      {
        id: crypto.randomUUID(),

        first_name: "",
        last_name: "",

        age: null,
        grade: "",

        experience_level: "",

        has_laptop: false,
        internet_access: false,
        has_webcam: false,
        has_microphone: false,
        can_install_software: false,

        operating_system: "",
      },
    ],

    tuition_plan: "",

    parent_notes: "",

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

const addStudent = () => {
  setFormData((prev) => ({
    ...prev,
    students: [
      ...prev.students,
      {
        id: crypto.randomUUID(),

        first_name: "",
        last_name: "",

        age: null,
        grade: "",

        experience_level: "",

        has_laptop: false,
        internet_access: false,
        has_webcam: false,
        has_microphone: false,
        can_install_software: false,

        operating_system: "",
      },
    ],
  }));
};
const removeStudent = (id: string) => {
  setFormData((prev) => ({
    ...prev,
    students: prev.students.filter(
      (student) => student.id !== id
    ),
  }));
};

const updateStudent = (
  id: string,
  field: keyof StudentData,
  value: any
) => {
  setFormData((prev) => ({
    ...prev,
    students: prev.students.map((student) =>
      student.id === id
        ? {
            ...student,
            [field]: value,
          }
        : student
    ),
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
  parent_name: "",
  parent_email: "",
  parent_phone: "",
  preferred_contact: "Email",

  students: [
    {
      id: crypto.randomUUID(),

      first_name: "",
      last_name: "",

      age: null,
      grade: "",

      experience_level: "",

      has_laptop: false,
      internet_access: false,
      has_webcam: false,
      has_microphone: false,
      can_install_software: false,

      operating_system: "",
    },
  ],

  tuition_plan: "",

  parent_notes: "",

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
        students={formData.students}
        updateStudent={updateStudent}
        addStudent={addStudent}
        removeStudent={removeStudent}
      />

      <TechnologyCheck
        students={formData.students}
        updateStudent={updateStudent}
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