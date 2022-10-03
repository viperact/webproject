setInterval(function () {
  let tg = document.querySelector(".slide");
  tg.style.top = "-100%";
  tg.style.transition = "0.6s";

  setTimeout(function () {
    // console.log(tg.querySelectorAll("li").length);
    let first = tg.querySelectorAll("li")[0];
    // console.log(first);
    tg.appendChild(first);
    tg.style.top = "0";
    tg.style.transition = "none";
  }, 600);
}, 3000);

function chgTab(i1, i2) {
  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  tm[i1].classList.add("on");
  tc[i1].classList.add("on");

  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}

function leftPad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}

let watchTime = () => {
  const present = new Date();
  const dayList = ["일", "월", "화", "수", "목", "금,", "토"];

  const hour = leftPad(present.getHours());
  const minute = leftPad(present.getMinutes());
  const seconds = leftPad(present.getSeconds());
  console.log(`${hour}-${minute}-${seconds}`);

  setText("#hours", hour);
  setText("#minute", minute);
  setText("#seconds", seconds);

  const year = present.getFullYear();
  const month = leftPad(present.getMonth() + 1);
  const date = leftPad(present.getDate());
  const day = present.getDay();

  setText("#year", year);
  setText("#month", month);
  setText("#date", date);
  setText("#day", `${dayList[day]}요일`);
};

watchTime();

let clockInterval = setInterval(watchTime, 1000);
