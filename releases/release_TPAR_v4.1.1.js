async function checkAndUpdate() {
  const searchText = "% >";
  const buttonSelector = "[class^=\"BlackButtonStyled-sc\"]"; // Cache selector

  // Function to click the button if available
  const clickButton = async () => {
    const button = document.querySelectorAll(buttonSelector)[1];
    if (button && !button.disabled) {
      button.click();
      await wait(5500); // Wait for initial text
      if (!document.body.innerText.includes(searchText)) {
        await wait(3700); // Additional wait if needed
      }
    }
  };

  // Remove iframes on first run
  const iframes = document.getElementsByTagName("iframe");
  while (iframes.length > 0) {
    iframes[0].parentNode.removeChild(iframes[0]);
  }

  // Initial button click and wait
  await clickButton();

  // Periodically check and click the button
  setInterval(clickButton, 500);
}

// Helper function to wait for a specified time
function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Suppress alerts and console logs (optional)
window.alert = () => {};
window.console.log = () => {};

// Start the main process
checkAndUpdate();
