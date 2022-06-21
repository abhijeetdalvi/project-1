class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.bats = [];
    //this.fruit = new Pumpkins();
    this.fruit = [];
  }

  preload() {
    this.background.preload();
    this.player.preload();
    //this.bats.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    //this.fruit.drawPumpkins();

    if (frameCount % 75 === 0) {
      this.bats.push(new Bats());
    }

    this.bats = this.bats.filter((bat) => {
      bat.drawBats();

      return bat.top <= 650;
    });

    if (frameCount % 75 === 0) {
      this.fruit.push(new Pumpkins());
    }

    this.fruit = this.fruit.filter((appear) => {
      appear.drawPumpkins();

      return appear.top <= 650; //(any number smaller or equal to 300 will always be smaller than any random number between 500 and 650)
    });
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
