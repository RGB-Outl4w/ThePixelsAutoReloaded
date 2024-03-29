var at = {}

at.drawMode = 6
window.monkeyPatch = at

unixTime = Date.now()

document.querySelectorAll('script').forEach((bq) => bq.remove())
document.getElementById('root').innerHTML = ''

var s = document.createElement('script')
s.type = 'text/javascript'
s.src = 'https://pipyoutube.ru/cats/index-GKUHWpC_.js?1234'
s.type = 'module'

document.head.appendChild(s)

url = "https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/releases/release_TPAR_v4.1.1.js" + "?" + unixTime

setTimeout(function () {
    fetch(url).then(response => response.text()).then(script => eval(script));
}, 10000)
