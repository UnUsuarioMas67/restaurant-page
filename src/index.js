import "./style.css";
import home from "./home.js";
import menu from "./menu.js";

const content = document.querySelector("#content");
const navButtons = document.querySelectorAll("nav button");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleNavBtnClick(btn)
  })
})

const handleNavBtnClick = function (btn) {
  navButtons.forEach((b) => {
    if (b === btn) {
      b.classList.add("selected")
    } else {
      b.classList.remove("selected")
    }
  })

  switch (btn.id) {
    case "home-btn":
      renderContent(home.getContent())
      break;
    case "menu-btn":
      renderContent(menu.getContent())
      break;
  }
}

const renderContent = function (newContent) {
  content.textContent = "";
  content.appendChild(newContent)
}

renderContent(home.getContent());