const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {

    const updateTime = () => {
      let hours = Math.floor(seconds / 3600);
      hours = hours < 10 ? '0' + hours : hours;
      let minutes = Math.floor((seconds - hours * 3600) / 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      let sec = seconds - (hours * 3600 + minutes * 60);
      sec = sec < 10 ? '0' + sec : sec;
      timerEl.innerHTML = `${hours}:${minutes}:${sec}`;
      seconds--;
    }

    setInterval(updateTime,1000)
  };
};
const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // // оставались только числа
  if(isNaN(inputEl.value)){
    inputEl.value = '';
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
