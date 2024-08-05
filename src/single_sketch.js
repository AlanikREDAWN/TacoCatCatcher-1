// import '../css/style.css';
// import { sketch } from 'p5js-wrapper';
// await import("planck");
// import { "planck.min.js", "p5play.js" } as p5play from 'p5play';
// import * as playing from "p5play";
// import { fetchHighScores } from "/src/fetch.js";
// import { addHighScores } from "/src/add.js";

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
// import backgroundImgPath from '/src/assets/burritoCat.png';
// import catcherImgPath from '/src/assets/plate.png';
// import fallingObjectImg1Path from '/src/assets/tacoCat1.png';
// import fallingObjectImg2Path from '/src/assets/tacoCat2.png';
// import badFallingObjectImgPath from '/src/assets/pugBurger.png';
// import heartImgPath from '/src/assets/health.png';
// import p5 from 'p5';
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

// function preload() {
//   backgroundImg = loadImage('/src/assets/burritoCat.png');
//   catcherImg = loadImage('/src/assets/plate.png');
//   fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
//   fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
//   badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
//   heartImg = loadImage('/src/assets/health.png');

//   backgroundImg = loadImage('/src/assets/burritoCat.png');
//   catcherImg = loadImage('/src/assets/plate.png');
//   fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
//   fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
//   badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
//   heartImg = loadImage('/src/assets/health.png');
// }

// sketch.preload = function(){
//   backgroundImg = loadImage('/src/assets/burritoCat.png');
//   catcherImg = loadImage('/src/assets/plate.png');
//   fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
//   fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
//   badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
//   heartImg = loadImage('/src/assets/health.png');

//   backgroundImg = loadImage('/src/assets/burritoCat.png');
//   catcherImg = loadImage('/src/assets/plate.png');
//   fallingObjectImg1 = loadImage('/src/assets/tacoCat1.png');
//   fallingObjectImg2 = loadImage('/src/assets/tacoCat2.png');
//   badFallingObjectImg = loadImage('/src/assets/pugBurger.png');
//   heartImg = loadImage('/src/assets/health.png');
// }

function setup() {
  createCanvas(400, 400);
  // background.color = '#6c5190';
  // time = millis();

  // homeScreen();

  // loadTime = millis();
};

// sketch.setup = function () {
//   createCanvas(400, 400);

//   time = millis();

//   homeScreen();

//   loadTime = millis();
// };

function draw(){
  background(127); // grey
  fill(255, 0, 0); // red
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 50, 50);
  // if (screen == 0) {
  //   if (directionsButton.mouse.pressed()) {
  //     screen = 1;
  //     directionsScreen();
  //   } else if (playButton.mouse.pressed()) {
  //     screen = 2;

  //     playScreenAssets();
  //   }
  // }

  // if (screen == 1) {
  //   if (backButton.mouse.pressed()) {
  //     screen = 0;
  //     backButton.pos = {x: -900, y: -900};
  //     homeScreen();
  //   }
  // }

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
  //       //If badFallingObject reaches bottom, move back to random position at top
  //       if (badFallingObject.y >= height) {
  //         badFallingObject.y = 0;
  //         badFallingObject.x = random(width);
  //         badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
  //       }

  //       //Move catcher
  //       if (play.kb.pressing("left")) {
  //         catcher.vel.x = -3;
  //       } else if (play.kb.pressing("right")) {
  //         catcher.vel.x = 3;
  //       } else {
  //         catcher.vel.x = 0;
  //       }

  //       //Stop catcher at edges of screen
  //       if (catcher.x < 50) {
  //         catcher.x = 50;
  //       } else if (catcher.x > 350) {
  //         catcher.x = 350;
  //       }

  //       //If fallingObject collides with catcher, move back to random position at top
  //       if (fallingObject.collides(catcher)) {
  //         fallingObject.y = 0;
  //         fallingObject.x = random(width);
  //         fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
  //         fallingObject.direction = 'down';
  //         score += 1;
  //       }

  //       //If badFallingObject collides with catcher, move back to random position at top
  //       if (badFallingObject.collides(catcher)) {
  //         badFallingObject.y = 0;
  //         badFallingObject.x = random(width);
  //         badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
  //         badFallingObject.direction = 'down';
  //         // score -= 1;
  //         lives -= 1;
  //       }

  //       if (fallingObject.collides(badFallingObject)) {
  //         fallingObject.direction = 'down';
  //         badFallingObject.direction = 'down';
  //         print('down');
  //       }

  //       //Display score
  //       textAlign('left', 'bottom');
  //       textStyle('bold');
  //       textSize(16);
  //       fill(textColor);
  //       text('Score: ' + score, 10, 25);

  //       if (score >= highScore && score !== 0) {
  //         fill(highScoreColor);
  //         highScore = score; 
  //         if (newHighScore == false) {
  //           newHighScore = true;
  //         }
  //       } else {
  //         fill(textColor);
  //       }

  //       if (fallingObject.collides(badFallingObject)) {
  //         fallingObject.direction = 'down';
  //         badFallingObject.direction = 'down';
  //         print('down');
  //       }

  //       text('High Score: ' + highScore, 10, 45);

  //       fill(textColor);
  //       text('Level ' + level, 10, 65);

  //       console.log('Level = ' + level);

  //       fallingObject.direction = 'down';
  //       badFallingObject.direction = 'down';

  //       checkLevel();


  //       //Create lose state
  //       if (lives < 1) {
  //         catcher.x = 500;
  //         fallingObject.y = -500;
  //         badFallingObject.x = -500;
  //         background(bgColor);
  //         textSize(30);
  //         textAlign('center');
  //         fill(textColor);
  //         text('You lost!', 200, 200);

  //         textSize(15);
  //         textStyle('normal');
  //         fill(highScoreColor);
  //         text('Click anywhere to play again', 200, 220);

  //         textSize(18);
  //         textStyle('bold');
  //         fill(textColor);
  //         text('Your score:\n'+ score, width/2 - 100, height/2 + 90)

  //         text('Your high\n score:\n'+ highScore, width/2 + 100, height/2 + 100)

  //         if (newHighScore == true) {
  //           fill(highScoreColor);
  //           text('NEW HIGH SCORE', width/2, height/2 + 140);
  //         }

  //         restart();
  //       }

  //       // youWin();

  //     }
  //     // //set up screen
  //     // background(bgColor);
  //     // //Draw background image
  //     // image(backgroundImg, 280, 5);

  //     // fill(textColor);
  //     // textSize(12);
  //     // // Draw directions to screen
  //     // textAlign('right', 'baseline');
  //     // text("Move the plate \n with the left and \n right arrow keys \n to catch the taco \n cats and avoid \n the imposters", width-10, 20);


  //     //debug
  //     // allSprites.debug = mouse.pressing();

};

// sketch.draw = function () {
//   // background(127); // grey
//   // fill(255, 0, 0); // red
//   // noStroke();
//   // rectMode(CENTER);
//   // rect(width / 2, height / 2, 50, 50);
//   //set up screen
//   // background(bgColor);
//   if (screen == 0) {
//     if (directionsButton.mouse.pressed()) {
//       screen = 1;
//       directionsScreen();
//     } else if (playButton.mouse.pressed()) {
//       screen = 2;

//       playScreenAssets();
//     }
//   }

//   if (screen == 1) {
//     if (backButton.mouse.pressed()) {
//       screen = 0;
//       backButton.pos = {x: -900, y: -900};
//       homeScreen();
//     }
//   }

//     if (screen == 2) {

//       //set up screen
//       background(bgColor);

//       //Draw background image
//       image(backgroundImg, 330, 5, 60, 79.711);

//       //draw lives
//       if (lives >= 2) {
//         image(heartImg, 140, 5, 50, 39.808);
//         if (lives >= 3) {
//           image(heartImg, 200, 5, 50, 39.808);
//           if (lives >= 4) {
//             image(heartImg, 260, 5, 50, 39.808);
//           }
//         }
//       }

//       if (((millis() - loadTime - timeUntilPlay) > wait) && (!fallen)) {
//         badFallingObject.vel.y = 2;
//         fallen = true;
//       }

//       if (fallingObject.img == fallingObjectImg1) {
//         fallingObject.img.scale = 0.0223;
//       } else if (fallingObject.img == fallingObjectImg2) {
//         fallingObject.img.scale = 0.088;
//       }

//       //If fallingObject reaches bottom, move back to random position at top
//       if (fallingObject.y >= height) {
//         fallingObject.y = 0;
//         fallingObject.x = random(width);
//         fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//         // score -= 1;
//         lives -= 1;
//       }
//         //If badFallingObject reaches bottom, move back to random position at top
//         if (badFallingObject.y >= height) {
//           badFallingObject.y = 0;
//           badFallingObject.x = random(width);
//           badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//         }

//         //Move catcher
//         if (play.kb.pressing("left")) {
//           catcher.vel.x = -3;
//         } else if (play.kb.pressing("right")) {
//           catcher.vel.x = 3;
//         } else {
//           catcher.vel.x = 0;
//         }

//         //Stop catcher at edges of screen
//         if (catcher.x < 50) {
//           catcher.x = 50;
//         } else if (catcher.x > 350) {
//           catcher.x = 350;
//         }

//         //If fallingObject collides with catcher, move back to random position at top
//         if (fallingObject.collides(catcher)) {
//           fallingObject.y = 0;
//           fallingObject.x = random(width);
//           fallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//           fallingObject.direction = 'down';
//           score += 1;
//         }

//         //If badFallingObject collides with catcher, move back to random position at top
//         if (badFallingObject.collides(catcher)) {
//           badFallingObject.y = 0;
//           badFallingObject.x = random(width);
//           badFallingObject.vel.y = random(1, 3) + fallingObjectSpeed;
//           badFallingObject.direction = 'down';
//           // score -= 1;
//           lives -= 1;
//         }

//         if (fallingObject.collides(badFallingObject)) {
//           fallingObject.direction = 'down';
//           badFallingObject.direction = 'down';
//           print('down');
//         }

//         //Display score
//         textAlign('left', 'bottom');
//         textStyle('bold');
//         textSize(16);
//         fill(textColor);
//         text('Score: ' + score, 10, 25);

//         if (score >= highScore && score !== 0) {
//           fill(highScoreColor);
//           highScore = score; 
//           if (newHighScore == false) {
//             newHighScore = true;
//           }
//         } else {
//           fill(textColor);
//         }

//         if (fallingObject.collides(badFallingObject)) {
//           fallingObject.direction = 'down';
//           badFallingObject.direction = 'down';
//           print('down');
//         }

//         text('High Score: ' + highScore, 10, 45);

//         fill(textColor);
//         text('Level ' + level, 10, 65);

//         console.log('Level = ' + level);

//         fallingObject.direction = 'down';
//         badFallingObject.direction = 'down';

//         checkLevel();


//         //Create lose state
//         if (lives < 1) {
//           catcher.x = 500;
//           fallingObject.y = -500;
//           badFallingObject.x = -500;
//           background(bgColor);
//           textSize(30);
//           textAlign('center');
//           fill(textColor);
//           text('You lost!', 200, 200);

//           textSize(15);
//           textStyle('normal');
//           fill(highScoreColor);
//           text('Click anywhere to play again', 200, 220);

//           textSize(18);
//           textStyle('bold');
//           fill(textColor);
//           text('Your score:\n'+ score, width/2 - 100, height/2 + 90)

//           text('Your high\n score:\n'+ highScore, width/2 + 100, height/2 + 100)

//           if (newHighScore == true) {
//             fill(highScoreColor);
//             text('NEW HIGH SCORE', width/2, height/2 + 140);
//           }

//           restart();
//         }

//         // youWin();

//       }
//       // //set up screen
//       // background(bgColor);
//       // //Draw background image
//       // image(backgroundImg, 280, 5);

//       // fill(textColor);
//       // textSize(12);
//       // // Draw directions to screen
//       // textAlign('right', 'baseline');
//       // text("Move the plate \n with the left and \n right arrow keys \n to catch the taco \n cats and avoid \n the imposters", width-10, 20);


//       //debug
//       // allSprites.debug = mouse.pressing();

// };

// sketch.restart = function () {
//   if (mouseIsPressed) {
//     score = 0;
//     lives = 3;
//     level = 1;
//     fallingObjectSpeed = 0;
//     catcherSpeed = 0;
//     newHighScore = false;
//     catcher.x = 200;
//     catcher.y = 370;
//     fallingObject.y = 0;
//     fallingObject.x = random(width);
//     fallingObject.vel.y = 2;
//     fallingObject.direction = 'down';
//     badFallingObject.y = 0;
//     badFallingObject.x = random(width);
//     badFallingObject.color = color(0,128,128);
//     badFallingObject.vel.y = 2;
//     badFallingObject.direction = 'down';
//   }
// }
function restart() {
  // if (mouseIsPressed) {
  //   score = 0;
  //   lives = 3;
  //   level = 1;
  //   fallingObjectSpeed = 0;
  //   catcherSpeed = 0;
  //   newHighScore = false;
  //   catcher.x = 200;
  //   catcher.y = 370;
  //   fallingObject.y = 0;
  //   fallingObject.x = random(width);
  //   fallingObject.vel.y = 2;
  //   fallingObject.direction = 'down';
  //   badFallingObject.y = 0;
  //   badFallingObject.x = random(width);
  //   badFallingObject.color = color(0,128,128);
  //   badFallingObject.vel.y = 2;
  //   badFallingObject.direction = 'down';
  // }
}

// sketch.youWin = function () {
//     //Create win state
//     if (score > 5) {
//       catcher.x = 500;
//       fallingObject.y = -500;
//       badFallingObject.x = -500;
//       background(bgColor);
//       textSize(30);
//       textAlign('center');
//       fill(highScoreColor);
//       text('You win!', 200, 200);
  
//       textSize(15);
//       textStyle('normal');
//       fill(textColor);
//       text('Click anywhere to play again', 200, 220);
//       restart();
//     }
// }
function youWin() {
  // //Create win state
  // if (score > 5) {
  //   catcher.x = 500;
  //   fallingObject.y = -500;
  //   badFallingObject.x = -500;
  //   background(bgColor);
  //   textSize(30);
  //   textAlign('center');
  //   fill(highScoreColor);
  //   text('You win!', 200, 200);

  //   textSize(15);
  //   textStyle('normal');
  //   fill(textColor);
  //   text('Click anywhere to play again', 200, 220);
  //   restart();
  // }
}
// sketch.homeScreen = function () {
//   background(bgColor);

//   fill(textColor);
//   textSize(40);
//   textStyle('bold');
//   textAlign(CENTER);
//   stroke(highScoreColor);
//   strokeWeight(2);
//   text("Taco Cat Catcher", width/2, height/2 - 80);

//   textStyle('normal');
//   noStroke();

//   //navigationButtons
//   p5play.directionsButton = new playing.Sprite(width/2 - 100, height/2 + 50, 100, 70, 'k');
//   directionsButton.color = textColor;
//   directionsButton.text = "How to Play";
//   directionsButton.textSize = 16;
//   directionsButton.textColor = highScoreColor;
//   directionsButton.stroke = highScoreColor;
//   directionsButton.strokeWeight = 3;

//   playButton = new playing.Sprite(width/2 + 100, height/2 + 50, 100, 70, 'k');
//   playButton.color = textColor;
//   playButton.text = "Play";
//   playButton.textSize = 16;
//   playButton.textColor = highScoreColor;
//   playButton.stroke = highScoreColor;
//   playButton.strokeWeight = 3;
  
// }
function homeScreen() {
  // background(bgColor);

  // fill(textColor);
  // textSize(40);
  // textStyle('bold');
  // textAlign(CENTER);
  // stroke(highScoreColor);
  // strokeWeight(2);
  // text("Taco Cat Catcher", width/2, height/2 - 80);

  // textStyle('normal');
  // noStroke();

  // //navigationButtons
  // directionsButton = p5play.createSpriteSprite(width/2 - 100, height/2 + 50, 100, 70, 'k');
  // directionsButton.color = textColor;
  // directionsButton.text = "How to Play";
  // directionsButton.textSize = 16;
  // directionsButton.textColor = highScoreColor;
  // directionsButton.stroke = highScoreColor;
  // directionsButton.strokeWeight = 3;

  // playButton = p5play.createSprite(width/2 + 100, height/2 + 50, 100, 70, 'k');
  // playButton.color = textColor;
  // playButton.text = "Play";
  // playButton.textSize = 16;
  // playButton.textColor = highScoreColor;
  // playButton.stroke = highScoreColor;
  // playButton.strokeWeight = 3;
}
// sketch.directionsScreen = function () {
//   background(bgColor);
//   playButton.pos = {x: -600, y: -600};
//   directionsButton.pos = {x: -800, y: -800};

//   backButton = new playing.Sprite(width/2, height/2 + 80, 100, 70, 'k');
//   backButton.color = textColor;
//   backButton.text = "Home";
//   backButton.textSize = 16;
//   backButton.textColor = highScoreColor;
//   backButton.stroke = highScoreColor;
//   backButton.strokeWeight = 3;

//   fill(textColor);
//   stroke(highScoreColor);
//   strokeWeight(2);
//   textSize(40);
//   textStyle('bold');
//   textAlign(CENTER);
//   text("How to Play", width/2, height/2 - 100);

//   textStyle('normal');
//   noStroke();

