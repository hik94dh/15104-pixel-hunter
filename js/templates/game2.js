import element from '../element';
import changeView from '../changeView';
import game3 from '../templates/game3';
import game1 from '../templates/game1';
import {drawHeader, drawStats, drawForm2, drawTask2} from './components/data';

const game2 = element(`
  ${drawHeader()}
  <div class="game">
    ${drawTask2()}
    ${drawForm2()}
    ${drawStats()}
  </div>`);

const game2Form = game2.querySelector(`.game__content`);
const back = game2.querySelector(`.back`);

game2Form.addEventListener(`click`, () => {
  const game2Input = game2.querySelectorAll(`input:checked`);
  if (game2Input.length > 0) {
    event.preventDefault();
    changeView(game3);
  }
});

back.addEventListener(`click`, () => {
  changeView(game1);
});

export default game2;
