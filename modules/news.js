function News() {

  // this.path = "http://www.wormser-zeitung.de/lokales/worms/nachrichten-worms/index.rss";
  this.path = "http://www.wormser-zeitung.de/lokales/worms/index.rss";
  this.news;
  this.setup = false;
  this.start = 0;
  this.end = 5;
  this.titles = [];

  this.display = function(x, y) {
    if (frameCount > 10 && this.setup) {
      fill(255);
      textSize(40);
      textAlign(CENTER);
      let draw = "";
      for (let i = this.start; i < this.titles.length && i < this.end; i++) {
        draw = draw + this.titles[i] + "\n";
      }
      text(draw, x, y);
      textAlign(LEFT);
      if (frameCount % 300 == 0) {
        this.start++;
        this.end++;
        if (this.end > this.titles.length) {
          this.start = 0;
          this.end = 5;
        }
      }
    }
    if (frameCount == 5) this.setup();
  }

  this.setup = function() {
    if (this.news) {
      let list = this.news.children[0].children;
      let items = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].name == "item") {
          items.push(list[i]);
        }
      }
      for (let i = 0; i < items.length; i++) {
        for (let k = 0; k < items[i].children.length; k++) {
          if (items[i].children[k].name == "title") {
            if (items[i].children[k].content.length < 100) {
              this.titles.push(items[i].children[k].content);
            }
          }
        }
      }
    }
  }

  this.load = function() {
    if (!this.news) {
      this.news = loadXML(this.path);
    }
  }

  this.gotData = function(data) {
    this.news = data;
  }

}