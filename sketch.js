let main = "main";

let clock;
let datedisplay;
let wet;
let zeitung;
let forecast;
let shares;

function preload() {
  loadAll();
}

function setup() {
  let p = createP(null);
  p.parent(main);

  try {
    clock = new Clock();
    datedisplay = new DateDisplay();
    wet.load();
    wet.resize(100, 100);
    zeitung.load();
    forecast.load();
    shares.setup();
  } catch (err) {
    console.log(err);
  }

  // let cnv = createCanvas(400 * 3, 200 * 3);
  let cnv = createCanvas(1920, 1080);
  cnv.position(0, 0);
  cnv.parent(main);
}

function mousePressed() {
  console.log(mouseX, mouseY);
  // shares.debug();

}

// 1200 x 600

function draw() {
  background(0);
  try {
    wet.display(1750, 100);
    forecast.display(1600, 270);
    zeitung.display(960, 800);
    clock.display(100, 200);
    datedisplay.display(50, 75);
    // shares.display(300, 170);
  } catch (err) {
    // location.reload();
    console.error(err);
  }

  textSize(20);
  fill(255);
  text(floor(frameRate()), width - 100, height - 50);
  text(frameCount, width - 100, height - 25);
}

function loadAll() {
  wet = new Weather();
  loadJSON(wet.path, wet.gotData);
  zeitung = new News();
  loadXML(zeitung.path, zeitung.gotData);
  forecast = new Forecast();
  loadJSON(forecast.path, forecast.gotData);
  shares = new Finances();
  // loadTable(shares.path, "csv", shares.gotData, (x) => console.log(x));

  console.log("SETUP");
}

function degToCompass(num) {
  let val = floor((num / 22.5) + .5);
  let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}