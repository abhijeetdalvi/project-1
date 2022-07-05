const game = new Game();

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function preload() {
  game.preload();
  //backgroundForest = loadSound("Assets/powerful-victory-trailer-103656.mp3");
}

function backgroundMusic() {
  //backgroundForest.play();
  backgroundForest.loop();
  backgroundForest.setVolume(0.1);
}

function draw() {
  game.play();
  //backgroundMusic();
}

function keyPressed() {
  game.keyPressed();
}
