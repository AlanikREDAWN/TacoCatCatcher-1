import { fetchHighScores } from "/fetch.js";
import { addHighScores } from "/add.js";

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