import { supabase } from "./supabase";
import { ContactFormData } from "@/types/contact";

export async function submitContact(
  data: ContactFormData
) {
  return await supabase
    .from("contact_inquiries")
    .insert([data]);
}