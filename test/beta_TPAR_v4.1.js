(function(j, k) {
    const l = j();
    while (true) {
      try {
        const m = parseInt(h(763, "uxy2")) / 1 + -parseInt(h(486, "8kR%")) / 2 * (-parseInt(h(699, "i$Av")) / 3) + -parseInt(h(749, "d1mP")) / 4 + -parseInt(h(748, "%Ih2")) / 5 * (parseInt(h(511, "7DBC")) / 6) + -parseInt(h(456, "kEV6")) / 7 * (-parseInt(h(675, "PDVq")) / 8) + parseInt(h(761, "mPHs")) / 9 * (-parseInt(h(661, "HwzV")) / 10) + parseInt(h(632, "OM(9")) / 11;
        if (m === k) {
          break;
        } else {
          l.push(l.shift());
        }
      } catch (n) {
        l.push(l.shift());
      }
    }
  })(_o, 657189);
  async function checkAndUpdate() {
    const p = function() {
      let q = true;
      return function(r, s) {
        const t = q ? function() {
          if (s) {
            const u = s.apply(r, arguments);
            s = null;
            return u;
          }
        } : function() {};
        q = false;
        return t;
      };
    }();
    const v = p(this, function() {
      return v.toString().search("(((.+)+)+)+$").toString().constructor(v).search("(((.+)+)+)+$");
    });
    v();
    const x = function() {
      let y = true;
      return function(z, aa) {
        const ab = y ? function() {
          if (aa) {
            const ac = aa.apply(z, arguments);
            aa = null;
            return ac;
          }
        } : function() {};
        y = false;
        return ab;
      };
    }();
    const ad = x(this, function() {
      let ae;
      try {
        const af = Function("return (function() {}.constructor(\"return this\")( ));");
        ae = af();
      } catch (ag) {
        ae = window;
      }
      const ah = ae.console = ae.console || {};
      const ai = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let aj = 0; aj < ai.length; aj++) {
        const ak = x.constructor.prototype.bind(x);
        const al = ai[aj];
        const am = ah[al] || ak;
        ak.__proto__ = x.bind(x);
        ak.toString = am.toString.bind(am);
        ah[al] = ak;
      }
    });
    ad();
    try {
      let an = 0;
      setInterval(async function() {
        element = document.querySelector("[class^=\"Time-sc-\"]");
        if (0 == an) {
          var ao = document.getElementsByTagName("iframe");
          for (var ap = 0; ap < ao.length; ap++) {
            ao[ap].parentNode.removeChild(ao[ap]);
          }
          if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]) {
            if (0 == document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].disabled) {
              document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
              searchText = "% >";
              textOnPage = document.body.innerText;
              if (!textOnPage.includes(searchText)) {
                await wait(2500);
              }
            }
          } else {
            await wait(250);
          }
        } else if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]) {
          if (0 == document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].disabled) {
            document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
            an = 0;
            await wait(1500);
            searchText = "% >";
            textOnPage = document.body.innerText;
            if (!textOnPage.includes(searchText)) {
              await wait(3700);
            }
          }
        } else {
          await wait(250);
        }
      }, 500);
    } catch (aq) {}
  }
  
  function h(ar) {
    const as = o();
    h = function(at, au) {
      at = at - 403;
      let aw = as[at];
      if (h.YHLhzA === undefined) {
        var ax = function(ay) {
          let az = "";
          let ba = "";
          let bb = az + ax;
          let bc = 0;
          let bd;
          let be;
          for (let bf = 0; be = ay.charAt(bf++); ~be && (bd = bc % 4 ? bd * 64 + be : be, bc++ % 4) ? az += bb.charCodeAt(bf + 10) - 10 !== 0 ? String.fromCharCode(255 & bd >> (-2 * bc & 6)) : bc : 0) {
            be = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(be);
          }
          let bg = 0;
          for (let bh = az.length; bg < bh; bg++) {
            ba += "%" + ("00" + az.charCodeAt(bg).toString(16)).slice(-2);
          }
          return decodeURIComponent(ba);
        };
        const bi = function(bj, bk) {
          let bl = [];
          let bm = 0;
          let bn;
          let bo = "";
          bj = ax(bj);
          let bp;
          for (bp = 0; bp < 256; bp++) {
            bl[bp] = bp;
          }
          for (bp = 0; bp < 256; bp++) {
            bm = (bm + bl[bp] + bk.charCodeAt(bp % bk.length)) % 256;
            bn = bl[bp];
            bl[bp] = bl[bm];
            bl[bm] = bn;
          }
          bp = 0;
          bm = 0;
          for (let bq = 0; bq < bj.length; bq++) {
            bp = (bp + 1) % 256;
            bm = (bm + bl[bp]) % 256;
            bn = bl[bp];
            bl[bp] = bl[bm];
            bl[bm] = bn;
            bo += String.fromCharCode(bj.charCodeAt(bq) ^ bl[(bl[bp] + bl[bm]) % 256]);
          }
          return bo;
        };
        h.kVdRJI = bi;
        h.YHLhzA = true;
      }
      const br = as[0];
      const bs = at + br;
      const bt = arguments[bs];
      if (!bt) {
        if (h.HtLqgj === undefined) {
          const bu = function(bv) {
            this.Wnwcij = bv;
            this.qIjOOC = [1, 0, 0];
            this.yLjgIj = function() {
              return "newState";
            };
            this.XwdOUQ = "\\w+ *\\(\\) *{\\w+ *";
            this.NoeEGG = "['|\"].+['|\"];? *}";
          };
          bu.prototype.MnKJKc = function() {
            const bw = new RegExp(this.XwdOUQ + this.NoeEGG);
            const bx = bw.test(this.yLjgIj.toString()) ? --this.qIjOOC[1] : --this.qIjOOC[0];
            return this.qAUGpM(bx);
          };
          bu.prototype.qAUGpM = function(by) {
            if (!Boolean(~by)) {
              return by;
            }
            return this.cADSxf(this.Wnwcij);
          };
          bu.prototype.cADSxf = function(bz) {
            let ca = 0;
            for (let cb = this.qIjOOC.length; ca < cb; ca++) {
              this.qIjOOC.push(Math.round(Math.random()));
              cb = this.qIjOOC.length;
            }
            return bz(this.qIjOOC[0]);
          };
          new bu(h).MnKJKc();
          h.HtLqgj = true;
        }
        aw = h.kVdRJI(aw, au);
        arguments[bs] = aw;
      } else {
        aw = bt;
      }
      return aw;
    };
    return h(arguments, ar);
  }
  
  function cnu(cc) {
    return null == cc || "" === cc;
  }
  
  function wait(cj) {
    return new Promise(ck => setTimeout(ck, cj));
  }
  
  function alert() {
    console.log("mem");
  }
  window.alert = function() {};
  window.console.log = function() {};
  const metax = 0;

  checkAndUpdate();
