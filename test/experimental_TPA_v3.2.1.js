async function checkAndUpdate() {

    let didClickButton1 = false;
    let didClickButton0 = false;

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
                await wait(2500);
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                didClickButton1 = true;
                document.querySelector("a[href=\"/shop/1\"]").click();
                await wait(2500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
                await wait(3500);
                //document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]").click();
            } else if (newmoney >= 1050) {
                await wait(2500);
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                didClickButton0 = true;
                document.querySelector("a[href=\"/shop/0\"]").click();
                await wait(2500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
                await wait(3500);
                //document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]").click();
            } else {
                document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
              }
            }
          }
        } else if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1]) {
            await wait(250);
            document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1].click();
            await wait(250);
        } else {
            await wait(250);
        }
      }, 500);
    } catch (error) {}
  }
  function cnu(element) {
    return element === undefined || element === null || element === '';
  }
  const wait = async (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
  function alert() {
    console.log("mem");
  }
  checkAndUpdate();
  
