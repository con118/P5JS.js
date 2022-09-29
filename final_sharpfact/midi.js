
    function setup() {
        createCanvas(400, 400);
      }
      
      function draw() {
        background(220);
      }
      
      if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(success, failure);
      }
      
      function success(midiAccess) {
        console.log(MIDIAccess);
      }
      
      function failure() { 
      console.log('Could not connect to MIDI')
      }