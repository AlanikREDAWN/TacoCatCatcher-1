/// <reference types="p5/global" />

//Move the catcher with the left and right arrow keys to catch the falling objects. 

// import('planck.js');
import * as planck from 'planck';
import p5 from 'p5';
import * as p5play from 'p5play';
import { fetchHighScores } from "./fetch.js";
import { addHighScores } from "./add.js";

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
// let checkLevelLoop = 0;
//images
import backgroundImgPath from './assets/burritoCat.png';
import catcherImgPath from './assets/plate.png';
import fallingObjectImg1Path from './assets/tacoCat1.png';
import fallingObjectImg2Path from './assets/tacoCat2.png';
import badFallingObjectImgPath from './assets/pugBurger.png';
import heartImgPath from './assets/health.png';
var backgroundImg;
var catcherImg;
var fallingObjectImg1;
var fallingObjectImg2;
var badFallingObjectImg;
var heartImg;
// let fallingObjects; -> see line 39
//colors
let rebeccaPurple = '#6c5190';
let greenColor = '#519053';
var bgColor = '#4ECDC4';
let textColor = '#008080';
let highScoreColor = '#d3eddc';

new p5((p, play) => {
  p.preload = () => {
    console.log(backgroundImgPath);
    backgroundImg = p.loadImage(backgroundImgPath);
    catcherImg = p.loadImage(catcherImgPath);
    fallingObjectImg1 = p.loadImage(fallingObjectImg1Path);
    fallingObjectImg2 = p.loadImage(fallingObjectImg2Path);
     badFallingObjectImg = p.loadImage(badFallingObjectImgPath);
    heartImg = p.loadImage(heartImgPath);
  };

  p.setup = () => {
    p.createCanvas(400, 400);

    time = p.millis();
    // fallingObjects = [fallingObjectImg1, fallingObjectImg2]; -> TO-DO: figure out how to make image for fallingObject sprite random (50% chance of each image)

    //debug
    // allSprites.debug = true;
    homeScreen(p, play);
    loadTime = p.millis();
  };

  p.draw = () => {
    p.keyPressed = () => {
      addHighScores("LSD", 10);
    }
    //set up screen
      // background(bgColor);
      if (screen == 0) {
        if (directionsButton.mouse.pressed()) {
          screen = 1;
          directionsScreen(p, play);
        } else if (playButton.mouse.pressed()) {
          screen = 2;

          playScreenAssets(p, play);
        }
      }

      if (screen == 1) {
        if (backButton.mouse.pressed()) {
          screen = 0;
          backButton.pos = {x: -900, y: -900};
          homeScreen(p, play);
        }
      }

      if (screen == 2) {

        //set up screen
        p.background(bgColor);

        //Draw background image
        p.image(backgroundImg, 330, 5, 60, 79.711);

        //draw lives
        if (lives >= 2) {
          p.image(heartImg, 140, 5, 50, 39.808);
          if (lives >= 3) {
            p.image(heartImg, 200, 5, 50, 39.808);
            if (lives >= 4) {
              p.image(heartImg, 260, 5, 50, 39.808);
            }
          }
        }

        if (((p.millis() - loadTime - timeUntilPlay) > wait) && (!fallen)) {
          badFallingObject.vel.y = 2;
          fallen = true;
        }

        if (fallingObject.img == fallingObjectImg1) {
          fallingObject.img.scale = 0.0223;
        } else if (fallingObject.img == fallingObjectImg2) {
          fallingObject.img.scale = 0.088;
        }

        //If fallingObject reaches bottom, move back to random position at top
        if (fallingObject.y >= height) {
          fallingObject.y = 0;
          fallingObject.x = random(width);
          fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
          // score -= 1;
          lives -= 1;
        }
        //If badFallingObject reaches bottom, move back to random position at top
        if (badFallingObject.y >= height) {
          badFallingObject.y = 0;
          badFallingObject.x = random(width);
          badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
        }

        //Move catcher
        if (play.kb.pressing("left")) {
          catcher.vel.x = -3;
        } else if (play.kb.pressing("right")) {
          catcher.vel.x = 3;
        } else {
          catcher.vel.x = 0;
        }

        //Stop catcher at edges of screen
        if (catcher.x < 50) {
          catcher.x = 50;
        } else if (catcher.x > 350) {
          catcher.x = 350;
        }

        //If fallingObject collides with catcher, move back to random position at top
        if (fallingObject.collides(catcher)) {
          fallingObject.y = 0;
          fallingObject.x = random(width);
          fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
          fallingObject.direction = 'down';
          score += 1;
        }

        //If badFallingObject collides with catcher, move back to random position at top
        if (badFallingObject.collides(catcher)) {
          badFallingObject.y = 0;
          badFallingObject.x = random(width);
          badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
          badFallingObject.direction = 'down';
          // score -= 1;
          lives -= 1;
        }

        if (fallingObject.collides(badFallingObject)) {
          fallingObject.direction = 'down';
          badFallingObject.direction = 'down';
          print('down');
        }

        //Display score
        p.textAlign('left', 'bottom');
        p.textStyle('bold');
        p.textSize(16);
        p.fill(textColor);
        p.text('Score: ' + score, 10, 25);

        if (score >= highScore && score !== 0) {
          p.fill(highScoreColor);
          highScore = score; 
          if (newHighScore == false) {
            newHighScore = true;
          }
        } else {
          p.fill(textColor);
        }

        if (fallingObject.collides(badFallingObject)) {
          fallingObject.direction = 'down';
          badFallingObject.direction = 'down';
          print('down');
        }

        p.text('High Score: ' + highScore, 10, 45);

        p.fill(textColor);
        p.text('Level ' + level, 10, 65);

        console.log('Level = ' + level);

        fallingObject.direction = 'down';
        badFallingObject.direction = 'down';

        checkLevel();


        //Create lose state
        if (lives < 1) {
          catcher.x = 500;
          fallingObject.y = -500;
          badFallingObject.x = -500;
          p.background(bgColor);
          p.textSize(30);
          p.textAlign('center');
          p.fill(textColor);
          p.text('You lost!', 200, 200);

          p.textSize(15);
          p.textStyle('normal');
          p.fill(highScoreColor);
          p.text('Click anywhere to play again', 200, 220);

          p.textSize(18);
          p.textStyle('bold');
          p.fill(textColor);
          p.text('Your score:\n'+ score, width/2 - 100, height/2 + 90)

          p.text('Your high\n score:\n'+ highScore, width/2 + 100, height/2 + 100)

          if (newHighScore == true) {
            p.fill(highScoreColor);
            p.text('NEW HIGH SCORE', width/2, height/2 + 140);
          }

          restart();
        }

        // youWin();

      }
      // //set up screen
      // background(bgColor);
      // //Draw background image
      // image(backgroundImg, 280, 5);

      // fill(textColor);
      // textSize(12);
      // // Draw directions to screen
      // textAlign('right', 'baseline');
      // text("Move the plate \n with the left and \n right arrow keys \n to catch the taco \n cats and avoid \n the imposters", width-10, 20);


      //debug
      // allSprites.debug = mouse.pressing();

  };
})






