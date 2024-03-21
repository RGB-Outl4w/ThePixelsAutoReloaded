async function checkAndUpdate() {
    let element = document.querySelector("[class^=\'BlackButtonStyled-sc\']");
    let count = 0;
  
    while (true) {
      if (count > 10) {
        break;
      }
  
      if (element) {
        element.click();
        count = 0;
        await wait(2000);
  
        let searchText = "magasan";
        let textOnPage = document.body.textContent;
  
        if (!textOnPage.includes(searchText)) {
          await wait(5000);
        }
      } else {
        await wait(1000);
      }
    }
  }
  
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  window.alert = function() {}, window.confirm.toString = function() {};
  
  const metax = 1077,
  
  checkAndUpdate();
