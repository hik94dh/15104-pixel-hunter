const points = {
  CORRECT: 100,
  BONUS: 50,
  FINE: -50,
  ERROR: 0
};

const answerTotal = (answer) => {
  const {time, correct} = answer;

  if (!correct) {
    return points.ERROR;
  } else {
    if (time > 0 && time <= 10) {
      return points.CORRECT + points.BONUS;
    } else if (time > 10 && time <= 20) {
      return points.CORRECT;
    } else if (time > 20 && time <= 30) {
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
