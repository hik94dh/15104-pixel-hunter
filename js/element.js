const element = (markup) => {
  const element = document.createElement(`div`);
  element.innerHTML = markup;
  return element;
};

export default element;