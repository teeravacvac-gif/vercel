import { createClient, SupabaseClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabaseClient = createClient(supabaseUrl, supabasePublishableKey);

export default supabaseClient;