class Gems {
  constructor(width, height) {
    this.width = this.setRandomPositionX();
    this.height = this.setRandomPositionY();
    //this.left = random(this.width, 1200 - this.width);
  }

  setRandomPositionX() {
    return Math.floor(Math.random) * CANVAS_WIDTH;
  }

  setRandomPositionY() {
    return Math.floor(Math.random) * (CANVAS_HEIGHT - 500);
  }

  drawGems() {
    textSize(50);
    text("💎", this.width, this.height);
  }

  resetTopAndLeft() {
    this.x = this.setRandomPositionX();
    this.y = this.setRandomPositionY();
  }
}
