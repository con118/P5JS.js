
//   let mic;
// let fft;

//  function setup(){
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.mousePressed(userStartAudio);
//   textAlign(CENTER);
//   mic = new p5.AudioIn();
//   mic.start();
// }

// function draw(){
//   background(0);
//   fill(255);
//   text('tap to start', width/2, 20);

// //   micLevel = mic.getLevel();
// //   let y = height - micLevel * height;
// //   ellipse(width/2, y, 70, 70);
// //   console.log(micLevel);
// var spectrum = fft.analyze();
// console.log(spectrum)

// function draw() {
//     background(0);
//     var spectrum = fft.analyze();
//     //console.log(spectrum);
//     //stroke(255);
//     noStroke();
//     translate(width / 2, height / 2);
//     //beginShape();
//     for (var i = 0; i < spectrum.length; i++) {
//       var angle = map(i, 0, spectrum.length, 0, 360);
//       var amp = spectrum[i];
//       var r = map(amp, 0, 256, 20, 100);
//       //fill(i, 255, 255);
//       var x = r * cos(angle);
//       var y = r * sin(angle);
//       stroke(i, 255, 255);
//       line(0, 0, x, y);
//       //vertex(x, y);
//       //var y = map(amp, 0, 256, height, 0);
//       //rect(i * w, y, w - 2, height - y);
//     }
//     //endShape();
//   }

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  // second param sets number of bins
  fft = new p5.FFT(0.5, 64);
  fft.setInput(mic);
  
}

function draw() {
  background(255);
  fill(40);
  noStroke();
  let bins = fft.analyze();
  for (let i = 0; i < bins.length; i++) {

    let drawY = map(i, 0, bins.length, 0, height);
    let val = bins[i];
    let rectWidth = map(val, 0, 255, 0, width);
    let rectHeight = height / bins.length;
    rect(0, drawY, rectWidth, rectHeight);
  }
}



