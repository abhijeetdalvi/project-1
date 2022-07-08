const game = new Game();

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundForest.play();
  backgroundForest.loop();
  backgroundForest.setVolume(0.3);
  userStartAudio();
}

function preload() {
  game.preload();
  //backgroundForest = loadSound("Assets/powerful-victory-trailer-103656.mp3");
}

function draw() {
  game.play();
}

function keyPressed() {
  game.keyPressed();
}
