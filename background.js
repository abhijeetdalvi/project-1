class Background {
  constructor() {
    this.left = 0;
  }

  preload() {
    this.img = loadImage("Assets/IMG_0376.JPG");
  }

  drawBackground() {
    image(this.img, this.left, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
