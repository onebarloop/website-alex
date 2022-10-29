//orange button
const darkmode = document.querySelector('[data-js="dark"]');

const darkblock = document.querySelector('[data-js="darkblock"]');

darkmode.addEventListener("click", () => {
  darkblock.classList.toggle("sidesegment--orange");
});

//grey button
const greymode = document.querySelector('[data-js="grey"]');

const interests = document.getElementsByClassName("interests__card");

//console.log(interests);

function turnGrey(div) {
  div.classList.toggle("interests__card--grey");
}

greymode.addEventListener("click", () => {
  for (let i = 0; i < interests.length; i++) {
    turnGrey(interests[i]);
  }
});

//progress bar

const progressBar = document.querySelector('[data-js="progress-bar"]');

const calculateScrollPercentage = () =>
  (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100 +
  "%";

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage();
});

// clock

const clock = document.querySelector('[data-js="funbox"]');

const time = new Date().toLocaleTimeString();

clock.textContent = "You loaded this page at " + time;

//console fun

console.log("*********");
console.log(
  "You found the sourcecode. Awesome. You are welcome to review my code over at github"
);

console.log("https://github.com/onebarloop");

console.log("*********");
