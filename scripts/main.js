const darkmode = document.querySelector('[data-js="dark"]');

const darkblock = document.querySelector('[data-js="darkblock"]');

darkmode.addEventListener("click", () => {
  darkblock.classList.toggle("sidesegment--orange");
});
