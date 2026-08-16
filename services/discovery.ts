import { supabase } from "./supabase";

export async function submitDiscovery(data: any) {
  const { error } = await supabase
    .from("discovery_requests")
    .insert([data]);

  if (error) throw error;

  return true;
}