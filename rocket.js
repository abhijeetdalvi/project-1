class Rocket {
  constructor(rocketTop, rocketLeft, rocketImg) {
    this.top = rocketTop;
    this.left = rocketLeft;
    this.rocketImg = rocketImg;
    this.width = 50 / 1.2;
    this.height = 50 / 1.2;
    this.hasShotABAt = false;
  }

  // preload() {
  //   this.rocketImg = loadImage("Assets/rocket.png");
  // }

  drawRockets() {
    // textSize(20);
    // text("🌼", this.left, this.top);
    image(this.rocketImg, this.left, this.top, this.width, this.height);
    this.top -= 5;
  }
}
