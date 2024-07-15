import { fetchHighScores } from "./fetch.js";
import { addHighScores } from "./add.js";
// import * as planck from "planck";
// import * as p5 from "p5";

// import * as p5play from"p5play";


let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  addHighScores("LSD", 10);
}