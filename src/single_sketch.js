import '../css/style.css';
import { sketch } from 'p5js-wrapper';
await import('planck');
import * as p5play from 'p5play';
import { fetchHighScores } from "/src/fetch.js";
import { addHighScores } from "/src/add.js";

/* VARIABLES */
//sprites
let catcher, fallingObject, badFallingObject;
let playButton, directionsButton, backButton;
//ints
let score = 0;
let highScore = 0;
let screen = 0;
var time;
let newHighScore = false;
let lives = 3;
let level = 1;
let fallingObjectSpeed = 0;
let catcherSpeed = 0;
let wait = 250;
let timeUntilPlay, loadTime;
let fallen = false;
//images
import backgroundImgPath from '/src/assets/burritoCat.png';
import catcherImgPath from '/src/assets/plate.png';
import fallingObjectImg1Path from '/src/assets/tacoCat1.png';
import fallingObjectImg2Path from '/src/assets/tacoCat2.png';
import badFallingObjectImgPath from '/src/assets/pugBurger.png';
import heartImgPath from '/src/assets/health.png';
var backgroundImg;
var catcherImg;
var fallingObjectImg1;
var fallingObjectImg2;
var badFallingObjectImg;
var heartImg;
//colors
let rebeccaPurple = '#6c5190';
let greenColor = '#519053';
var bgColor = '#4ECDC4';
let textColor = '#008080';
let highScoreColor = '#d3eddc';

sketch.preload = function(){
  backgroundImg = loadImage('/src/assets/burritoCat.png');
  catcherImg = loadImage('/src/assets/plate.png');
  fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
  fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
  badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
  heartImg = loadImage('/src/assets/health.png');

  backgroundImg = loadImage('/src/assets/burritoCat.png');
  catcherImg = loadImage('/src/assets/plate.png');
  fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
  fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
  badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
  heartImg = loadImage('/src/assets/health.png');
}

sketch.setup = function(){
  sketch.createCanvas(400, 400);

  time = millis();
    // fallingObjects = [fallingObjectImg1, fallingObjectImg2]; -> TO-DO: figure out how to make image for fallingObject sprite random (50% chance of each image)

    //debug
    // allSprites.debug = true;
    homeScreen();
    loadTime = millis();
}

sketch.draw= function(){
  background(textColor);
  fill(255, 0, 0);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}

sketch.mousePressed = function(){
  console.log('here');
  addHighScores("LSD", 10);
}


