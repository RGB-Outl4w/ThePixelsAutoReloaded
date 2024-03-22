// Function to check and update the main function periodically
async function checkAndUpdate() {
  // Immediately Invoked Function Expression (IIFE) to create a closure
  (function() {
    // Check for element with class starting with "Time-sc-" every 500ms
    let attempts = 0;
    setInterval(async function() {
      const timeElement = document.querySelector("[class^=\"Time-sc-\"]");
      
      // On first attempt, remove iframes and click the button if available
      if (attempts === 0) {
        const iframes = document.getElementsByTagName("iframe");
        for (let i = 0; i < iframes.length; i++) {
          iframes[i].parentNode.removeChild(iframes[i]);
        }
        
        const button = document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1];
        if (button && !button.disabled) {
          button.click();
          
          // Wait for text to appear
          const searchText = "% >";
          const textOnPage = document.body.innerText;
          if (!textOnPage.includes(searchText)) {
            await wait(2500);
          }
        } else {
          await wait(250);
        }
      } else {
        // On subsequent attempts, click the button if available and reset attempts
        const button = document.querySelectorAll("[class^=\"BlackButtonStyled-sc\"]")[1];
        if (button && !button.disabled) {
          button.click();
          attempts = 0;
          await wait(1500);
          
          // Wait for text to appear
          const searchText = "% >";
          const textOnPage = document.body.innerText;
          if (!textOnPage.includes(searchText)) {
            await wait(3700);
          }
        } else {
          await wait(250);
        }
      }
      attempts++;
    }, 500);
  })();
}

// Helper function to wait for a specified time
function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Replace alert function with empty function to suppress alerts
window.alert = function() {};

// Replace console.log with empty function to suppress logs
window.console.log = function() {};

// Start the main process
checkAndUpdate();
