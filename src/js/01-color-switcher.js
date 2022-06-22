const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');



startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopButtonClick);

let timerId;

function onStartBtnClick() {
  timerId = setInterval(colorChange, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function colorChange() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopButtonClick() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}