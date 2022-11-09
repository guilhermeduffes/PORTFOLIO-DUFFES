const textDisplay2 = document.getElementById('typewriter')
const frases = ['Hey! Im Duffes.']

var liNavBar = document.querySelectorAll('.navBar')
var hoverSound = document.getElementById('hoverNav')
var playBtn = document.getElementById('play')
var heartbeat = document.getElementById('heartbeat')

var i = 0
var j = 0
var frases2 = []
var final = false
var fim = false

AOS.init();

function loop() {
  fim = false
  textDisplay2.innerHTML = frases2.join('')

  if (i < frases.length) {

    if (!final && j <= frases[i].length) {
      frases2.push(frases[i][j])
      j++
      textDisplay2.innerHTML = frases2.join('')
    }

    if (final && j <= frases[i].length) {
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
  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 200
  const time = fim ? 2000 : final ? spedUp : normalSpeed
  setTimeout(loop, time)
}

// loop()



liNavBar.forEach(li => {
  li.addEventListener('mouseover', event => {
    hoverSound.play();

  }, false);
});

liNavBar.forEach(li => {
  li.addEventListener('mouseleave', event => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }, false);
});



playBtn.addEventListener('mouseover', function () {
  heartbeat.play();

}, false);

playBtn.addEventListener('mouseleave', function () {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);