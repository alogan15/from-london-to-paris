import { supabase } from "./supabase";
import { DiscoveryFormData } from "@/types/discovery";

export async function submitWebsiteProject(
  data: DiscoveryFormData
) {
  return await supabase
    .from("website_projects")
    .insert([data]);
}