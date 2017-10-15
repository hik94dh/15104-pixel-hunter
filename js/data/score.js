import {timeType, points} from './game-config';

const answerTotal = (answer) => {
  if (!answer.correct) {
    return points.ERROR;
  } else {
    if (answer.timeType === timeType.FAST) {
      return points.CORRECT + points.BONUS;
    } else if (answer.timeType === timeType.NORMAL) {
      return points.CORRECT;
    } else if (answer.timeType === timeType.SLOW) {
      return points.CORRECT + points.FINE;
    } else {
      return points.ERROR;
    }
  }
};

const countTotal = ({lives, answers}) => {
  if (answers.length < 10) {
    return -1;
  }

  let totalScore = lives * points.BONUS;

  answers.forEach((answer) => {
    totalScore += answerTotal(answer);
  });

  return totalScore;
};

export default countTotal;
