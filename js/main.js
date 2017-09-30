const central = document.querySelector(`.central`);
const templates = document.querySelectorAll(`template`);
let currentScreen = 0;
let lastScreen = 5;

const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;


const showScreen = (index) => {
  central.innerHTML = templates[index].innerHTML;
};


const pressKey = (e) => {
    if (e.altKey && e.keyCode === ARROW_LEFT && currentScreen > 0) {
        --currentScreen;
    }
    else if (e.altKey && e.keyCode === ARROW_RIGHT && currentScreen < lastScreen) {
        ++currentScreen;
    }
    showScreen(currentScreen);
};


showScreen(currentScreen);


document.addEventListener(`keydown`, pressKey);