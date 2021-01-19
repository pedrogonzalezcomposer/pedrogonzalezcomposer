var loop = new Tone.Loop(playTone, '4n').start(0);
Tone.Transport.bpm.value = 120;
Tone.Transport.start();

var sampler = new Tone.Sampler({
    
	"F4" : "ah_F4.wav",
    "G4" : "Ah_G4.wav",
    "A4" : "Ah_A4.wav",
    "C5" : "Ah_C5.wav",
    "D5" : "Ah_D5.wav",
    "F5" : "Ah_F5.wav",
  
// 	74 : "ah_F4.wav",
//     76 : "Ah_G4.wav",
//     78 : "Ah_A4.wav",
//     81 : "Ah_C5.wav",
//     83 : "Ah_D5.wav",
//     86 : "Ah_F5.wav",
	
}).toMaster();

let prevMouseY;

function setup() {
  createCanvas(400,600);
   prevMouseY=mouseY;
}

// function draw() {
//   background(220);
// }
  
function draw() {
if  (mouseY!=prevMouseY) {
  playTone();
}
  
prevMouseY=mouseY;
  
}

function playTone() {
// let noteMapped=map(openingSize,0.,20.,74,86);
let noteMapped=map(mouseY,height,0,74,86);
let midiNote=round(noteMapped); 
let noteObject = Tone.Frequency(midiNote, "midi");
sampler.triggerAttackRelease(noteObject, 0.2);
console.log(midiNote);
}

function keyPressed() {
  
if (key=='d' || key=='D' ) {
let noteObject = Tone.Frequency(83, "midi");
sampler.triggerAttackRelease(noteObject, 100);  
}
  
 if (key=='b' || key=='B' ) {
   let noteObject = Tone.Frequency(73, "midi");
sampler.triggerAttackRelease(noteObject, 100) ; 
}
   
  
}