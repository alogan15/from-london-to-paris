export interface RegistrationFormData {
  first_name: string;
  last_name: string;

  parent_name: string;
  parent_email: string;
  parent_phone: string;

  preferred_contact: string;

  student_age: number | null;
  student_grade: string;

  emergency_contact_name: string;
  emergency_contact_phone: string;

  coding_experience: string;

  has_laptop: boolean;
  internet_access: boolean;
  has_webcam: boolean;
  has_microphone: boolean;
  can_install_software: boolean;
  operating_system: string;

  allergies_or_notes: string;

  tuition_plan: string;

  agree_to_terms: boolean;
  media_release: boolean;
}