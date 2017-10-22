import element from '../element';
import changeView from '../changeView';
import greeting from '../templates/greeting';
import contentData from './components/data';

const intro = element(`<div class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> ${contentData.introData.desc}</p>
    </div>`);

const introAsterisk = intro.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, () => {
  changeView(greeting);
});

export default intro;
