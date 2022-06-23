class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.bats = [];
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

    this.fruit = this.fruit.filter((currentPumpkin) => {
      currentPumpkin.drawPumpkins();

      return !currentPumpkin.shouldDisappear;
    });

    if (this.pumpkinCollisionWithPlayer()) {
      this.fruit.resetTopAndLeft();
      this.score++;
    }
  }

  pumpkinCollisionWithPlayer() {
    const bottomOfPlayer = this.player.top + this.player.height;
    const topOfPumpkin = this.fruit.top;
    const isPlayerBottomBiggerThenTopOfPumpkin = bottomOfPlayer > topOfPumpkin;

    const topOfPlayer = this.player.top;
    const bottomOfPumpkin = this.fruit.height + this.fruit.top;
    const isTopOfPlayerSmallerThanBottomOfPumpkin =
      topOfPlayer <= bottomOfPumpkin;

    const leftOfPlayer = this.player.left;
    const rightOfPumpkin = this.fruit.left + this.fruit.width;
    const isLeftOfPlayerSmallerThanRightOfPumpkin =
      leftOfPlayer <= rightOfPumpkin;

    const rightOfPlayer = this.player.width + this.player.left;
    const leftOfPumpkin = this.fruit.left;
    const isRightOfPlayerBiggerThanLeftOfPumpkin =
      rightOfPlayer >= leftOfPumpkin;

    return (
      isPlayerBottomBiggerThenTopOfPumpkin &&
      isTopOfPlayerSmallerThanBottomOfPumpkin &&
      isLeftOfPlayerSmallerThanRightOfPumpkin &&
      isRightOfPlayerBiggerThanLeftOfPumpkin
    );
  }

  keyPressed() {
    this.player.keyPressed();
  }
}
