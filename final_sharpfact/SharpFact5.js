let fft, mic, songfile, angle;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 150, 75, 0.001);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  // stage = "circles"; 
  background(0);
}

function draw() {
  let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;

  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  
   
print("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);

    rotate(200);
    strokeWeight(1);
    stroke(bass+10, 20, 200, 0.5);
    erase();
    rotateX(millis() / 1000);
    rotateY (millis() / 1000);

    fill(bass,mid,treble);
    ellipse(mouseX+20, mouseY, 200, 200); 
    scale(1,0.2);
    ellipse(mouseX, mouseY, 100+30, 100+30);// used pmousex and y (wxh)

    push();
    scale(1, -1);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
    
    // push();
    // sphere(40, mouseY, mouseX);
    // pop();


}

 function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

  