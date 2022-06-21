class Bats {
  constructor() {
    this.top = 0;
    this.width = 0;
    //this.height = 30;
    this.left = random(this.width, 1200 - this.width);
    this.speed = random(1, 5);
  }

  //   preload() {
  //     this.img = loadImage("./Images/bats.jpg");
  //   }

  drawBats() {
    textSize(40);
    text("🦇", this.left, this.top);
    this.top += this.speed;
    //pop();
  }
}
