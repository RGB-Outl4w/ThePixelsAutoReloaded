var unixTime = Date.now();

document.querySelectorAll('script').forEach((func) => func.remove())
document.getElementById('root').innerHTML = ''

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://pipyoutube.ru/cats/index-GKUHWpC_.js"+"?"+unixTime;
s.type = "module";
  
document.head.appendChild(s);
