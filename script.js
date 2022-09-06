const clock = document.querySelector(".clock");
const secondTag = document.querySelector(".second");
const minuteTag = document.querySelector(".minute");
const hourTag = document.querySelector(".hour");
const digital = document.querySelector(".digital");

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

const realTime = () => {
  let rtclock = new Date();
  let degForSecond = 6;
  let degForMinute = 6;
  let degForHour = 0.5;
  let second = rtclock.getSeconds();
  let minute = rtclock.getMinutes();
  let hour = rtclock.getHours();
  let amPm = hour > 12 || minute > 0 ? "pm" : "am";
  secondTag.style.transform = `rotate(${degForSecond * second}deg)`;
  minuteTag.style.transform = `rotate(${degForMinute * minute}deg)`;
  hourTag.style.transform = `rotate(${degForHour * minute}deg)`;
  digital.innerHTML = `${hour >= 10 ? hour : "0" + hour} : ${
    minute >= 10 ? minute : "0" + minute
  } ${amPm}`;
};
setInterval(() => {
  realTime();
}, 500);
