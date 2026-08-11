export interface ConsultationFormData {
  first_name: string;
  last_name: string;
  business_name: string;
  email: string;
  phone: string;

  project_description: string;
  project_goals: string;
  current_website: string;
  inspiration_sites: string;

  services_interested: string[];

  estimated_budget: string;
  desired_timeline: string;

  preferred_contact_method: string;
}