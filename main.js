const game = new Game();

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function preload() {
  game.preload();
  //backgroundForest = loadSound("Assets/mixkit-game-level-music-689.wav");
}

function backgroundMusic() {
  backgroundForest.play();
  backgroundForest.loop();
  backgroundForest.setVolume(0.3);
}

function draw() {
  game.play();

  //backgroundMusic();
}

function keyPressed() {
  game.keyPressed();
}
