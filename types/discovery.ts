export interface DiscoveryFormData {
  // Step 1
  business_name: string;
  owner_name: string;
  email: string;
  phone: string;

  // Step 2
  business_description: string;
  products_services: string;
  unique_value: string;

  // Step 3
  project_goals: string[];

  // Step 4
  website_features: string[];

  // Step 5
  design_preferences: string[];
  preferred_brand_colors: string;
  websites_you_like: string;

  // Step 6
  brand_assets: string[];
  needs_brand_help: boolean;

  // Step 7
  has_domain: boolean | null;
  has_hosting: boolean | null;
  needs_hosting_help: boolean;

  // Step 8
  additional_notes: string;
}