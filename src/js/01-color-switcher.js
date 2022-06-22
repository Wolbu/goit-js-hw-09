const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', onStopButtonClick);

let timerId;

function startColorChange() {
  timerId = setInterval(onStartButtonClick, 1000);
}

function onStartButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  console.log('Start');
}

function onStopButtonClick() {
  clearInterval(timerId);
  console.log('stop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
