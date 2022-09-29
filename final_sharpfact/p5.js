
let mic;

// let hsb = map(0,0,360,20,20);
let colour = 360 < 0


function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);

mic = new p5.AudioIn();
mic.start();

fft = new p5.FFT();

angleMode(DEGREES);

  background(180);
  colorMode(HSB, 360, 150, 75, 0.001);
  slider = createSlider(90, 360, 50);
  slider2 = createSlider(6, 32, 5);
  slider3 = createSlider(6, 360, 5);
  slider4 = createSlider(6, 200,5);
  frameRate(1000);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);
}

function draw() {
  

  
 // translate(width / 2, height / 2);
  let sat = slider.value();
  angle = slider2.value();
  let hue = slider3.value();
  let stro = slider4.value();

  for (let i = 0; i < angle; i++) {
    rotate(angle);

    let spectrum = fft. analyze();
    for (let i = 0; i< spectrum.length; i++){
    strokeWeight(1);
    stroke(hue, sat, sat, 0.5);
    erase();
    rotateX(millis() / 1000);
    rotateY (millis() / 1000);

    fill(0);
    ellipse(mouseX, mouseY, 100, 100); 
    scale(1,0.2);
    ellipse(mouseX, mouseY, 100+30, 100+30);// used pmousex and y (wxh)

    push();
    scale(1, -1);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
    
    // push();
    // sphere(40, mouseY, mouseX);
    // pop();
  
  
}}]

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function texture() {
//   translate(width / 2, height / 2);
//   let sat = slider.value();
//   angle = slider2.value();

//   for (let i = 0; i < angle; i++) {
//     rotate(angle);
//     strokeWeight(10);
//     stroke(mouseX, sat, sat, 0.5);
//     erase();
//     rotateX(millis() / 1000);
//     rotateY (millis() / 1000);

//     noFill();
//     sphere(40,mouseX, mouseY);

//     push();
//     scale(1, -1);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     pop();
  
// }}
