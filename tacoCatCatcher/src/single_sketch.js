import '../css/style.css';
import {sketch} from 'p5js-wrapper';
import * as planck from 'tacoCatCatcher/src/planck.min.js';
import * as p5play from 'tacoCatCatcher/src/p5play.js';
import { fetchHighScores } from "tacoCatCatcher/src/fetch.js";
import { addHighScores } from "tacoCatCatcher/src/add.js";

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
import backgroundImgPath from 'tacoCatCatcher/src/assets/burritoCat.png';
import catcherImgPath from 'tacoCatCatcher/src/assets/plate.png';
import fallingObjectImg1Path from 'tacoCatCatcher/src/assets/tacoCat1.png';
import fallingObjectImg2Path from 'tacoCatCatcher/src/assets/tacoCat2.png';
import badFallingObjectImgPath from 'tacoCatCatcher/src/assets/pugBurger.png';
import heartImgPath from 'tacoCatCatcher/src/assets/health.png';
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
  backgroundImg = loadImage('tacoCatCatcher/src/assets/burritoCat.png');
  catcherImg = loadImage('/dist/assets/plate.png');
  fallingObjectImg1 = loadImage('/dist/assets/tacoCat1.png');
  fallingObjectImg2 = loadImage('/dist/assets/tacoCat2.png');
  badFallingObjectImg = loadImage('/dist/assets/pugBurger.png');
  heartImg = loadImage('/dist/assets/health.png');
}

sketch.setup = function(){
  createCanvas (800, 600);
}

sketch.draw= function(){
  background(100);
  fill(255, 0, 0);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}

sketch.mousePressed = function(){
  console.log('here');
}


