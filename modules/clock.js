function Clock() {

  this.display = function(x, y) {

    fill(255);

    let date = new Date(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    textSize(100);
    if (seconds % 2 == 0) {
      text(hours + " : " + minutes, x, y);
    } else {
      text(hours + "   " + minutes, x, y);
    }

  }

}