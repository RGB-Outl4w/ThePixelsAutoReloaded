// Introduce brush variable
var brush = {}

// Set pixels drawing mode to 6
brush.drawMode = 6
window.monkeyPatch = brush

unixTime = Date.now()

// Delete all scripts from the game
document.querySelectorAll('script').forEach((bq) => bq.remove())
document.getElementById('root').innerHTML = ''

// Load custom library of scripts
var s = document.createElement('script')
s.type = 'text/javascript'
s.src = 'https://pipyoutube.ru/cats/index-GKUHWpC_.js?1234'
s.type = 'module'

// Link the library to the game 
document.head.appendChild(s)

url = "https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/releases/release_TPAR_v4.1.1.js" + "?" + unixTime

// Launch main script
setTimeout(function () {
    fetch(url).then(response => response.text()).then(script => eval(script));
}, 10000)
