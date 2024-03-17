async function checkAndUpdate() {
    try {
      setInterval(async function () {
        element = document.querySelector("[class^=\"Time-sc-\"]");
        if (element === undefined || element === null || element === '') {
          await wait(250);
          if (document.querySelector("[class^=\"AnimatedNumberStyled-sc\"]")) {
            money = document.querySelector("[class^=\"AnimatedNumberStyled-sc\"]").textContent;
            newmoney = money.replace(/\s/g, '');
            comp = document.querySelector("[class^=\"TargetProgressSquad-sc\"]").text;
            comp = comp.replace(/,[^]*$/, '');
            comp = comp.replace(/[a-zA-Z, ]/g, '');
            if (comp <= 99) {
              if (newmoney >= 3050) {
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                document.querySelector("a[href=\"/shop/1\"]").click();
                await wait(2500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
                await wait(3500);
                console.log(1);
              } else if (newmoney >= 1050) {
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                document.querySelector("a[href=\"/shop/0\"]").click();
                await wait(2500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
              } else {
                document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
              }
            }
          }
        } else if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]) {
            document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
            await wait(2500);
        } else {
            await wait(250);
        }
      }, 500);
    } catch (error) {}
  }
  function cnu(element) {
    return element === undefined || element === null || element === '';
  }
  function wait(timeout) {
    return new Promise(callback => setTimeout(callback, timeout));
  }
  function alert() {
    console.log("mem");
  }
  checkAndUpdate();
  
