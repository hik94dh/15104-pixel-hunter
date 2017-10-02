const central = document.querySelector(`.central`);
const templates = document.querySelectorAll(`template`);
let currentScreen = 0;
const lastScreen = templates.length;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

const showScreen = (index) => {
  central.innerHTML = templates[index].innerHTML;
};

const pressKey = (e) => {
    if (e.altKey) {
        if (this && e.keyCode === ARROW_LEFT && currentScreen > 0) {
            --currentScreen;
            showScreen(currentScreen);
        }
        else if (this && e.keyCode === ARROW_RIGHT && currentScreen < lastScreen - 1) {
            ++currentScreen;
            showScreen(currentScreen);
        }
    }
};

document.addEventListener(`keydown`, pressKey);