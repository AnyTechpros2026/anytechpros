// Supabase configuration
// Replace these values with your actual Supabase project configuration
// You can find these values in your Supabase Dashboard -> Project Settings -> API

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL'; // e.g., https://xxxxx.supabase.co
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin credentials (hardcoded for security - only for admin login)
export const ADMIN_CREDENTIALS = {
  userId: 'Anytechpros2026',
  password: '@#!Anytech2026'
};

export default supabase;
