
// import { createClient } from '@supabase/supabase-js';
// const { createClient } = supabase;
// const createClient = require("https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm")
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const { createClient } = _supabase
// const _supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

// console.log('Supabase Instance: ', _supabase)
// import * as dotenv from 'dotenv'
// dotenv.config();
// Create a single supabase client for interacting with your database
// const env = await import.meta.env;
const supabaseUrl = 'https://mclocptznsrsjhomxkyo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbG9jcHR6bnNyc2pob214a3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyOTg2NDQsImV4cCI6MjAzNTg3NDY0NH0.TwuqIwoGOaAx31XpxA2CVvxu5QWLeRyeyhXHxpt4-yA';
console.log(supabaseKey);
console.log("test");
// const supabase = createClient(supabaseUrl, supabaseKey);
const _supabase = createClient(supabaseUrl, supabaseKey);
// const _supabase = createClient(supabaseUrl, supabaseKey);
// console.log('Supabase Instance: ', _supabase);
console.log('Supabase Instance: ', _supabase);


// export { supabase };
// module.exports = supabase;