function Forecast() {

  this.weather;
  this.path = "http://api.openweathermap.org/data/2.5/forecast?id=2806142&appid=" + key + "&lang=de&units=metric";
  this.setup = false;
  this.registerd = false;
  this.days = [];
  this.imgs = [];

  this.display = function(x, y) {
    if (this.weather) {
      if (frameCount > 10 && this.setup && this.registerd) {
        // ICON DESC? MAX MIN
        for (let i = 0; i < this.days.length; i++) {
          let dy = y + i * 40;
          let d = new Date(this.days[i].dt * 1000);
          let weekDay = this.getWeekday(d.getDay());
          fill(255);
          textSize(30);
          text(weekDay, x - 10, dy + 6);
          image(this.imgs[i], x + 65, dy);
          text(this.days[i].main.temp_max, x + 100, dy + 6);
          text(this.days[i].main.temp_min, x + 200, dy + 6);
        }
      }
      if (frameCount == 5) this.register();
    }
  }

  this.getWeekday = function(day) {
    let weekday = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    return weekday[day];
  }

  this.register = function() {
    if (this.weather) {
      let d = new Date();
      let list = this.weather.list;
      console.log("list " + list.length === undefined);
      console.log("this.days " + this.days.length === undefined);
      for (let i = 0; i < list.length && this.days.length < 3; i++) {
        let tmp = list[i].dt_txt;
        let day = int(tmp.substring(8, 10));
        if (d.getDate() == day) {
          continue;
        }
        let hour = int(tmp.substring(11, 13));
        if (hour == 15) {
          this.days.push(list[i]);
        }
      }
      for (let i = 0; i < this.days.length; i++) {
        let icon = this.days[i].weather[0].icon;
        this.imgs[i] = loadImage("images/" + icon + ".png");
      }
      this.registerd = true;
    }
  }

  this.load = function() {
    if (!this.weather) {
      this.weather = loadJSON(this.path);
      this.setup = true;
    }
  }

  this.gotData = function(data) {
    this.weather = data;
  }

}