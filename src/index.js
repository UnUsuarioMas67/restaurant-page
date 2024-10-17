import "./style.css";
import home from "./home.js";

const content = document.querySelector("#content");

content.textContent = "";
content.appendChild(home.getContent());