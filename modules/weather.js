function Weather() {

  this.weather;
  this.path = "http://api.openweathermap.org/data/2.5/weather?id=2806142&appid=" + key + "&units=metric&lang=de";
  this.img;
  this.setup = false;

  this.display = function(x, y) {
    if (this.weather) {
      if (frameCount > 10 && this.img && this.setup) {
        let weather = this.weather;
        let temp = round(weather.main.temp);
        let humidity = weather.main.humidity;
        let desc = weather.weather[0].description;
        let tmin = weather.main.temp_min;
        let tmax = weather.main.temp_max;

        textSize(80);
        text(temp + "°", x, y);
        textSize(30);
        text(desc, x - 150, y + 100);
        textSize(45);
        fill(0, 0, 255);
        text(tmax, x - 20, y + 60);
        fill(255, 0, 0);
        text(tmin, x + 50, y + 60);

        imageMode(CENTER);
        image(this.img, x - 50, y, 100, 100);
      }
      if (frameCount == 5) this.setup();
    }
  }

  this.setup = function() {
    if (this.weather) {
      let icon = this.weather.weather[0].icon;
      let p = "images/" + icon + ".png";
      this.img = loadImage(p);
      this.setup = true;
    }
  }

  this.resize = function(w, h) {
    if (this.img) {
      this.img.resize(w, h);
    }
  }

  this.load = function() {
    if (!this.weather) {
      this.weather = loadJSON(this.path);
    }
  }

  this.gotData = function(data) {
    this.weather = data;
  }

}