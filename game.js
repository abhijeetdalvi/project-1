class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.bats = [];
    this.gems = new Gems();
  }

  preload() {
    this.background.preload();
    this.player.preload();
    //this.bats.preload();
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();
    this.gems.drawGems();

    if (frameCount % 75 === 0) {
      this.bats.push(new Bats());
    }

    this.bats = this.bats.filter((pumpkins) => {
      pumpkins.drawBats();

      return pumpkins.top <= 650;
    });
  }

  //   keyPressed() {
  //     this.player.keyPressed();
  //   }
}
