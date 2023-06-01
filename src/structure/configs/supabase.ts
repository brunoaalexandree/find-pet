import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iqlbhqghvmkautoygaas.supabase.co';
const serviceKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbGJocWdodm1rYXV0b3lnYWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzOTY1MDYsImV4cCI6MjAwMDk3MjUwNn0.XbT7rsWFm8agq49cAjmsdyIxtbx156McR8OZNRkBuWI';

export const supabase = createClient(supabaseUrl, serviceKey);
