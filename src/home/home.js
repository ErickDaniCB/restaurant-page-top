import burgir from "./hamburger.svg";
import place from "./restaurantImg.jpg";
import { createDiv } from "..";

const content = document.querySelector("#content");
content.classList.add("home");

const imgDiv = createDiv();
imgDiv.classList.add("img-div");

const burgerImg = new Image();
burgerImg.src = burgir;
burgerImg.classList.add("burger-icon");

const placeImg = new Image();
placeImg.src = place;
placeImg.classList.add("place-img");

imgDiv.appendChild(burgerImg);
imgDiv.appendChild(placeImg);

const textDiv = createDiv();
const h1 = document.createElement("h1");
h1.textContent = "Welcome!";
textDiv.appendChild(h1);

function home() {
  content.appendChild(imgDiv);
  content.appendChild(textDiv);
}

export { home };
