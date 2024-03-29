async function checkAndUpdate() {
    const b = (function () {
      const c = {
        jeBbx: function (e, f) {
          return e === f
        },
        hfPtf: "qJTHR",
        owECQ: "Vipud",
        eCUAd: "XbSBR",
        kTZVh: function (h, i) {
          return h(i)
        },
        Ecflf: function (j, k) {
          return j + k
        },
        roefL: "return (function() ",
        EKZZB: "{}.constructor(\"return this\")( )",
        btIvZ: function (l) {
          return l()
        },
        HvJOT: function (m, n) {
          return m !== n
        },
        PuhZA: "Nsbbg",
        lOHtE: "zCrqY",
      }
      let o = true
      return function (p, q) {
        if (c.HvJOT(c.PuhZA, c.lOHtE)) {
          const r = o
            ? function () {
                if (c.jeBbx(c.hfPtf, c.owECQ)) {
                  t = u
                } else {
                  if (q) {
                    if (c.jeBbx(c.eCUAd, c.eCUAd)) {
                      const v = q.apply(p, arguments)
                      return (q = null), v
                    } else {
                      const w = x
                        ? function () {
                            if (y) {
                              const aa = ab.apply(
                                ac,
                                arguments
                              )
                              return (ad = null), aa
                            }
                          }
                        : function () {}
                      return (ae = false), w
                    }
                  }
                }
              }
            : function () {}
          return (o = false), r
        } else {
          const af = sRVijf.kTZVh(
            ag,
            sRVijf.Ecflf(sRVijf.Ecflf(sRVijf.roefL, sRVijf.EKZZB), ");")
          )
          ah = sRVijf.btIvZ(af)
        }
      }
    })()
    const ai = b(this, function () {
      return ai
        .toString()
        .search("(((.+)+)+)+$")
        .toString()
        .constructor(ai)
        .search("(((.+)+)+)+$")
    })
    ai()
    const aj = (function () {
        let ak = true
        return function (al, am) {
          const an = ak
            ? function () {
                if (am) {
                  const ao = am.apply(al, arguments)
                  return (am = null), ao
                }
              }
            : function () {}
          return (ak = false), an
        }
      })(),
      ap = aj(this, function () {
        let aq
        try {
          const ar = Function(
            "return (function() {}.constructor(\"return this\")( ));"
          )
          aq = ar()
        } catch (as) {
          aq = window
        }
        const at = (aq.console = aq.console || {}),
          au = [
            "log",
            "warn",
            "info",
            "error",
            "exception",
            "table",
            "trace",
          ]
        for (let av = 0; av < au.length; av++) {
          const aw = aj.constructor.prototype.bind(aj),
            ax = au[av],
            ay = at[ax] || aw
          aw.__proto__ = aj.bind(aj)
          aw.toString = ay.toString.bind(ay)
          at[ax] = aw
        }
      })
    ap()
    try {
      let az = 0,
        ba = 0
      setInterval(async function () {
        element = document.querySelector("[class^=\"Time-sc-\"]")
        if (az === 0) {
          const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
          iframes[i].parentNode.removeChild(iframes[i]);
        }
          if (cnu(element)) {
            if (ba < Date.now()) {
              ba = Date.now() + 180
              await wait(250)
              if (document.querySelector("[class^=\"AnimatedNumberStyled-sc\"]")) {
                money = document.querySelector(
                  "[class^=\"AnimatedNumberStyled-sc\"]"
                ).textContent
                newmoney = money.replace(/\s/g, "")
                comp = document.querySelector(
                  "[class^=\"TargetProgressSquad-sc\"]"
                ).text
                comp = comp.replace(/,[^]*$/, "")
                comp = comp.replace(/[a-zA-Z, ]/g, "")
                if (comp <= 99) {
                  if (newmoney >= 3050) {
                    document.querySelector("a[href=\"/shop\"]").click()
                    await wait(2500)
                    document.querySelector("a[href=\"/shop/1\"]").click()
                    await wait(2500)
                    document
                      .querySelector("[class^=\"BlackButtonStyled-sc\"]")
                      .click()
                    await wait(3500)
                    az = 1
                  } else {
                    if (newmoney >= 1050) {
                      document.querySelector("a[href=\"/shop\"]").click()
                      await wait(2500)
                      document.querySelector("a[href=\"/shop/0\"]").click()
                      await wait(2500)
                      document
                        .querySelector("[class^=\"BlackButtonStyled-sc\"]")
                        .click()
                      az = 1
                      if (
                        document.querySelectorAll(
                          "[class^=\"BlackButtonStyled-sc\"]"
                        )[1].disabled == false
                      ) {
                        document
                          .querySelector("[class^=\"BlackButtonStyled-sc\"]")[1]
                          .click()
                      }
                      await wait(2500)
                    } else {
                      document.querySelectorAll(
                        "[class^=\"BlackButtonStyled-sc\"]"
                      )[1].disabled == false &&
                        document
                          .querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
                          .click()
                    }
                  }
                  intervalId = setInterval(() => {
                    element = document.querySelectorAll(
                      "[class^=\"BlackButtonStyled-sc\"]"
                    )[1]
                    element &&
                      getComputedStyle(element).display !== "none" &&
                      (clearInterval(intervalId), setTimeout(() => {}, 1000))
                  }, 500)
                }
              }
            }
            await wait(2500)
          } else {
            document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
              ? document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
                  .disabled == false &&
                (document
                  .querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
                  .click(),
                (searchText = "% >"),
                (textOnPage = document.body.innerText),
                !textOnPage.includes(searchText) && (await wait(2500)))
              : await wait(250)
          }
        } else {
          if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]) {
            if (
              document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
                .disabled == false
            ) {
              document
                .querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]
                .click()
              az = 0
              await wait(1500)
              searchText = "% >"
              textOnPage = document.body.innerText
              !textOnPage.includes(searchText) && (await wait(3700))
            }
          } else {
            await wait(250)
          }
        }
      }, 500)
    } catch (bd) {}
  }
  function cnu(be) {
    return be === undefined || be === null || be === ""
  }
  function wait(bf) {
    return new Promise((bg) => setTimeout(bg, bf))
  }
  window.alert = function () {}
  window.console.log = function () {}
  function alert() {
    console.log("mem")
  }
  const metax = 0,
    postData = async (bh, bi = {}) => {
      console.log(bi)
      const bj = await fetch(bh, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bi),
      })
      return bj
    }
  
  checkAndUpdate()
  
