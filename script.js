const textDisplay2 = document.getElementById('typewriter')
const frases = ['Hey! Im Duffes.']

var i = 0
var j = 0 
var frases2 = []
var final = false
var fim = false

function loop () {
  fim = false
  textDisplay2.innerHTML = frases2.join('')

  if (i < frases.length) {

    if (!final && j <= frases[i].length) {
      frases2.push(frases[i][j])
      j++
      textDisplay2.innerHTML = frases2.join('')
    }

    if(final && j <= frases[i].length) {
      frases2.pop(frases[i][j])
      j--
      textDisplay2.innerHTML = frases2.join('')
    }

    if (j == frases[i].length) {
      fim = true
      final = true
    }

    if (final && j === 0) {
      frases2 = []
      final = false
      i++
      if (i === frases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = fim ? 2000 : final ? spedUp : normalSpeed
  setTimeout(loop, time)
}

// loop()

var playBtn2 = document.getElementById('play2'),
  heartbeat2 = document.getElementById('heartbeat2')

playBtn2.addEventListener('mouseover', function() {
  heartbeat2.play(); 

}, false);

playBtn2.addEventListener('mouseleave', function() {
  heartbeat2.pause();
  heartbeat2.currentTime = 0;

}, false);


var playBtn = document.getElementById('play'),
  heartbeat = document.getElementById('heartbeat');

playBtn.addEventListener('mouseover', function() {
  heartbeat.play(); 

}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;

}, false);





