import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

// The anon key is meant for the browser. Never put the service-role key here.
export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null
