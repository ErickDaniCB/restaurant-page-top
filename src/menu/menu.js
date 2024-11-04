import { content } from "..";

const ul = document.createElement("ul");

function createLi(dish, price) {
  const li = document.createElement("li");
  li.textContent = `${dish} .... $${price}`;
  ul.appendChild(li);
}

createLi("Hamburger", 5);

export function menu() {
  content.appendChild(ul);
}
