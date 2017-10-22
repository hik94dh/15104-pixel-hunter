import element from '../element';
import changeView from '../changeView';
import game1 from '../templates/game1';
import greeting from '../templates/greeting';
import headerBack from './components/headerBack';
import contentData from './components/data';

const data = contentData.rulesData;

const rules = element(`
  <header class="header">
    ${headerBack()}
  </header>
  <div class="rules">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.desc}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.form.inputText}">
      <button class="rules__button  continue" type="submit" disabled>${data.form.btnText}</button>
    </form>
  </div>`);

const rulesSubmit = rules.querySelector(`.rules__button`);
const rulesForm = rules.querySelector(`.rules__form`);
const rulesInput = rules.querySelector(`.rules__input`);
const back = rules.querySelector(`.back`);


rulesInput.addEventListener(`input`, (e) => {
  rulesSubmit.disabled = !e.target.value;
});

rulesForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  changeView(game1);
});


back.addEventListener(`click`, () => {
  changeView(greeting);
});

export default rules;
