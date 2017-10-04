const central = document.querySelector(`.central`);
const templates = document.querySelectorAll(`template`);
let currentScreen = 0;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

const showScreen = (index) => {
  if (currentScreen >= 0 && currentScreen < templates.length) {
    central.innerHTML = templates[index].innerHTML;
  }
  else {
    console.log('counter');
    pressKey(false)
  }
};

const pressKey = (e) => {
  if (e.altKey) {
    if (e.keyCode === ARROW_LEFT) {
      showScreen(--currentScreen);
    }
    else if (e.keyCode === ARROW_RIGHT) {
      showScreen(++currentScreen);
    }
  }
};

document.addEventListener(`keydown`, pressKey)