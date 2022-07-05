class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    //this.rocket = new Rocket();
    //this.music = new Music();
    this.bats = [];
    this.fruit = [];
    this.rocketArray = [];
    this.kills = 0;
    this.hit = true;
    this.score = 0;
  }

  preload() {
    //backgroundForest = loadSound("Assets/powerful-victory-trailer-103656.mp3");
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
    //backgroundForest.play();

    // collision player with bat
    this.bats = this.bats.filter((bat) => {
      bat.drawBats();

      if (this.collisionTwoElements(this.player, bat)) {
        fill(0);
        rect(0, 0, 1200, 650);
        fill(227, 101, 91);
        textSize(50);
        textAlign(CENTER);
        text("GAME OVER", 400, 400);
        // this logic for what happens after there is a collision with the player is broken
      }

      this.rocketArray = this.rocketArray.filter((rocket) => {
        rocket.drawRockets();

        if (this.collisionTwoElements(rocket, bat)) {
          this.kills++;
          console.log("BUMP");
          this.rocketAndBatExplision(rocket, bat);
        }
        return rocket.top >= 0 && !rocket.hasShotABAt;
      });

      return bat.top <= CANVAS_HEIGHT && !bat.hasBeenShotByRocket;
    });

    if (this.playerCollideWithFruit()) {
      this.score++;
    }

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
      }
      return (
        !currentPumpkin.shouldDisappear && !currentPumpkin.hasBeenEatenByPlayer
      );
    });

    //drawing new rocket
    // this.rocketArray.forEach((newRocket) => {
    //   newRocket.drawRockets();
    // });

    //this.flush();

    // if (this.pumpkinCollisionWithPlayer()) {
    //   this.fruit.splice(this.fruit.indexOf(currentPumpkin), 1);
    //   //this.fruit.resetTopAndLeft();
    //   console.log("collision");
    //   this.score++;
    // }

    // this.bats.forEach((bat) => {
    //   this.rocketArray.forEach((newRocket) => {
    //     if (this.rocketCollisionWithBat(bat, newRocket)) {
    //       this.bats.splice(this.bats.indexOf(bat));
    //       this.rocketArray.splice(this.rocketArray.indexOf(newRocket));
    //       console.log("bump");
    //       this.score += 1;
    //       //.innerText = `${this.kills} killed`;

    //       // if(bottomOfBat >= this.player.top) {

    //       // }
    //     }
    //   });
    // });

    // if(this.batHitsPlayer()) {
    //   console.log("hit");

    // }
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

  playerCollideWithFruit() {
    const bottomOfPlayer = this.player.top + this.player.height;
    const topOfFruit = this.fruit.top;
    const bottomOfPlayerGreaterThenFruit = bottomOfPlayer > topOfFruit;

    const topOfPlayer = this.player.top;
    const bottomOfFruit = this.fruit.top + this.fruit.height;
    const topOfPlayerSmallerThenFruit = topOfPlayer < bottomOfFruit;

    const leftOfPlayer = this.player.left;
    const rightOfFruit = this.fruit.left + this.fruit.width;
    const leftOfPlayerSmallerThenRightOfFruit = leftOfPlayer < rightOfFruit;

    const rightOfPlayer = this.player.left + this.player.width;
    const leftOfFruit = this.fruit.left;
    const rightOfPlayerGreaterThenLeftOfFruit = rightOfPlayer > leftOfFruit;

    return (
      bottomOfPlayerGreaterThenFruit &&
      topOfPlayerSmallerThenFruit &&
      leftOfPlayerSmallerThenRightOfFruit &&
      rightOfPlayerGreaterThenLeftOfFruit
    );
    console.log("isColliding");
  }
}
