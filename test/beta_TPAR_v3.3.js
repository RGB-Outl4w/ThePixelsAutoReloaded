async function checkAndUpdate() {
    let element = document.querySelector("[class^=\'BlackButtonStyled-sc\']");
    let count = 0;
  
      if (element) {
        element.click();
        count = 0;
        await wait(2000);
  
        let searchText = "MD Says";
        let textOnPage = document.body.textContent;
  
        if (!textOnPage.includes(searchText)) {
          await wait(1000);
        }
      } else if (textOnPage.includes(searchText)) {
          await wait(1000);
        } else {
        await wait(1000);
      }
    }
  }
  
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  checkAndUpdate();
