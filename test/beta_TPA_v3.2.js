
// Author: MD
// Formatter: RGB_Outlaw
// Telegram channels: t.me/mdsays | t.me/rgbtrap


async function checkAndUpdate() {
    // This function repeatedly checks the game state and performs actions based on conditions

    const elementSelectors = {
        blackButton: ".BlackButtonStyled-sc", // Class name for "the black button"
        timeElement: ".Time-sc-", // Class name for the time element
        animatedNumber: ".AnimatedNumberStyled-sc", // Class name for the money element
        targetProgress: ".TargetProgressSquad-sc", // Progress of your squad's target
        shopButton1: "a[href=\"/shop/1\"]", // Button to purchase triple biister
        shopButton: "a[href=\"/shop\"]", // Generic shop button
        shopButton0: "a[href=\"/shop/0\"]", // Button to purchase double booster
    };

    const log = function(message) {
        console.log(message); // Simple logging function
    };

    const wait = async (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds)); // Function to wait for a specified time
    };

    let didClickButton1 = false;
    let didClickButton0 = false; // Flags to track button clicks (potentially unused)

    setInterval(async function() {
        // This main function runs repeatedly at a set interval

        const timeElement = document.querySelector(elementSelectors.timeElement);
        if (!timeElement) {
            await wait(250);
            return;
        }

        const animatedNumber = document.querySelector(elementSelectors.animatedNumber);
        const money = animatedNumber ? animatedNumber.textContent.replace(/\s/g, "") : ""; // Extract money amount, removing spaces
        const targetProgress = document.querySelector(elementSelectors.targetProgress);
        const progress = targetProgress ? targetProgress.textContent.replace(/[^0-9]/g, "") : ""; // Extract target progress percentage, removing non-numeric characters

        if (progress <= 99) { // Check if target progress is not yet complete
            if (money >= 3050) { // Check if money is sufficient for specific action
                if (1 === 2) { // Assuming a specific condition is met, potentially for logging
                    log("MD Says... RGB_Outlaw was here!");
                } else {
                    const actions = ["wait2500", "setDidClickButton1", "clickShopButton1", "wait3500", "clickBlackButton"];
                    for (let i = 0; i < actions.length; i++) {
                        const action = actions[i];
                        switch (action) {
                            case "wait2500":
                                await wait(2500); // Wait for 2.5 seconds
                                break;
                            case "setDidClickButton1":
                                didClickButton1 = true; // Potentially unused flag
                                break;
                            case "clickShopButton1":
                                document.querySelector(elementSelectors.shopButton1).click();
                                break;
                            case "wait3500":
                                await wait(3500); // Wait for 3.5 seconds
                                break;
                            case "clickBlackButton":
                                document.querySelector(elementSelectors.blackButton).click();
                                break;
                        }
                    }
                }
            } else if (money >= 1050) { // Check if money is sufficient for purchasing a double boost
                document.querySelector(elementSelectors.shopButton).click();
                await wait(2500);
                document.querySelector(elementSelectors.shopButton0).click();
                log("Buying something from the shop...");
            }
        }
    }, 5000); // Set the interval to check the game state every 5 seconds
}

// Call the checkAndUpdate function to start the automation
checkAndUpdate();
