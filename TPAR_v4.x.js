/*
 Author: MD
 Formatter: RGB_Outlaw
 Telegram channels: t.me/mdsays | t.me/rgbtrap
*/

async function checkAndUpdate() {
  let element;
  let money;
  let newmoney;
  let comp;
  let searchText;
  let textOnPage;

  let attempt = 0;
  let lastShopVisit = 0;

  setInterval(async function () {
    element = document.querySelector("[class^='Time-sc-']");

    if (attempt === 0) {
      // Initial check
      if (!element) {
        if (lastShopVisit <= Date.now()) {
          await wait(250);

          if (document.querySelector("[class^='AnimatedNumberStyled-sc']")) {
            // Money element found
            money = document.querySelector("[class^='AnimatedNumberStyled-sc']").textContent;
            newmoney = money.replace(/\s/g, ''); // Remove spaces

            comp = document.querySelector("[class^='TargetProgressSquad-sc']").textContent;
            comp = comp.replace(/,[^]*$/, ''); // Remove trailing comma and decimals
            comp = comp.replace(/[a-zA-Z, ]/g, ''); // Remove letters and spaces

            if (comp <= 99) {
              // Squad is less than 100%
              if (newmoney >= 3050) {
                // Buy shop item 1
                document.querySelector("a[href='/shop']").click();
                await wait(2500);
                document.querySelector("a[href='/shop/1']").click();
                await wait(3500);
                document.querySelector("[class^='BlackButtonStyled-sc']").click();
                await wait(2500);
                attempt = 1;
                lastShopVisit = Date.now() + 200; // Update last shop visit time
               await wait(1500);
              } else if (newmoney >= 1050) {
                // Buy shop item 0
                lastShopVisit = Date.now() + 180;
                document.querySelector("a[href='/shop']").click();
                await wait(2500);
                document.querySelector("a[href='/shop/0']").click();
                await wait(2500);
                document.querySelector("[class^='BlackButtonStyled-sc']").click();
                attempt = 1;
                document.querySelector("[class^='BlackButtonStyled-sc']")[1].click();
                lastShopVisit = Date.now() + 200; // Update last shop visit time
                await wait(2500);
              } else {
                // Not enough money, click the other button
                document.querySelectorAll("[class^='BlackButtonStyled-sc']")[1].click();
              }
            }
          }
        }
      } else if (document.querySelectorAll("[class^='BlackButtonStyled-sc']")[1]) {
        // Click the second button and check for "MD Says"
        document.querySelectorAll("[class^='BlackButtonStyled-sc']")[1].click();
        searchText = "MD Says"; // Shoutout to the script author!
        textOnPage = document.body.innerText;
        if (!textOnPage.includes(searchText)) {
          await wait(250);
        }
      } else {
        await wait(250);
      }
    } else {
      // Attempt is 1, check for button and click
      if (document.querySelectorAll("[class^='BlackButtonStyled-sc']")[1]) {
        document.querySelectorAll("[class^='BlackButtonStyled-sc']")[1].click();
        attempt = 0;
        await wait(1500);
        searchText = "MD Says"; // Another shoutout to the script author!
        textOnPage = document.body.innerText;
        if (!textOnPage.includes(searchText)) {
          await wait(250);
        }
      } else {
        await wait(250);
      }
    }
  }, 500);
}

function cnu(value) {
  return value === undefined || value === null || value === '';
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Initial setup

checkAndUpdate();
