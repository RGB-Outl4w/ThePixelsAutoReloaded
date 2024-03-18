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
        const timeElement = document.querySelector("[class^=\"Time-sc-\"]");
        if (!timeElement) {
            await wait(250);
            return;
            }

        animatedNumber = document.querySelector("[class^=\"AnimatedNumberStyled-sc\"]");
        money = document.querySelector("[class^=\"AnimatedNumberStyled-sc\"]").textContent;
        money = money.replace(/\s/g, '');
        targetProgress = document.querySelector("[class^=\"TargetProgressSquad-sc\"]");
        progress = document.querySelector("[class^=\"TargetProgressSquad-sc\"]").text;
        progress = progress.replace(/,[^]*$/, '');
        progress = progress.replace(/[a-zA-Z, ]/g, '');

        if (progress <= 99) {
            if (money >= 3050) {
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                didClickButton1 = true;
                document.querySelector("a[href=\"/shop/1\"]").click();
                await wait(3500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();

            } else if (money >= 1050) {
                document.querySelector("a[href=\"/shop\"]").click();
                await wait(2500);
                didClickButton0 = true;
                document.querySelector("a[href=\"/shop/0\"]").click();
                await wait(3500);
                document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();

            } else if (document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")) {
                document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]").click();
                await wait(250);

            } else {
                await wait(250);
            }
        }
    }, 5000);
}

checkAndUpdate();
