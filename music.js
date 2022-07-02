class Music {
  constructor() {
    this.music = music;
  }

  preload() {
    this.music = loadSound("/Images/powerful-victory-trailer-103656.mp3");
  }

  drawMusic() {
    this.music.loop();
  }
}
