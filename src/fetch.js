// const supabase = require("./supabaseClient.js");
// import { supabase } from "./supabaseClient.js";

async function fetchHighScores() {
	const { data: High_Scores, error } = await _supabase
	.from('High_Scores')
	.select()
	.order('score', { ascending: false });

	if (error) {
		console.error('Error fetching high scores:', error);
		return;
	}
	// console.log(JSON.stringify(High_Scores, null, 2));
	// const High_Scores_String = JSON.stringify(High_Scores, null, 2);
	return High_Scores;
	// return High_Scores_String;
}

// export { fetchHighScores };
// module.exports = fetchHighScores;