/* Introduce brush variable
var brush = { drawMode: 6 }

// Set pixels drawing mode to 6
var window.monkeyPatch = brush
*/

var unixTime = Date.now()

// Delete all scripts from the game
document.querySelectorAll('script').forEach((bq) => bq.remove())
document.getElementById('root').innerHTML = ''

// Load custom library of scripts
var s = document.createElement('script')
s.type = 'text/javascript'
s.src = 'https://pipyoutube.ru/cats/index-GKUHWpC_.js' + '?' + unixTime
// s.src = "https://cdn.jsdelivr.net/gh/RGB-Outl4w/ThePixelsAutoReloaded/assets/index-GKUHWpC_.js" + '?' + unixTime;
s.type = 'module'

// Link the library to the game 
document.head.appendChild(s)

// Check for game load every second
var isGameLoaded = setInterval(function () {
  if (document.querySelector('canvas')) {
    // Fetch and execute game script after delay
    var url = "https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/releases/release_TPAR_v4.1.1.js" + "?" + unixTime
    setTimeout(function () {
      console.log('Fetching main script from ', url)
      fetch(url)
        .then(response => response.text())
        .then(text => eval(text));
    }, 1252);
    clearInterval(isGameLoaded);
  }
}, 1000);
