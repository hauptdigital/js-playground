import './index.scss';

function component() {
  const main = document.createElement('main');

  const element = document.createElement('div');

  element.className = 'countdownContainer';
  element.innerText = 'ready';
  main.appendChild(element);
  return main;
}

document.body.appendChild(component());
