const central = document.querySelector(`.central`);

const changeView = (screen) => {
  central.innerHTML = ``;
  central.appendChild(screen);
};
export default changeView;
