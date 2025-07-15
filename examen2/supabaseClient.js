import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zqzmlohuehgaowaqkvry.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxem1sb2h1ZWhnYW93YXFrdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MTA5NDYsImV4cCI6MjA2ODA4Njk0Nn0.BDFK7Ss21mMvEqZhPUEcF2NS_bM2XbHwYKT0d9zgfL4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);