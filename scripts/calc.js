const display = document.querySelector('[data-js="display"]');

const one = document.querySelector('[data-js="one"]');
const two = document.querySelector('[data-js="two"]');
const three = document.querySelector('[data-js="three"]');
const four = document.querySelector('[data-js="four"]');
const five = document.querySelector('[data-js="five"]');
const six = document.querySelector('[data-js="six"]');
const seven = document.querySelector('[data-js="seven"]');
const eight = document.querySelector('[data-js="eight"]');
const nine = document.querySelector('[data-js="nine"]');
const plus = document.querySelector('[data-js="plus"]');
const minus = document.querySelector('[data-js="minus"]');
const calc = document.querySelector('[data-js="calc"]');
const reset = document.querySelector('[data-js="reset"]');

one.addEventListener("click", () => {
  display.textContent = display.textContent + 1;
});

two.addEventListener("click", () => {
  display.textContent = display.textContent + 2;
});

three.addEventListener("click", () => {
  display.textContent = display.textContent + 3;
});

four.addEventListener("click", () => {
  display.textContent = display.textContent + 4;
});

five.addEventListener("click", () => {
  display.textContent = display.textContent + 5;
});

six.addEventListener("click", () => {
  display.textContent = display.textContent + 6;
});

seven.addEventListener("click", () => {
  display.textContent = display.textContent + 7;
});

eight.addEventListener("click", () => {
  display.textContent = display.textContent + 8;
});

nine.addEventListener("click", () => {
  display.textContent = display.textContent + 9;
});

plus.addEventListener("click", () => {
  display.textContent = display.textContent + "+";
});

minus.addEventListener("click", () => {
  display.textContent = display.textContent + "-";
});

calc.addEventListener("click", () => {
  display.textContent = "Not working...yet";
});

reset.addEventListener("click", () => {
  display.textContent = "";
});
