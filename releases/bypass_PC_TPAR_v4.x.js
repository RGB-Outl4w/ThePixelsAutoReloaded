/*

This is a standalone script that allows you to bypass the PC block in The Pixels game and removes all the ad pop-ups. The following code can be executed without any additional scripts, it only allows access to the main game without providing any additional functionality except for blocking annoying advertisement.

*/

var unixTime = Date.now();

document.querySelectorAll('script').forEach((func) => func.remove())
document.getElementById('root').innerHTML = ''

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://pipyoutube.ru/cats/index-GKUHWpC_.js"+"?"+unixTime;
s.type = "module";
  
document.head.appendChild(s);
