
import { createClient } from '@supabase/supabase-js';
const dotenv = require('dotenv');
dotenv.config();
// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://mclocptznsrsjhomxkyo.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };