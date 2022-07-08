const game = new Game();
const start = new Startscreen();

// sound related files are in function setup

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundForest.play();
  backgroundForest.loop();
  backgroundForest.setVolume(0.3);
  userStartAudio();
}

// Preloads all game related preload

function preload() {
  game.preload();
}

let stage = 0;

function draw() {
  // if (stage === 0) {
  //   start.splashScreen();
  // }
  // if (mouseIsPressed === true) {
  //   stage = 1;
  // }
  // if (stage === 1) {
  game.play();

  // console.log("mouse");
}

function keyPressed() {
  game.keyPressed();
}
