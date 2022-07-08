class Startscreen {
  constructor() {
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }

  splashScreen() {
    fill(0);
    rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fill("red");
    textSize(50);
    textAlign(CENTER);
    text("The Dark Knight", 500, 200);
    textSize(20);
    textAlign(CENTER);
    text("Press 'P' to play", 500, 250);
    text(
      "Goal: Eat pumpkins before they disappear. Shoot rockets to kill bats. Don't get hit by bats.",
      500,
      290
    );
    text("Use arrow keys to move. Use spacebar to shoot.", 500, 330);
    text("Refresh page to play again.", 500, 370);
    noLoop();
  }
}
