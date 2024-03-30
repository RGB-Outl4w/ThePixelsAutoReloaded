async function checkAndUpdate() {
  // Function to check if an element exists
  function elementExists(element) {
    return element !== undefined && element !== null && element !== "";
  }

  // Function to wait for a specified time
  function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // Disable alerts and console logs
  window.alert = function () {};
  window.console.log = function () {};

  // Main loop
  let isPurchaseComplete = false;
  while (true) {
    // Find the element displaying the timer
    const timerElement = document.querySelector("[class^=\"Time-sc-\"]");

    // If timer element exists, proceed with purchase logic
    if (elementExists(timerElement)) {
      // Wait for a short time
      await wait(250);

      // Find the element displaying the current money
      const moneyElement = document.querySelector(
        "[class^=\"AnimatedNumberStyled-sc\"]"
      );

      // If money element exists, check the amount
      if (moneyElement) {
        const currentMoney = moneyElement.textContent.replace(/\s/g, "");
        const squadTarget = 
          document
            .querySelector("[class^=\"TargetProgressSquad-sc\"]")
            .textContent.replace(/,[^]*$/, "")
            .replace(/[a-zA-Z, ]/g, "");

        // If target money is less than 100 and we have enough money, make purchases
        if (squadTarget <= 99) {
          if (currentMoney >= 3050) {
            // Buy the expensive item
            document.querySelector("a[href=\"/shop\"]").click();
            await wait(2500);
            document.querySelector("a[href=\"/shop/1\"]").click();
            await wait(2500);
            document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
            await wait(3500);
            isPurchaseComplete = true;
          } else if (currentMoney >= 1050) {
            // Buy the cheaper item
            document.querySelector("a[href=\"/shop\"]").click();
            await wait(2500);
            document.querySelector("a[href=\"/shop/0\"]").click();
            await wait(2500);
            document.querySelector("[class^=\"BlackButtonStyled-sc\"]").click();
            isPurchaseComplete = true;
          }
        }
      }
    } else {
      // If timer element doesn't exist, click the available button
      const availableButton = document.querySelectorAll(
        "[class^=\"BlackButtonStyled-sc\"]"
      )[1];
      if (availableButton && !availableButton.disabled) {
        availableButton.click();
      }
    }

    // If purchase is complete, break the loop
    if (isPurchaseComplete) {
      break;
    }

    // Wait for a short time before checking again
    await wait(250);
  }
}

// Start the process
checkAndUpdate();
