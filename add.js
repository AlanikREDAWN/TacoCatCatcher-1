import { supabase } from "/supabaseClient.js";

async function addHighScores(playerInitals, playerScore) {
	const { data, error } = await supabase
	.from('High_Scores')
	.insert([{ initals: playerInitals, score: playerScore }])
	.select();
}

export { addHighScores };