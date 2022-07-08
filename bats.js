class Bats {
  constructor(img) {
    this.top = random(0, 400 / 1.2);
    this.left = random(100 / 1.2, 1100 / 1.2);
    this.speed = random(3, 8);
    this.img = img;
    this.height = 75 / 1.2;
    this.width = 75 / 1.2;
    this.hasBeenShotByRocket = false;
  }

  drawBats() {
    image(this.img, this.left, this.top, this.width, this.height);
    this.top += this.speed;
  }
}
