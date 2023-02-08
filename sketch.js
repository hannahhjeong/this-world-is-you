let myVid;
let r, g, b;

let rValues, gValues, bValues;
let rIndex, gIndex, bIndex;

let setRVal, setGVal, setBVal;
let setRIndex, setGIndex, setBIndex;

let timesX, timesY;

let pixelSize;

let rMouse, gMouse, bMouse;
let rMouseIndex;

let prob;

let randMode, randModeIndex;

let camW = 480;
let camH = 360;

let myFont;

function preload() {
  myFont = loadFont("FT88-Regular.otf");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight-60);


  myVid = createCapture(VIDEO);
  myVid.size(camW, camH);
  myVid.hide();

  //random index
  rIndex = floor(random(2));
  gIndex = floor(random(2));
  bIndex = floor(random(2));

  //random multiply
  timesX = (random(.7, 3));
  timesY = (random(.7, 3));

  //pixel size
  pixelSize = floor(random(2, 20));

  //probability
  prob = random(0, 1);

  //random colorMode
  randMode = [RGB, RGB, RGB, RGB, HSB];
  randModeIndex = floor(random(randMode.length));
  colorMode(randMode[randModeIndex]);
  
  
  //text
  textFont(myFont);
  let p = createP("reload page to regenerate");
  let p2 = createP("ctrl+s to save");

}

function draw() {
  myVid.loadPixels();
  scale(3,  3);
  imageMode(CENTER);
  image(myVid, 0, 0, camW, camH);


  // Iterate through the pixels
  for (let y = 0; y < camH; y++) {
    for (let x = 0; x < camW; x++) {
      let index = (x + y * camW) * 4;

      r = myVid.pixels[index + rIndex];
      g = myVid.pixels[index + gIndex];
      b = myVid.pixels[index + bIndex];

      if (r > pixelSize && g > pixelSize && b > pixelSize) {
        //0-30
        continue;
      }
      if (prob < 0.1) {
        set(x * timesX, y * timesY, color(mouseX, mouseX, mouseY));
      }
      if (prob > 0.1 && prob < 0.2) {
        set(x * timesX, y * timesY, color(mouseX, mouseY, mouseX));
      }
      if (prob > 0.2 && prob < 0.3) {
        set(x * timesX, y * timesY, color(mouseX, mouseY, mouseY));
      }
      if (prob > 0.3 && prob < 0.4) {
        set(x * timesX, y * timesY, color(mouseY, mouseX, mouseY));
      }
      if (prob > 0.4 && prob < 0.5) {
        set(x * timesX, y * timesY, color(mouseY, mouseY, mouseX));
      }
      if (prob > 0.5 && prob < 0.6) {
        set(x * timesX, y * timesY, color(r, mouseY, b));
      }
      if (prob > 0.7 && prob < 0.8) {
        set(x * timesX, y * timesY, color(mouseX, r, g));
      }
      if (prob > 0.8 && prob < 0.9) {
        set(x * timesX, y * timesY, color(mouseX, g, r));
      }
      if (prob > 0.9 && prob < 1) {
        set(x * timesX, y * timesY, color(r, g, mouseY));
      }
    }
  }

  updatePixels();
}
