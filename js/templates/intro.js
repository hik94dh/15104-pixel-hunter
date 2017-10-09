import element from '../element';
import changeView from '../changeView';
import greeting from '../templates/greeting';

const intro = element(`<div class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`);

const introAsterisk = intro.querySelector(`.intro__asterisk`);
const nextScreen = () => {
  changeView(greeting);
};
introAsterisk.addEventListener(`click`, () => {
    nextScreen()
});

export default intro;