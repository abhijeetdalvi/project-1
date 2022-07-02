class Bats {
  constructor(img) {
    this.top = random(0, 400);
    this.left = random(100, 1100);
    this.speed = random(3, 8);
    this.img = img;
    this.height = 75;
    this.width = 75;
  }

  // preload() {
  //   this.img = loadImage("Images/bats.jpg");
  // }

  drawBats() {
    // textSize(40);
    // text("🦇", this.left, this.top);
    image(this.img, this.left, this.top, this.width, this.height);
    this.top += this.speed;
    //pop();
  }
}
