var song;
var = slider

funtion preload() {
    song = loadSound(songgoeshere);

}

// to load this sound you need to call either a preload or a call back function

function setup() {
    createCanvas(200,200) ;
    song = loadsound("insertsonghere", loaded);
    song.play();
    slider = createSlider([min],[max[value([value])]])
    song.setVolume(volume, [rampTime], [timeFromNow]); // number between zero and one
}

function loaded (){
    song.play();
}

function draw(){
    background(, [a]);
}