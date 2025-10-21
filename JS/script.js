const buttonAccueil = document.getElementById("accueil");
const buttonHtmlCss = document.getElementById("html-css");
const buttonJavascript = document.getElementById("javascript");
const content = document.querySelector("main");

// HTML
buttonHtmlCss.addEventListener("click", () => {
  content.innerHTML = "";
});

// JAVASCRIPT
buttonJavascript.addEventListener("click", () => {
  content.innerHTML = "";
});

// ACCUEIL
buttonAccueil.addEventListener("click", () => {
  content.innerHTML = "";
});
