// const supabase = require("./supabaseClient.js");

// import { supabase } from "./supabaseClient";
// supabase = supabase
// import { supabase } from "./supabaseClient.js";
async function addHighScores(playerInitals, playerScore) {
	const { data, error } = await _supabase
	.from('High_Scores')
	.insert([{ initals: playerInitals, score: playerScore }])
	.select();
	if (error) {
					console.error("Error adding high scores:", error);
	} else {
				console.log("High scores added:", data);
		}
	

}

// export { addHighScores };
// module.exports = addHighScores;