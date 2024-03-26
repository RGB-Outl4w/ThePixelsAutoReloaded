/*
 Author: MD
 Formatter: RGB_Outlaw
 Telegram channels: t.me/mdsays | t.me/rgbtrap
*/

var h = {
  drawMode: 6
};

window.monkeyPatch = h;


document.querySelector("script").remove();
document.getElementById("root").innerHTML = "";

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://pipyoutube.ru/cats/index-GKUHWpC_.js";
// s.src = "https://cdn.jsdelivr.net/gh/RGB-Outl4w/ThePixelsAutoReloaded/assets/index-GKUHWpC_.js"; 
s.type = "module";

document.head.appendChild(s);

setTimeout(function () {
  fetch("https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/releases/release_TPAR_v4.0.js").then(response => response.text()).then(script => eval(script));
}, 10000);