//   // Draw directions to screen
//   rectMode(CENTER);
//   fill(textColor);
//   textSize(18);
//   textAlign(CENTER);
//   text("Move the plate with the left and right arrow keys to catch the taco cats and avoid the imposters", width/2, height/2 - 20, 300, 100);
// }
function directionsScreen() {
  // background(bgColor);
  // playButton.pos = {x: -600, y: -600};
  // directionsButton.pos = {x: -800, y: -800};

  // backButton = new createSprite(width/2, height/2 + 80, 100, 70, 'k');
  // backButton.color = textColor;
  // backButton.text = "Home";
  // backButton.textSize = 16;
  // backButton.textColor = highScoreColor;
  // backButton.stroke = highScoreColor;
  // backButton.strokeWeight = 3;

  // fill(textColor);
  // stroke(highScoreColor);
  // strokeWeight(2);
  // textSize(40);
  // textStyle('bold');
  // textAlign(CENTER);
  // text("How to Play", width/2, height/2 - 100);

  // textStyle('normal');
  // noStroke();

  // // Draw directions to screen
  // rectMode(CENTER);
  // fill(textColor);
  // textSize(18);
  // textAlign(CENTER);
  // text("Move the plate with the left and right arrow keys to catch the taco cats and avoid the imposters", width/2, height/2 - 20, 300, 100);
}
// sketch.playScreenAssets = function () {
//   timeUntilPlay = millis();
//   playButton.pos = {x: -600, y: -600};
//   directionsButton.pos = {x: -800, y: -800};

//   //Create catcher 
//   catcher = new Sprite(catcherImg, 200, 370, 80, 50, 'k');
//   catcher.color = color(95,158,160);
//   catcher.img.scale = 0.1563;

//   //Create falling objects
//   fallingObject = new playing.Sprite(fallingObjectImg1, 100, 0, 45, 42);
//   // fallingObject.color = color(0,128,128);
//   // fallingObject.img.scale = 0.0223;
//   fallingObject.vel.y = 2;
//   fallingObject.rotationLock = true;

//   //TO-DO: figure out if I can delay the creation of this sprite for a few secs
//   badFallingObject = new Sprite(badFallingObjectImg, 150, -20, 35, 40);
//   badFallingObject.color = color(0,128,128);
//   badFallingObject.img.scale = 0.09;

//   badFallingObject.rotationLock = true;  
// }
function playScreenAssets() {
  // timeUntilPlay = millis();
  // playButton.pos = {x: -600, y: -600};
  // directionsButton.pos = {x: -800, y: -800};

  // //Create catcher 
  // catcher = new createSprite(catcherImg, 200, 370, 80, 50, 'k');
  // catcher.color = color(95,158,160);
  // catcher.img.scale = 0.1563;

  // //Create falling objects
  // fallingObject = new createSprite(fallingObjectImg1, 100, 0, 45, 42);
  // // fallingObject.color = color(0,128,128);
  // // fallingObject.img.scale = 0.0223;
  // fallingObject.vel.y = 2;
  // fallingObject.rotationLock = true;

  // //TO-DO: figure out if I can delay the creation of this sprite for a few secs
  // badFallingObject = new createSprite(badFallingObjectImg, 150, -20, 35, 40);
  // badFallingObject.color = color(0,128,128);
  // badFallingObject.img.scale = 0.09;

  // badFallingObject.rotationLock = true;  
}
// sketch.checkLevel = function () {
//   if (score % 5 == 0 && score !== 0) {
//     if (level !== score/5 + 1) {
//       level = score/5 + 1;
//       fallingObjectSpeed += 0.25;
//       console.log('increased speed to ' + fallingObjectSpeed);
//     }

//     // console.log('increased speed to ' + fallingObjectSpeed);
//     // checkLevelLoop += 1
//     // console.log(checkLevelLoop);
//     // if (checkLevelLoop % 2 !== 0) {
//       // console.log('checkLevelLoop is odd');
//       // fallingObjectSpeed += 0.05;
//     // } else if (checkLevelLoop % 2 === 0) {
//       // console.log('checkLevelLoop is even');
//       // catcherSpeed += 0.10;
//     // }
//   }
// }
function checkLevel() {
  // if (score % 5 == 0 && score !== 0) {
  //   if (level !== score/5 + 1) {
  //     level = score/5 + 1;
  //     fallingObjectSpeed += 0.25;
  //     console.log('increased speed to ' + fallingObjectSpeed);
  //   }

  //   // console.log('increased speed to ' + fallingObjectSpeed);
  //   // checkLevelLoop += 1
  //   // console.log(checkLevelLoop);
  //   // if (checkLevelLoop % 2 !== 0) {
  //     // console.log('checkLevelLoop is odd');
  //     // fallingObjectSpeed += 0.05;
  //   // } else if (checkLevelLoop % 2 === 0) {
  //     // console.log('checkLevelLoop is even');
  //     // catcherSpeed += 0.10;
  //   // }
  // }
}

// sketch.mousePressed = function () {
//   console.log(`I am here at ${mouseX}:${mouseY}`);
//   addHighScores("LSD", 10);
// };

function mousePressed() {
  //   console.log(`I am here at ${mouseX}:${mouseY}`);
  // addHighScores("LSD", 10);
}
