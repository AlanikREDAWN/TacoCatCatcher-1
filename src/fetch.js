import { supabase } from "./supabaseClient.js";

async function fetchHighScores() {
	const { data: High_Scores, error } = await supabase
	.from('High_Scores')
	.select('*')
	.order('score', { ascending: false });
}

export { fetchHighScores };