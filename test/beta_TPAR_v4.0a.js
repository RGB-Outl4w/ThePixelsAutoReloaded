

async function checkAndUpdate() {
  const element = document.querySelector('[class^="BlackButtonStyled-sc"]');

  if (element) {
    element.click();
    await wait(1000);

    const searchText = "Next";
    const textOnPage = document.body.textContent;

    if (!textOnPage.includes(searchText)) {
      await wait(5000);
    }
  } else {
    await wait(2000);
  }
}

function alert() {
  console.log("Alert!");
}

window.alert = function () {}, window.confirm.toString = function () {};

const metax = 1077;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

checkAndUpdate();

