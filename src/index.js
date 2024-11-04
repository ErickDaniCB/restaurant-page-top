import "./styles.css";
import { home } from "./home/home.js";

home();

const content = document.querySelector("#content");
const navButtons = document.querySelector("#nav-buttons");

navButtons.addEventListener("click", (e) => {
  clearContent();
  switch (e.target.id) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "about":
      about();
      break;
  }
});

function clearContent() {
  content.innerHTML = "";
}

export function createDiv() {
  const div = document.createElement("div");
  return div;
}
