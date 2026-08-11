export interface StudentData {
  id: string;

  first_name: string;
  last_name: string;

  age: number | null;
  grade: string;

  experience_level: string;

  has_laptop: boolean;
  internet_access: boolean;
  has_webcam: boolean;
  has_microphone: boolean;
  can_install_software: boolean;
  operating_system: string;
}

export interface RegistrationFormData {
  parent_name: string;
  parent_email: string;
  parent_phone: string;
  preferred_contact: string;

  parent_notes: string;

  tuition_plan: string;

  agree_to_terms: boolean;
  media_release: boolean;

  students: StudentData[];
}