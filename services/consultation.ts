import { supabase } from "./supabase";


export async function submitConsultation(data: any) {
  const { error } = await supabase
    .from("consultation_requests")
    .insert([data]);

  if (error) throw error;

  return true;
}