class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    //this.rocket = new Rocket();
    //this.music = new Music();
    this.bats = [];
    this.fruit = [];
    this.rocketArray = [];
  }

  preload() {
    //backgroundForest = loadSound("Assets/powerful-victory-trailer-103656.mp3");
    this.background.preload();
    batty = loadImage("Assets/batty.png");
    pumpkino = loadImage("Assets/pumpkin.png");
    this.player.preload();
    rocket = loadImage("Assets/rocket.png");
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    //this.music.drawMusic();
    // this.rocketCollisionWithBat();

    if (frameCount % 75 === 0) {
      this.bats.push(new Bats(batty));
    }

    this.bats = this.bats.filter((bat) => {
      bat.drawBats();

      return bat.top <= 650;
    });

    if (frameCount % 75 === 0) {
      this.fruit.push(new Pumpkins(pumpkino));
    }

    this.fruit = this.fruit.filter((currentPumpkin) => {
      currentPumpkin.drawPumpkins();

      return !currentPumpkin.shouldDisappear;
    });

    //drawing new rocket
    this.rocketArray.forEach((newRocket) => {
      newRocket.drawRockets();
    });

    if (this.pumpkinCollisionWithPlayer()) {
      this.fruit.splice(this.fruit.indexOf(currentPumpkin), 1);
      //this.fruit.resetTopAndLeft();
      console.log("collision");
      this.score++;
    }

    //this.flush();
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

  // PlayerCollisionWithPumpkin() {
  //   for (let bat of this.bats) {
  //     //console.log(bat);
  //     for (let flower of this.player.flowerArray) {
  //       //console.log(flower);
  //       if (
  //         dist(bat.this.left, bat.this.top, flower.this.left, flower.this.top) <
  //         10
  //       ) {
  //         this.bats.splice(this.bats.indexOf(bat), 1);
  //         this.player.flowerArray.splice(
  //           this.player.flowerArray.indexOf(flower),
  //           1
  //         );
  //         //   console.log("collision");
  //       }
  //     }
  //   }
  // }

  keyPressed() {
    this.player.keyPressed();
  }

  //shooting with spacebar
  keyPressed() {
    if (keyCode === SPACE_BAR) {
      //console.log('shooting')
      this.shootRockets();
    }
  }

  shootRockets() {
    const rocketLocation = this.shootingOrigin();
    this.rocketArray.push(
      new Rocket(rocketLocation.top, rocketLocation.left, rocket)
    );
    //console.log(this.rocketArray);
  }

  //shooting location
  shootingOrigin() {
    return {
      top: this.player.top - 70,
      left: this.player.left + 10,
    };
  }

  //flushing bullets
  flush() {
    this.rocketArray = this.rocketArray.filter(
      (newRocket) => newRocket.top <= CANVAS_HEIGHT
    );
  }
}
