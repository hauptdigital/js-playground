import './index.scss';

const main = document.createElement('main');
const element = document.createElement('div');

element.className = 'countdownContainer';

main.appendChild(element);
document.body.appendChild(main);

const countdownContainer = document.querySelector('.countdownContainer');

function setReady() {
  countdownContainer.innerText = 'ready';
  countdownContainer.classList.add('ready');
}

function setSteady() {
  countdownContainer.innerText = 'steady';
  countdownContainer.classList.add('steady');
}
function setGo() {
  countdownContainer.innerText = 'go';
  countdownContainer.classList.add('go');
}

function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log('Waited for ' + time);
    }, time);
  });
}

async function runCountdown() {
  await waitFor(1000);
  setReady();
  await waitFor(1000);
  setSteady();
  await waitFor(1000);
  setGo();
  await waitFor(1000);
  run();
}

async function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * Math.floor(251));
      if (randomNumber < 152) {
        const imageURL =
          'https://pokeres.bastionbot.org/images/pokemon/' +
          randomNumber +
          '.png';
        resolve(imageURL);
      } else {
        reject(new Error('Pokemon not found'));
      }
    }, 1000);
  });
}

async function run() {
  countdownContainer.innerText = '';
  const imageURL = await getRandomNumber();
  const image = document.createElement('img');
  image.src = imageURL;
  image.className = 'pokemonImage';
  countdownContainer.appendChild(image);
  const imageElement = document.querySelector('.pokemonImage');
  await waitFor(1000);
  imageElement.classList.add('zoom');
}

runCountdown();

// async function getPokemon() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
//   const results = response.json();
// }
