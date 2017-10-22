import element from '../element';
import changeView from '../changeView';
import game2 from '../templates/game2';
import rules from '../templates/rules';
import {drawHeader, drawStats, drawForm, drawTask} from './components/data';

const game1 = element(`
  ${drawHeader()}
  <div class="game">
    ${drawTask()}
    ${drawForm()}
    ${drawStats()}
  </div>`);

const game1Form = game1.querySelector(`.game__content`);
const back = game1.querySelector(`.back`);

game1Form.addEventListener(`click`, () => {
  const game1Input = game1.querySelectorAll(`input:checked`);
  if (game1Input.length > 1) {
    changeView(game2);
  }
});

back.addEventListener(`click`, () => {
  changeView(rules);
});

export default game1;
