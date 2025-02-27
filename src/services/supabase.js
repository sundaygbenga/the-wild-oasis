import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gaohocgfdlsvwxymvdsv.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhb2hvY2dmZGxzdnd4eW12ZHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1ODA1MzcsImV4cCI6MjAzNjE1NjUzN30.jRkuY9f2jg2jXWZUDlTu7sFVmTAeB_wW9EhkNNJN41s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
