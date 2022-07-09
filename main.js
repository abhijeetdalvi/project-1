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

function draw() {
  game.play();
}

function keyPressed() {
  game.keyPressed();
}
