import assert from 'assert';
import countTotal from './score';

const testScore = {
  lives: 0,
  answers: [
    {correct: true, time: 11},
    {correct: true, time: 11}
  ]
};

const testScore2 = {
  lives: 0,
  answers: [
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11}
  ]
};

const testScore3 = {
  lives: 3,
  answers: [
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11},
    {correct: true, time: 11}
  ]
};

const testScore4 = {
  lives: 3,
  answers: [
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21}
  ]
};

const testScore5 = {
  lives: 0,
  answers: [
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21},
    {correct: true, time: 21}
  ]
};

const testScore6 = {
  lives: 3,
  answers: [
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1}
  ]
};

const testScore7 = {
  lives: 0,
  answers: [
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1},
    {correct: true, time: 1}
  ]
};

describe(`Score`, () => {
  it(`Если ответов меньше 10, то вернёт -1`, () => {
    assert.equal(-1, countTotal(testScore));
  });
  it(`Если всё верно и нет бонусов`, () => {
    assert.equal(1000, countTotal(testScore2));
  });
  it(`Если всё верно и остались 3 жизни`, () => {
    assert.equal(1150, countTotal(testScore3));
  });
  it(`Если всё верно, но медленно и остались 3 жизни`, () => {
    assert.equal(650, countTotal(testScore4));
  });
  it(`Если всё верно, но медленно и нет бонусов`, () => {
    assert.equal(500, countTotal(testScore5));
  });
  it(`Если всё верно + быстро и остались 3 жизни`, () => {
    assert.equal(1650, countTotal(testScore6));
  });
  it(`Если всё верно + быстро и нет бонусов`, () => {
    assert.equal(1500, countTotal(testScore7));
  });
});
