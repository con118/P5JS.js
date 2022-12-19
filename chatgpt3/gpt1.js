let song; // variable to hold the audio file
let fft; // variable to hold the FFT object
let bins = 512; // number of frequency bins to analyze

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
}

function draw() {
  background(0); // clear the canvas

  // get the frequency spectrum of the audio file
  let spectrum = fft.analyze();

  // draw a bar chart of the spectrum data
  for (let i = 0; i < bins; i++) {
    let x = map(i, 0, bins, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height - h, width / bins, h);
  }
}
