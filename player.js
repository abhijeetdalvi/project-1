class Player {
  constructor(img) {
    this.height = PLAYER_HEIGHT;
    this.width = PLAYER_WIDTH;
    this.left = 0;
    this.top = 0;
    this.floor = CANVAS_HEIGHT - this.height;
    this.velocity = 0;
    this.img = img;
  }

  preload() {
    this.img = loadImage("Assets/batman.png");
  }

  drawPlayer() {
    image(this.img, this.left, this.top, this.width, this.height);
    this.velocity += GRAVITY;
    this.top += this.velocity;

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

    if (keyIsDown(ARROW_UP)) {
      if (this.top > 0) {
        this.top -= 10;
      }
    }
  }

  hasReachedTheGround() {
    return this.top >= this.floor;
  }

  keyPressed() {
    if (keyCode === ARROW_UP) {
      value = this.height;
    } else if (keyCode === ARROW_DOWN) {
      value = 0;
    }
  }
}
