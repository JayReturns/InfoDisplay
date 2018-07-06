class Loading {
  constructor() {
    this.animation = loadImage("images/Radio-1s-200px.svg");
  }
  display(x, y) {
    image(this.animation, x, y);
  }
}