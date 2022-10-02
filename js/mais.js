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
