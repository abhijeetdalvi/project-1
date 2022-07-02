class Pumpkins {
  constructor(img) {
    this.left = random(100, 1100);
    this.top = random(550, 600);
    this.pumpkinsBirthCertificate = frameCount;
    this.lifeTime = random(60 * 2, 60 * 5);
    this.img = img;
    this.width = 40;
    this.height = 40;
  }

  // setRandomPositionX() {
  //   return Math.floor(Math.random) * CANVAS_WIDTH;
  // }

  // setRandomPositionY() {
  //   return Math.floor(Math.random) * CANVAS_HEIGHT;
  // }

  drawPumpkins() {
    // textSize(25);
    // text("🎃", this.left, this.top);
    //this.top = this.speed;
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.pumpkinsBirthCertificate + this.lifeTime <= frameCount) {
      this.shouldDisappear = true;
    }
  }

  // resetTopAndLeft() {
  //   this.top = this.random(550, 650);
  //   this.left = this.random(100, 1100);
  // }
}
