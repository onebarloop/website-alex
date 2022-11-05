const button = document.querySelector('[data-js="footer-button"]');
const footer = document.querySelector('[data-js="footer"]');

button.addEventListener("click", () => {
  console.log("button works!");
  const footDiv = document.createElement("div");
  footDiv.classList.add("footer__div");
  footer.append(footDiv);
});
