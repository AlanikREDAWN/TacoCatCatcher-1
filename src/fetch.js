import { supabase } from "./supabaseClient.js";

async function fetchHighScores() {
	const { data: High_Scores, error } = await supabase
	.from('High_Scores')
	.select('*')
	.order('score', { ascending: false });

	if (error) {
		console.error('Error fetching high scores:', error);
		return;
	}
	console.log('High Scores:', High_Scores);
	return High_Scores;
}

export { fetchHighScores };