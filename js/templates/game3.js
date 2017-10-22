import element from '../element';
import changeView from '../changeView';
import stats from '../templates/stats';
import game2 from '../templates/game2';
import {drawHeader, drawStats, drawForm3, drawTask3} from './components/data';

const game3 = element(`
  ${drawHeader()}
  <div class="game">
    ${drawTask3()}
    ${drawForm3()}
    ${drawStats()}
  </div>`);

const game3Form = game3.querySelector(`.game__content`);
const back = game3.querySelector(`.back`);

game3Form.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`game__option`)) {
    changeView(stats);
  }
});

back.addEventListener(`click`, () => {
  changeView(game2);
});

export default game3;
