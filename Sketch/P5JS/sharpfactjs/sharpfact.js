var currentscene;
let angle;
let slider;
let slider2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  colorMode(HSB, 360, 150, 100, 1);
  slider = createSlider(100, 255, 50);
  slider2 = createSlider(6, 32, 5);
}

function draw() {
  translate(width / 2, height / 2);
  let sat = slider.value();
  angle = slider2.value();

  for (let i = 0; i < angle; i++) {
    rotate(angle);
    strokeWeight(15);
    stroke(mouseX, sat, sat, 0.5);
    line(mouseX, mouseY, pmouseX, pmouseY);

    push();
    scale(1, -1);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
}

// var drawscene1 = function(){
//   currentscene = 1;
//   background(220);

// {
//   fill(20,20);
//   translate(width / 2, height / 2);
// rotate(frameCount * 0.1);
// rect(-26, -26, 52, 52);
// }{
//   translate(20, 20);
//   rotate(frameCount * 0);
//   rect(0,0,52,52);
// }{
//   translate(30,random(0,350));
//   circle(20,20,20);
// }{
//   translate(0-350)/0.360,30;
//   circle(20,20,20);
// }
// }

var drawscene2 = function () {
  currentscene = 2;
  background(200);
  text("Do you ever think what wizzfizz feels like?", 20, 20);
  text("wizz fizz feels like...", 20, 20);
};

var drawscene3 = function () {
  currentscene = 3;
  textSize(28);
  text("thats what wizz fizz feels like", 20, 20);
  text("get wizz fizz from any reptuble groccer...", 20, 20);
};

function keyPressed() {
  if (keyCode === 32) {
    currentscene = 1;
  } else if (keyCode === 32) {
    currentscene = 2;
  } else if (keyCode === 32) {
  }
}
