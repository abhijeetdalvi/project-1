class Player {
  constructor() {
    this.height = 70;
    this.width = 75;
    this.left = 0;
    this.top = 0;
    this.floor = 575;
    this.velocity = 0;
  }

  preload() {
    this.img = loadImage("./Images/istockphoto-right.jpg");
  }

  drawPlayer() {
    this.velocity += GRAVITY;
    this.top += this.velocity;
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.hasReachedTheGround()) {
      this.top = this.floor;
      this.velocity = 0;
    }

    if (keyIsDown(ARROW_LEFT)) {
      if (this.left > 0) {
        this.left -= 4;
      }
    }
    if (keyIsDown(ARROW_RIGHT)) {
      if (this.left < CANVAS_WIDTH - this.width) {
        this.left += 4;
      }
    }
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }
}
