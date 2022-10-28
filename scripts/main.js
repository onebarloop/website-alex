//orange button
const darkmode = document.querySelector('[data-js="dark"]');

const darkblock = document.querySelector('[data-js="darkblock"]');

darkmode.addEventListener("click", () => {
  darkblock.classList.toggle("sidesegment--orange");
});

//grey button
const greymode = document.querySelector('[data-js="grey"]');

const interests = document.getElementsByClassName("interests__card");

console.log(interests);

function turnGrey(div) {
  div.classList.toggle("interests__card--grey");
}

greymode.addEventListener("click", () => {
  for (let i = 0; i < interests.length; i++) {
    turnGrey(interests[i]);
  }
});
