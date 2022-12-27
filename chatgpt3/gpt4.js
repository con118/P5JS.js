let song; // variable to hold the audio file
let fft; // variable to hold the FFT object
let bins = 512; // number of frequency bins to analyze

let output; // variable to hold the output audio file

let scene; // variable to hold the current scene

let palette; // array to hold the color palette

function preload() {
  // load the audio file
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(400, 400); // create a canvas to draw on

  // create the FFT object and set the number of bins
  fft = new p5.FFT(0.8, bins);

  // start playing the audio file
  song.play();

  // create the output audio file and set the sample rate
  output = new p5.SoundFile();
  output.sampleRate(44100);

  // set the initial scene
  scene = 1;

  // create the color palette
  palette = [    color(255, 0, 0),    color(0, 255, 0),    color(0, 0, 255),    color(255, 255, 0),    color(0, 255, 255),    color(255, 0, 255)  ];
}

function draw() {
  // clear the canvas
  background(0);

  // get the frequency spectrum of the audio file
  let spectrum = fft.analyze();

  // draw a random visualization for scene 1
  if (scene == 1) {
    for (let i = 0; i < bins; i++) {
      let val = spectrum[i];
      let col = palette[i % palette.length];
      fill(col);
      noStroke();
      ellipse(random(width), random(height), val / 10, val / 10);
    }
  }

  // draw a random visualization for scene 2
  if (scene == 2) {
    for
  (let i = 0; i < bins; i++) {
    let val = spectrum[i];
    let col = palette[i % palette.length];
    fill(col);
    noStroke();
    rect(random(width), random(height), val / 10, val / 10);
  }
}

// draw a random visualization for scene 3
if (scene == 3) {
  for (let i = 0; i < bins; i++) {
    let val = spectrum[i];
    let col = palette[i % palette.length];
    fill(col);
    noStroke();
    triangle(random(width), random(height), val / 10, val / 10);
  }
}

// add the current canvas image to the output audio file
output.addFrame(canvas);
}

function keyPressed() {
  // when the space bar is pressed, stop the audio file and save the output
  if (key == ' ') {
    song.stop();
    output.save('visualization.wav');
  }

  // when the left arrow key is pressed, go to the previous scene
  if (keyCode == LEFT_ARROW) {
    scene--;
    if (scene < 1) scene = 3;
  }

  // when the right arrow key is pressed, go to the next scene
  if (keyCode == RIGHT_ARROW) {
    scene++;
    if (scene > 3) scene = 1;
  }
}