function restart() {
  if (mouseIsPressed) {
    score = 0;
    lives = 3;
    level = 1;
    fallingObjectSpeed = 0;
    catcherSpeed = 0;
    newHighScore = false;
    catcher.x = 200;
    catcher.y = 370;
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = 2;
    fallingObject.direction = 'down';
    badFallingObject.y = 0;
    badFallingObject.x = random(width);
    badFallingObject.color = color(0,128,128);
    badFallingObject.vel.y = 2;
    badFallingObject.direction = 'down';
  }
}

function youWin() {
  //Create win state
  if (score > 5) {
    catcher.x = 500;
    fallingObject.y = -500;
    badFallingObject.x = -500;
    background(bgColor);
    textSize(30);
    textAlign('center');
    fill(highScoreColor);
    text('You win!', 200, 200);

    textSize(15);
    textStyle('normal');
    fill(textColor);
    text('Click anywhere to play again', 200, 220);
    restart();
  }
}

function homeScreen(p, play) {
  p.background(bgColor);

  p.fill(textColor);
  p.textSize(40);
  p.textStyle('bold');
  p.textAlign(CENTER);
  p.stroke(highScoreColor);
  p.strokeWeight(2);
  p.text("Taco Cat Catcher", width/2, height/2 - 80);

  p.textStyle('normal');
  p.noStroke();

  //navigationButtons
  directionsButton = new play.Sprite(width/2 - 100, height/2 + 50, 100, 70, 'k');
  directionsButton.color = textColor;
  directionsButton.text = "How to Play";
  directionsButton.textSize = 16;
  directionsButton.textColor = highScoreColor;
  directionsButton.stroke = highScoreColor;
  directionsButton.strokeWeight = 3;

  playButton = new play.Sprite(width/2 + 100, height/2 + 50, 100, 70, 'k');
  playButton.color = textColor;
  playButton.text = "Play";
  playButton.textSize = 16;
  playButton.textColor = highScoreColor;
  playButton.stroke = highScoreColor;
  playButton.strokeWeight = 3;
}

