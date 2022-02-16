// let song;

// function setup() {
//   song = loadSound('spacebar.wav');
  
// }

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.stop();
//   } else {
//     song.play();
//   }
// }


var song;
var button;
var jumpButton;
let canvas;

function preload(){
    song = loadSound('http://sndup.net/nsvm', loaded);
}


function setup() {

    select('#playbutton').mousePressed(togglePlaying);
    let elt = document.getElementById('radio');
    canvas.parent(elt);
}

function togglePlaying() {
    select('#playbutton').hide();
    if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      select('#playbutton').html('sound:on');
    } else {
      song.stop();
      select('#playbutton').html('sound:off');
    }
  }
  

function loaded() {
    console.log('loaded');
  }