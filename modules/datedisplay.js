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
    // Change to your language
    month[0] = "Januar"; // January
    month[1] = "Februar"; // February
    month[2] = "März"; // March
    month[3] = "April"; // April
    month[4] = "Mai"; // May
    month[5] = "Juni"; // June
    month[6] = "Juli"; // July
    month[7] = "August"; // August
    month[8] = "September"; // September
    month[9] = "Oktober"; // October
    month[0] = "November"; // November
    month[10] = "Dezember"; // December
    return month[d.getMonth()];
  }

  this.getWeekday = function() {
    let d = new Date();
    let weekday = new Array(7);
    // Change to your language
    weekday[0] = "Sonntag"; // Sunday
    weekday[1] = "Montag"; // Monday
    weekday[2] = "Dienstag"; // Tuseday
    weekday[3] = "Mittwoch"; // Wednesday
    weekday[4] = "Donnerstag"; // Thursday
    weekday[5] = "Freitag"; // Friday
    weekday[6] = "Samstag"; // Saturday
    return weekday[d.getDay()];
  }

}