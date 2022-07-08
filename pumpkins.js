class Pumpkins {
  constructor(img) {
    const diff = 100;
    this.left = random(diff / 1.2, CANVAS_WIDTH - diff / 1.2);
    const heightDiff = 50;
    this.top = random(
      CANVAS_HEIGHT - heightDiff * 2,
      CANVAS_HEIGHT - heightDiff
    );
    this.pumpkinsBirthCertificate = frameCount;
    this.lifeTime = random(60 * 2, 60 * 5);
    this.img = img;
    this.width = 40 / 1.2;
    this.height = 40 / 1.2;
    this.hasBeenEatenByPlayer = false;
  }

  // Pumpkin image is preloaded in game.js
  // Pumpkin lifetime is between 2 to 5 seconds and later it disppears.

  draw() {
    image(this.img, this.left, this.top, this.width, this.height);

    if (this.pumpkinsBirthCertificate + this.lifeTime <= frameCount) {
      this.shouldDisappear = true;
    }
  }
}
