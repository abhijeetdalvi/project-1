class Rocket {
  // In constructor we put top, left and image as we want to have fix properties.

  constructor(rocketTop, rocketLeft, rocketImg) {
    this.top = rocketTop;
    this.left = rocketLeft;
    this.rocketImg = rocketImg;
    this.width = 50 / 1.2;
    this.height = 50 / 1.2;
    this.hasShotABAt = false;
  }

  // draw rocket image with constructor properties. Image is preloaded in game.js

  drawRockets() {
    image(this.rocketImg, this.left, this.top, this.width, this.height);
    this.top -= 5;
  }
}