function directionsScreen(p, play) {
  p.background(bgColor);
  playButton.pos = {x: -600, y: -600};
  directionsButton.pos = {x: -800, y: -800};

  backButton = new play.Sprite(width/2, height/2 + 80, 100, 70, 'k');
  backButton.color = textColor;
  backButton.text = "Home";
  backButton.textSize = 16;
  backButton.textColor = highScoreColor;
  backButton.stroke = highScoreColor;
  backButton.strokeWeight = 3;

  p.fill(textColor);
  p.stroke(highScoreColor);
  p.strokeWeight(2);
  p.textSize(40);
  p.textStyle('bold');
  p.textAlign(CENTER);
  p.text("How to Play", width/2, height/2 - 100);

  p.textStyle('normal');
  p.noStroke();

  // Draw directions to screen
  p.rectMode(CENTER);
  p.fill(textColor);
  p.textSize(18);
  p.textAlign(CENTER);
  p.text("Move the plate with the left and right arrow keys to catch the taco cats and avoid the imposters", width/2, height/2 - 20, 300, 100);
}

function playScreenAssets(p, play) {
  timeUntilPlay = p.millis();
  playButton.pos = {x: -600, y: -600};
  directionsButton.pos = {x: -800, y: -800};

  //Create catcher 
  catcher = new play.Sprite(catcherImg, 200, 370, 80, 50, 'k');
  catcher.color = color(95,158,160);
  catcher.img.scale = 0.1563;

  //Create falling objects
  fallingObject = new play.Sprite(fallingObjectImg1, 100, 0, 45, 42);
  // fallingObject.color = color(0,128,128);
  // fallingObject.img.scale = 0.0223;
  fallingObject.vel.y = 2;
  fallingObject.rotationLock = true;

  //TO-DO: figure out if I can delay the creation of this sprite for a few secs
  badFallingObject = new play.Sprite(badFallingObjectImg, 150, -20, 35, 40);
  badFallingObject.color = color(0,128,128);
  badFallingObject.img.scale = 0.09;

  badFallingObject.rotationLock = true;  
}

function checkLevel(p) {
  if (score % 5 == 0 && score !== 0) {
    if (level !== score/5 + 1) {
      level = score/5 + 1;
      fallingObjectSpeed += 0.25;
      console.log('increased speed to ' + fallingObjectSpeed);
    }

    // console.log('increased speed to ' + fallingObjectSpeed);
    // checkLevelLoop += 1
    // console.log(checkLevelLoop);
    // if (checkLevelLoop % 2 !== 0) {
      // console.log('checkLevelLoop is odd');
      // fallingObjectSpeed += 0.05;
    // } else if (checkLevelLoop % 2 === 0) {
      // console.log('checkLevelLoop is even');
      // catcherSpeed += 0.10;
    // }
  }
}


/*
/*
// /* PRELOAD LOADS FILES */
// function preload() {
//   // backgroundImg = loadImage('assets/burritoCat.gif');
//   backgroundImg = loadImage('assets/burritoCat.png');
//   // catcherImg = loadImage("assets/plate.gif");
//   catcherImg = loadImage('assets/plate.png');
//   // fallingObjectImg1 = loadImage("assets/tacoCat1.gif");
//   fallingObjectImg1 = loadImage('assets/tacoCat1.png');
//   // fallingObjectImg2 = loadImage("assets/tacoCat2.gif");
//   fallingObjectImg2 = loadImage('assets/tacoCat2.png');
//   // badFallingObjectImg = loadImage("assets/pugBurger.gif");
//    badFallingObjectImg = loadImage('assets/pugBurger.png');
//   heartImg = loadImage('assets/health.png');
// }

// /* SETUP RUNS ONCE */
// function setup() {


//   createCanvas(400, 400);

//   time = millis();
//   // fallingObjects = [fallingObjectImg1, fallingObjectImg2]; -> TO-DO: figure out how to make image for fallingObject sprite random (50% chance of each image)

//   //debug
//   // allSprites.debug = true;
//   homeScreen();
//   loadTime = millis();
// }

// /* DRAW LOOP REPEATS */
// function draw() {
//   //set up screen
//   // background(bgColor);
//   if (screen == 0) {
//     if (directionsButton.mouse.pressed()) {
//       screen = 1;
//       directionsScreen();
//     } else if (playButton.mouse.pressed()) {
//       screen = 2;

//       playScreenAssets()
//     }
//   }

//   if (screen == 1) {
//     if (backButton.mouse.pressed()) {
//       screen = 0;
//       backButton.pos = {x: -900, y: -900};
//       homeScreen();
//     }
//   }

//   if (screen == 2) {

//     //set up screen
//     background(bgColor);

