class Player {
  constructor(img) {
    this.height = PLAYER_HEIGHT;
    this.width = PLAYER_WIDTH;
    this.left = 0;
    this.top = 0;
    this.floor = 580;
    this.velocity = 0;
    //this.rocketArray = [];
    this.img = img;
    //this.rocket = new Rocket();
  }

  preload() {
    this.img = loadImage("Assets/batman.png");
    //this.rocketImg = loadImage("Assets/rocket.png");
  }

  drawPlayer() {
    image(this.img, this.left, this.top, this.width, this.height);
    this.velocity += GRAVITY;
    this.top += this.velocity;

    // textSize(75);
    // text("🧌", this.left, this.top);

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

    // this.rocketArray.forEach((rocketino) => {
    //   rocketino.drawRockets();
    // });

    // this.flush();
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

    // if (keyCode === SPACE_BAR) {
    //   this.shootRockets();
    // }
  }

  // shootRockets() {
  //   const rocketLocation = this.shootingOrigin();
  //   this.rocketArray.push(
  //     new Rocket(rocketLocation.top, rocketLocation.left, this.player.rocketImg)
  //   );
  // }

  // shootingOrigin() {
  //   return {
  //     top: this.top - 70,
  //     left: this.left + 10,
  //   };
  // }

  // flush() {
  //   this.rocketArray = this.rocketArray.filter(
  //     (rocketino) => rocketino.top <= CANVAS_HEIGHT
  //   );
  // }
}
