import assert from 'assert';
import countTotal from './score';
import {timeType} from './game-config';

describe(`Score`, () => {
  it(`Если ответов меньше 10, то вернёт -1`, () => {
    const testScore = {
      lives: 0,
      answers: [
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.FAST}
      ]
    };
    assert.equal(-1, countTotal(testScore));
  });
  it(`Если всё верно и нет бонусов`, () => {
    const testScore2 = {
      lives: 0,
      answers: [
        {correct: false, timeType: timeType.NORMAL},
        {correct: false, timeType: timeType.NORMAL},
        {correct: false, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL}
      ]
    };
    assert.equal(700, countTotal(testScore2));
  });
  it(`Если всё верно и остались 3 жизни`, () => {
    const testScore3 = {
      lives: 3,
      answers: [
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL}
      ]
    };
    assert.equal(1150, countTotal(testScore3));
  });
  it(`Если всё верно, но медленно и остались 3 жизни`, () => {
    const testScore4 = {
      lives: 3,
      answers: [
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW}
      ]
    };
    assert.equal(650, countTotal(testScore4));
  });
  it(`Если всё верно, но медленно и нет бонусов`, () => {
    const testScore5 = {
      lives: 0,
      answers: [
        {correct: false, timeType: timeType.SLOW},
        {correct: false, timeType: timeType.SLOW},
        {correct: false, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.SLOW}
      ]
    };
    assert.equal(350, countTotal(testScore5));
  });
  it(`Если всё верно + быстро и остались 3 жизни`, () => {
    const testScore6 = {
      lives: 3,
      answers: [
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST}
      ]
    };
    assert.equal(1650, countTotal(testScore6));
  });
  it(`Если всё верно + быстро и нет бонусов`, () => {
    const testScore7 = {
      lives: 0,
      answers: [
        {correct: false, timeType: timeType.FAST},
        {correct: false, timeType: timeType.FAST},
        {correct: false, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.FAST}
      ]
    };
    assert.equal(1050, countTotal(testScore7));
  });
  it(`Если 2 ошибки и осталась 1 жизнь`, () => {
    const testScore8 = {
      lives: 1,
      answers: [
        {correct: false, timeType: timeType.NORMAL},
        {correct: false, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.NORMAL}
      ]
    };
    assert.equal(850, countTotal(testScore8));
  });
  it(`Если разная скорость и 2 жизни`, () => {
    const testScore9 = {
      lives: 2,
      answers: [
        {correct: false, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.FAST},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.SLOW},
        {correct: true, timeType: timeType.NORMAL},
        {correct: true, timeType: timeType.FAST}
      ]
    };
    assert.equal(1000, countTotal(testScore9));
  });
});
