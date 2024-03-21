

async function checkAndUpdate() {
  const element = document.querySelector('[class^="BlackButtonStyled-sc"]')[1];

  if (element) {
    element.click();
    await wait(3000);

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

