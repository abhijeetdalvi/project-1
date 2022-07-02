class Rocket {
  constructor(rocketTop, rocketLeft, rocketImg) {
    this.rocketTop = rocketTop;
    this.rocketLeft = rocketLeft;
    this.rocketImg = rocketImg;
    this.width = 50;
    this.height = 50;
  }

  // preload() {
  //   this.rocketImg = loadImage("Assets/rocket.png");
  // }

  drawRockets() {
    // textSize(20);
    // text("🌼", this.left, this.top);
    image(
      this.rocketImg,
      this.rocketLeft,
      this.rocketTop,
      this.width,
      this.height
    );
    this.rocketTop -= 5;
  }
}
