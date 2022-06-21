class Pumpkins {
  constructor() {
    this.left = random(0, CANVAS_WIDTH);
    this.top = random(550, 650);
    //this.top = this.setRandomPositionY();
    //this.left = random(this.width, 1200 - this.width);
    //this.speed = 0;
  }

  // setRandomPositionX() {
  //   return Math.floor(Math.random) * CANVAS_WIDTH;
  // }

  // setRandomPositionY() {
  //   return Math.floor(Math.random) * CANVAS_HEIGHT;
  // }

  drawPumpkins() {
    textSize(40);
    text("🎃", this.left, this.top);
    //this.top = this.speed;
  }

  // resetTopAndLeft() {
  //   this.x = this.setRandomPositionX();
  //   this.y = this.setRandomPositionY();
  // }
}
