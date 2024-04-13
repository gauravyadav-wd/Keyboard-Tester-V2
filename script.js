const textDesktop = document.querySelector(".text");
const textMobile = document.querySelector(".mobile-text-container");
const textTablet = document.querySelector(".tablet-text-container");

let view = "desktop";

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  const active = document.querySelector(".active");
  active && active.classList.remove("active");

  // highlighting keys
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const key = e.key.toLowerCase();
    // const el = document.querySelector(`.${key}`);
    const el = document.querySelector(`.${view} .${key}`);
    el && el.classList.add("active", "clicked");
  } else {
    const el = document.querySelector(`.${view} .${e.code}`);
    el && el.classList.add("active", "clicked");
  }

  const text =
    view === "desktop"
      ? textDesktop
      : view === "tablet"
      ? textTablet
      : textMobile;

  // Writing in div
  if ((e.keyCode >= 48 && e.keyCode <= 90) || e.keyCode === 32) {
    // Allowing numbers and characters to get printed

    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode >= 186 && e.keyCode <= 192) {
    // Allowing symbols to get printed
    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode >= 219 && e.keyCode <= 222) {
    // Allowing symbols to get printed
    text.innerHTML = text.innerHTML + e.key;
  } else if (e.keyCode === 27) {
    // Making Escape work for clear
    text.innerHTML = "";
    const clickedBtns = document.querySelectorAll(`.${view} .clicked`);
    clickedBtns.forEach((cb) => {
      cb.classList.remove("clicked");
    });
  } else if (e.keyCode === 13) {
    // Making Enter work
    text.innerHTML = text.innerHTML + "<br>";
  } else if (e.keyCode === 8) {
    // Making backspace work
    text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
  }

  // Removing active class in a fraction of second after click
  setTimeout(() => {
    const active = document.querySelector(".active");
    active && active.classList.remove("active");
  }, 200);
});

// desktop, tablet and mobile simulation on clicks
const desktopBtn = document.querySelector("#desktop-btn");
const tabletBtn = document.querySelector("#tablet-btn");
const mobileBtn = document.querySelector("#mobile-btn");

const desktop = document.querySelector(".desktop");
const mobile = document.querySelector(".mobile");
const tablet = document.querySelector(".tablet");

desktopBtn.addEventListener("change", function (e) {
  e.preventDefault();
  mobile.classList.add("hidden");
  tablet.classList.add("hidden");
  desktop.classList.remove("hidden");
  view = "desktop";
});

tabletBtn.addEventListener("change", function (e) {
  e.preventDefault();
  mobile.classList.add("hidden");
  desktop.classList.add("hidden");
  tablet.classList.remove("hidden");
  view = "tablet";
});

mobileBtn.addEventListener("change", function (e) {
  e.preventDefault();
  desktop.classList.add("hidden");
  tablet.classList.add("hidden");
  mobile.classList.remove("hidden");
  view = "mobile";
});

// reset button
const resetBtn = document.querySelector(".reset-view");

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const text =
    view === "desktop"
      ? textDesktop
      : view === "tablet"
      ? textTablet
      : textMobile;

  const clickedBtns = document.querySelectorAll(`.${view} .clicked`);
  clickedBtns.forEach((cb) => {
    cb.classList.remove("clicked");
  });

  text.innerHTML = "";
});
