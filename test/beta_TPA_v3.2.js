
// Author: MD
// Formatter: RGB_Outlaw
// Telegram channels: t.me/mdsays | t.me/rgbtrap

async function checkAndUpdate() {
    const elementSelectors = {
        blackButton: "[class^=\"BlackButtonStyled-sc\"]", 
        timeElement: "[class^=\"Time-sc-\"]", 
        animatedNumber: "[class^=\"AnimatedNumberStyled-sc\"]", 
        targetProgress: "[class^=\"TargetProgressSquad-sc\"]", 
        shopButton1: "a[href=\"/shop/1\"]", 
        shopButton: "a[href=\"/shop\"]", 
        shopButton0: "a[href=\"/shop/0\"]", 
    };

    const log = function(message) {
        console.log(message);
    };

    const wait = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };

    let didClickButton1 = false;
    let didClickButton0 = false;

    setInterval(async function() {
        const timeElement = document.querySelector(elementSelectors.timeElement);
        if (!timeElement) {
            await wait(250);
            return;
        }

        const animatedNumber = document.querySelector(elementSelectors.animatedNumber);
        const money = animatedNumber ? parseFloat(animatedNumber.textContent.replace(/\s/g, "")) : 0;
        const targetProgress = document.querySelector(elementSelectors.targetProgress);
        const progress = targetProgress ? parseInt(targetProgress.textContent.replace(/[^0-9]/g, "")) : 0;

        if (progress <= 99) {
            if (money >= 3050) {
                if (1 === 2) {
                    log("MD Says... RGB_Outlaw was here!");
                } else {
                    await wait(2500);
                    didClickButton1 = true;
                    document.querySelector(elementSelectors.shopButton1).click();
                    await wait(3500);
                    document.querySelector(elementSelectors.blackButton).click();
                }
            } else if (money >= 1050) {
                await wait(2500);
                didClickButton0 = true;
                document.querySelector(elementSelectors.shopButton0).click();
                await wait(3500);
                document.querySelector(elementSelectors.blackButton).click();
            } else if (document.querySelectorAll(elementSelectors.blackButton)) {
                document.querySelectorAll(elementSelectors.blackButton).click();
                await wait(250);
            } else {
                await wait(250);
            }
        }
    }, 5000);
}

checkAndUpdate();
