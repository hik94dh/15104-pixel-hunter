const central = document.querySelector(`.central`);
const templates = document.querySelectorAll(`template`);
let currentScreen = 0;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

const showScreen = (index) => {
  if (index < 0 || index > templates.length - 1) {
    return;
  }
  central.innerHTML = templates[index].innerHTML;
  currentScreen = index;
};

const pressKey = (e) => {
  if (e.altKey) {
    if (e.keyCode === ARROW_LEFT) {
      showScreen(currentScreen - 1);
    }
    else if (e.keyCode === ARROW_RIGHT) {
      showScreen(currentScreen + 1);
    }
  }
};

document.addEventListener(`keydown`, pressKey);

showScreen(currentScreen)