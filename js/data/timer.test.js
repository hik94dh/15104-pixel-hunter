import assert from 'assert';
import getTimer from './timer';

describe(`Timer`, () => {
  it(`Таймер работает`, () => {
    const testTimer = getTimer(30);
    assert.equal(30, testTimer.currentTime());
  });
  it(`Таймер заканчивается`, () => {
    const testTimer = getTimer(0);
    assert.equal(`Время вышло`, testTimer.tick());
  });
  it(`При обновлении таймера время уменьшается на 1`, () => {
    const testTimer = getTimer(30);
    let i = 29;
    while (i > 0) {
      assert.equal(i--, testTimer.tick());
    }
  });
});
