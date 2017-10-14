const getTimer = (sec) => {
  return {
    sec,
    tick() {
      if (this.sec > 0) {
        return --this.sec;
      } else if (this.sec === 0) {
        return `Время вышло`;
      }
      return this.sec;
    },
    currentTime() {
      return this.sec;
    }
  };
};

export default getTimer;
