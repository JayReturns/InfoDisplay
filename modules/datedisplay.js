function DateDisplay() {

  this.display = function(x, y) {
    textSize(40);
    text(this.getDate(), x, y);
  }

  this.getDate = function() {
    let month = this.getMonth();
    let weekday = this.getWeekday();
    let numday = this.getNumDay();
    let year = this.getYear();
    return weekday + ", " + numday + " " + month + " " + year;
  }

  this.getNumDay = function() {
    let d = new Date();
    return d.getDate();
  }

  this.getYear = function() {
    let d = new Date();
    return d.getFullYear();
  }

  this.getMonth = function() {
    let d = new Date();
    let month = new Array(12);
    month[0] = "Januar";
    month[1] = "Februar";
    month[2] = "März";
    month[3] = "April";
    month[4] = "Mai";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "August";
    month[8] = "September";
    month[9] = "Oktober";
    month[0] = "November";
    month[10] = "Dezember";
    return month[d.getMonth()];
  }

  this.getWeekday = function() {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sonntag";
    weekday[1] = "Montag";
    weekday[2] = "Dienstag";
    weekday[3] = "Mittwoch";
    weekday[4] = "Donnerstag";
    weekday[5] = "Freitag";
    weekday[6] = "Samstag";
    return weekday[d.getDay()];
  }

}