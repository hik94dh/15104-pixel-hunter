import element from '../element';
import changeView from '../changeView';
import rules from '../templates/rules';
import contentData from './components/data';

const data = contentData.greetingData;

const greeting = element(`<div class="greeting central--blur">
    <div class="greeting__logo"><img src="${data.logo.src}" width="201" height="89" alt="${data.logo.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.desc}</p>
    </div>
    <div class="greeting__continue"><span><img src="${data.next.src}" width="64" height="64" alt="${data.next.alt}"></span></div>
  </div>`);

const greetingContinue = greeting.querySelector(`.greeting__continue`);

greetingContinue.addEventListener(`click`, () => {
  changeView(rules);
});

export default greeting;
