export interface RegistrationFormData {
  first_name: string;
  last_name: string;

  parent_name: string;
  parent_email: string;
  parent_phone: string;

  student_age: number | null;
  student_grade: string;

  emergency_contact_name: string;
  emergency_contact_phone: string;

  experience_level: string;

  has_laptop: boolean;
  internet_access: boolean;

  allergies_or_notes: string;

  payment_option: string;

  agree_to_terms: boolean;
  media_release: boolean;
}