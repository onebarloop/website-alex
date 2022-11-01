//orange button
const darkmode = document.querySelector('[data-js="dark"]');

const darkblock = document.querySelector('[data-js="darkblock"]');

darkmode.addEventListener("click", () => {
  darkblock.classList.toggle("sidesegment--orange");
});

//grey button
const greymode = document.querySelector('[data-js="grey"]');

const interests = document.getElementsByClassName("interests__card");

function turnGrey(div) {
  div.classList.toggle("interests__card--grey");
}

greymode.addEventListener("click", () => {
  for (let i = 0; i < interests.length; i++) {
    turnGrey(interests[i]);
  }
});

//fun button

const funBtn = document.querySelector('[data-js="fun"]');
const secretArea = document.querySelector('[data-js="secretarea"]');

funBtn.addEventListener("click", () => {
  secretArea.classList.toggle("aboutme__secretarea--hidden");
});

//fun button -- sliders

const pic = document.querySelector('[data-js="picture"]');
const sliderRadius = document.querySelector('[data-js="radius"]');
const sliderRotation = document.querySelector('[data-js="rotation"]');
const sliderBlur = document.querySelector('[data-js="blur"]');

sliderRadius.addEventListener("input", () => {
  pic.style.borderRadius = `${sliderRadius.value}%`;
});

sliderRotation.addEventListener("input", () => {
  pic.style.transform = `rotate(${sliderRotation.value}deg)`;
  console.log(sliderRotation.value);
});

sliderBlur.addEventListener("input", () => {
  pic.style.filter = `blur(${sliderBlur.value}px)`;
  console.log(sliderRotation.value);
});

// fun button -- text and checkbox

const text = document.querySelector('[data-js="text"]');
const check = document.querySelector('[data-js="check"]');
const textbox = document.querySelector('[data-js="textbox"]');

const displayText = (input) => {
  textbox.textContent = `${input}`;
};

text.addEventListener("input", () => {
  displayText(text.value);
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
