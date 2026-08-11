import { supabase } from "./supabase";
import { RegistrationFormData } from "@/types/registration";

export async function submitRegistration(
  data: RegistrationFormData
) {
  return await supabase
    .from("registrations")
    .insert([data]);
}