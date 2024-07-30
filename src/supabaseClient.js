
import { createClient } from '@supabase/supabase-js';
// const dotenv = require('dotenv');
// dotenv.config();
// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://mclocptznsrsjhomxkyo.supabase.co';
const supabaseKey = import.meta.env.SUPABASE_KEY;
console.log(eval(supabaseKey));
const supabase = createClient(supabaseUrl, eval(supabaseKey));


export { supabase };