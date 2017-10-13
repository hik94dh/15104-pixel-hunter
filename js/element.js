const element = (markup) => {
  const screen = document.createElement(`div`);
  screen.innerHTML = markup;
  return screen;
};

export default element;
