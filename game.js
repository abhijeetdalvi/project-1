class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.bats = [];
    this.fruit = [];
    this.rocketArray = [];
    this.kills = 0;
    this.hit = true;
    this.score = 0;
    this.mode = 0;
  }

  preload() {
    backgroundForest = loadSound("Assets/mixkit-game-level-music-689.wav");
    this.background.preload();
    batty = loadImage("Assets/batty.png");
    pumpkino = loadImage("Assets/pumpkin.png");
    this.player.preload();
    rocket = loadImage("Assets/rocket.png");
  }

  rocketAndBatExplision(rocket, bat) {
    bat.hasBeenShotByRocket = true;
    rocket.hasShotABAt = true;
  }

  play() {
    this.background.drawBackground();
    this.player.drawPlayer();

    //start screen
    // fill(0);
    // rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // fill("red");
    // textSize(50);
    // textAlign(CENTER);
    // text("The Dark Knight", 500, 200);
    // textSize(20);
    // textAlign(CENTER);
    // text("Press 'P' to play", 500, 250);
    // text(
    //   "Goal: Eat pumpkins before they disappear. Shoot rockets to kill bats. Don't get hit by bats.",
    //   500,
    //   290
    // );
    // text("Use arrow keys to move. Use spacebar to shoot.", 500, 330);
    // text("Refresh page to play again.", 500, 370);
    // noLoop();

    //backgroundForest.play();

    // collision player with bat. If bat hits player then game is over.
    this.bats = this.bats.filter((bat) => {
      bat.drawBats();

      if (this.collisionTwoElements(this.player, bat)) {
        fill(0);
        rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fill("red");
        textSize(100);
        textAlign(CENTER);
        text("GAME OVER", 500, 300);
        noLoop();
        // this logic for what happens after there is a collision with the player is broken
      }

      this.rocketArray = this.rocketArray.filter((rocket) => {
        rocket.drawRockets();

        if (this.collisionTwoElements(rocket, bat)) {
          this.kills++;
          console.log("BUMP");
          this.rocketAndBatExplision(rocket, bat);
          batKills.innerText = ` ${this.kills}`;
        }
        return rocket.top >= 0 && !rocket.hasShotABAt;
      });

      return bat.top <= CANVAS_HEIGHT && !bat.hasBeenShotByRocket;
    });

    if (frameCount % 75 === 0) {
      this.bats.push(new Bats(batty));
    }

    // this.bats = this.bats.filter((bat) => {
    //   bat.drawBats();

    //   return bat.top <= 650;
    // });

    if (frameCount % 75 === 0) {
      this.fruit.push(new Pumpkins(pumpkino));
    }

    this.fruit = this.fruit.filter((currentPumpkin) => {
      currentPumpkin.draw();

      if (this.collisionTwoElements(currentPumpkin, this.player)) {
        this.score++;
        currentPumpkin.hasBeenEatenByPlayer = true;
        pumpkinEat.innerText = ` ${this.score}`;
      }
      return (
        !currentPumpkin.shouldDisappear && !currentPumpkin.hasBeenEatenByPlayer
      );
    });
  }

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
      top: this.player.top - 30,
      left: this.player.left + 10,
    };
  }

  //flushing rockets
  flush() {
    this.rocketArray = this.rocketArray.filter(
      (newRocket) => newRocket.top <= CANVAS_HEIGHT
    );
  }

  rocketCollisionWithBat(bat, newRocket) {
    const bottomOfBat = bat.height + bat.top;
    const topOfRocket = newRocket.rocketTop;
    const result = bottomOfBat >= topOfRocket;

    return result;
  }

  batHitsPlayer() {
    const bottomOfBat = this.bats.top + this.bats.height;
    const topOfPlayer = this.player.top;
    const result = bottomOfBat > topOfPlayer;

    return result;
  }

  collisionTwoElements(elementOne, elementTwo) {
    const bottomOfElementOne = elementOne.top + elementOne.height;
    const topOfElementTwo = elementTwo.top;
    const bottomOfElementOneGreaterThanElementTwo =
      bottomOfElementOne > topOfElementTwo;

    const topOfElementOne = elementOne.top;
    const bottomOfElementTwo = elementTwo.top + elementTwo.height;
    const topOfElementOneSmallerThanElementTwo =
      topOfElementOne < bottomOfElementTwo;

    const leftOfElementOne = elementOne.left;
    const rightOfElementTwo = elementTwo.left + elementTwo.width;
    const leftOfElementOneSmallerThenRightOfElementTwo =
      leftOfElementOne < rightOfElementTwo;

    const rightOfElementOne = elementOne.left + elementOne.width;
    const leftOfElementTwo = elementTwo.left;
    const rightOfElementOneGreaterThenLeftOfElementTwo =
      rightOfElementOne > leftOfElementTwo;

    return (
      bottomOfElementOneGreaterThanElementTwo &&
      topOfElementOneSmallerThanElementTwo &&
      leftOfElementOneSmallerThenRightOfElementTwo &&
      rightOfElementOneGreaterThenLeftOfElementTwo
    );
  }
}