//     //Draw background image
//     image(backgroundImg, 330, 5, 60, 79.711);

//     //draw lives
//     if (lives >= 2) {
//       image(heartImg, 140, 5, 50, 39.808);
//       if (lives >= 3) {
//         image(heartImg, 200, 5, 50, 39.808);
//         if (lives >= 4) {
//           image(heartImg, 260, 5, 50, 39.808);
//         }
//       }
//     }

//     if (((millis() - loadTime - timeUntilPlay) > wait) && (!fallen)) {
//       badFallingObject.vel.y = 2;
//       fallen = true;
//     }

//     if (fallingObject.img == fallingObjectImg1) {
//       fallingObject.img.scale = 0.0223;
//     } else if (fallingObject.img == fallingObjectImg2) {
//       fallingObject.img.scale = 0.088;
//     }

//     //If fallingObject reaches bottom, move back to random position at top
//     if (fallingObject.y >= height) {
//       fallingObject.y = 0;
//       fallingObject.x = random(width);
//       fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//       // score -= 1;
//       lives -= 1;
//     }
//     //If badFallingObject reaches bottom, move back to random position at top
//     if (badFallingObject.y >= height) {
//       badFallingObject.y = 0;
//       badFallingObject.x = random(width);
//       badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//     }

//     //Move catcher
//     if (kb.pressing("left")) {
//       catcher.vel.x = -3;
//     } else if (kb.pressing("right")) {
//       catcher.vel.x = 3;
//     } else {
//       catcher.vel.x = 0;
//     }

//     //Stop catcher at edges of screen
//     if (catcher.x < 50) {
//       catcher.x = 50;
//     } else if (catcher.x > 350) {
//       catcher.x = 350;
//     }

//     //If fallingObject collides with catcher, move back to random position at top
//     if (fallingObject.collides(catcher)) {
//       fallingObject.y = 0;
//       fallingObject.x = random(width);
//       fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//       fallingObject.direction = 'down';
//       score += 1;
//     }

//     //If badFallingObject collides with catcher, move back to random position at top
//     if (badFallingObject.collides(catcher)) {
//       badFallingObject.y = 0;
//       badFallingObject.x = random(width);
//       badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//       badFallingObject.direction = 'down';
//       // score -= 1;
//       lives -= 1;
//     }

//     if (fallingObject.collides(badFallingObject)) {
//       fallingObject.direction = 'down';
//       badFallingObject.direction = 'down';
//       print('down');
//     }

//     //Display score
//     textAlign('left', 'bottom');
//     textStyle('bold');
//     textSize(16);
//     fill(textColor);
//     text('Score: ' + score, 10, 25);

//     if (score >= highScore && score !== 0) {
//       fill(highScoreColor);
//       highScore = score; 
//       if (newHighScore == false) {
//         newHighScore = true;
//       }
//     } else {
//       fill(textColor);
//     }

//     if (fallingObject.collides(badFallingObject)) {
//       fallingObject.direction = 'down';
//       badFallingObject.direction = 'down';
//       print('down');
//     }

//     text('High Score: ' + highScore, 10, 45);

//     fill(textColor);
//     text('Level ' + level, 10, 65);

//     console.log('Level = ' + level);

//     fallingObject.direction = 'down';
//     badFallingObject.direction = 'down';

//     checkLevel();


//     //Create lose state
//     if (lives < 1) {
//       catcher.x = 500;
//       fallingObject.y = -500;
//       badFallingObject.x = -500;
//       background(bgColor);
//       textSize(30);
//       textAlign('center');
//       fill(textColor);
//       text('You lost!', 200, 200);

//       textSize(15);
//       textStyle('normal');
//       fill(highScoreColor);
//       text('Click anywhere to play again', 200, 220);

//       textSize(18);
//       textStyle('bold');
//       fill(textColor);
//       text('Your score:\n'+ score, width/2 - 100, height/2 + 90)

//       text('Your high\n score:\n'+ highScore, width/2 + 100, height/2 + 100)

//       if (newHighScore == true) {
//         fill(highScoreColor);
//         text('NEW HIGH SCORE', width/2, height/2 + 140);
//       }

//       restart();
//     }

//     // youWin();

//   }
//   // //set up screen
//   // background(bgColor);
//   // //Draw background image
//   // image(backgroundImg, 280, 5);

//   // fill(textColor);
//   // textSize(12);
//   // // Draw directions to screen
//   // textAlign('right', 'baseline');
//   // text("Move the plate \n with the left and \n right arrow keys \n to catch the taco \n cats and avoid \n the imposters", width-10, 20);


//   //debug
//   // allSprites.debug = mouse.pressing();
// }
