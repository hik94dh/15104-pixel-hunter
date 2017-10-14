import assert from 'assert';
import getTimer from './timer';

describe(`Timer`, () => {
  it(`Проверяем работу таймера`, () => {
    const testTimer = getTimer(30);
    assert.equal(30, testTimer.currentTime());
  });
  it(`Проверяем конец таймера`, () => {
    const testTimer = getTimer(0);
    assert.equal(`Время вышло`, testTimer.tick());
  });
  it(`Проверяем уменьшение на 1 при обновлении таймера`, () => {
    const testTimer = getTimer(30);
    assert.equal(29, testTimer.tick());
  });
});
