const clock = document.querySelector(".clock");
const secondTag = document.querySelector(".second");
const minuteTag = document.querySelector(".minute");
const hourTag = document.querySelector(".hour");
const digital = document.querySelector(".digital");
let degForSecond = 0;
let degForMinute = 0;
let degForHour = 0;
let second = 0;
let minute = 0;
let hour = 12;
// add number Pointer
for (i = 0; i < 12; i++) {
  const number = document.createElement("div");
  number.classList.add("number");
  if (i == 0 || i == 6 || i == 3 || i == 9) {
    number.style.clipPath = `polygon(94% 0%, 100% 0%, 100% 100%, 94% 100%)`;
  }
  number.style.transform = `rotate(${(360 / 12) * i}deg)`;
  clock.append(number);
}

const intervalId = setInterval(() => {
  degForSecond += 6;
  secondTag.style.transform = `rotate(${degForSecond}deg)`;
  second += 1;
  if (second == 60) {
    degForMinute += 6;
    second = 0;
    minute += 1;
    minuteTag.style.transform = `rotate(${degForMinute}deg)`;
  }
  if (minute == 60) {
    degForHour += 6;
    minute = 0;
    hour += 1;
    if (hour > 12) {
      hour = 1;
    }
    hourTag.style.transform = `rotate(${degForHour}deg)`;
  }
  digital.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  }`;
}, 1000);
