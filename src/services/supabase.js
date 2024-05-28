import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aovungdcnrqfagnlxdie.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdnVuZ2RjbnJxZmFnbmx4ZGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyOTk2MTksImV4cCI6MjAzMTg3NTYxOX0.mJ7wnxubK1F64t6KelcQCvIgWpShEGb3lpm87ju67qY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
