class Finances {

  constructor() {
    this.shares = undefined;
  }

  display(x, y) {
    ellipse(x, y, 100, 100);
  }

  setup() {}

  gotData(data) {
    this.shares = data;
  }

}