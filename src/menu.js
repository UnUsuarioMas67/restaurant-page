import burgerImg from "./assets/images/burger.png";
import baconBurgerImg from "./assets/images/bacon-burger.png";
import chickenSandwichImg from "./assets/images/chicken-sandwich.png";
import wrapImg from "./assets/images/wrap.png";
import doubleWrapImg from "./assets/images/double-wrap.png";
import waterImg from "./assets/images/water.png";
import sodaImg from "./assets/images/soda.png";
import juiceImg from "./assets/images/juice.png";
import iceCreamImg from "./assets/images/ice-cream.png";
import friesImg from "./assets/images/fries.png";

const MENU_CONTENT = [
  {
    sectionName: "Burger",
    items: [
      {
        itemName: "Classic",
        price: 2.99,
        imgUrl: burgerImg,
      },
      {
        itemName: "Bacon Cheeseburger",
        price: 4.5,
        imgUrl: baconBurgerImg,
      },
      {
        itemName: "Classic",
        price: 3.2,
        imgUrl: chickenSandwichImg,
      },
    ],
  },
  {
    sectionName: "Wraps",
    items: [
      {
        itemName: "Wrap",
        price: 2.75,
        imgUrl: wrapImg,
      },
      {
        itemName: "Double Wrap",
        price: 4.99,
        imgUrl: doubleWrapImg,
      },
    ],
  },
  {
    sectionName: "Drinks",
    items: [
      {
        itemName: "Water",
        price: 0.99,
        imgUrl: waterImg,
      },
      {
        itemName: "Soda",
        price: 1.99,
        imgUrl: sodaImg,
      },
      {
        itemName: "Water",
        price: 1.99,
        imgUrl: juiceImg,
      },
    ],
  },
  {
    sectionName: "Desserts",
    items: [
      {
        itemName: "Ice Cream",
        price: 2.99,
        imgUrl: iceCreamImg,
      },
    ],
  },
  {
    sectionName: "Extra",
    items: [
      {
        itemName: "Fries",
        price: 1.99,
        imgUrl: friesImg,
      },
    ],
  },
];

const getContent = function () {
  const article = document.createElement("article");
  article.setAttribute("id", "menu");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  article.appendChild(h1);

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  MENU_CONTENT.forEach((item) => {
    menuContent.appendChild(createSection(item));
  });

  article.appendChild(menuContent);

  return article;
};

export default { getContent };

const createSection = function (sectionContent) {
  const section = document.createElement("section");
  section.classList.add("menu-section");

  const h2 = document.createElement("h2");
  h2.textContent = sectionContent.sectionName;
  section.appendChild(h2);

  const container = document.createElement("div");
  container.classList.add("menu-container");

  sectionContent.items.forEach((item) => {
    container.appendChild(createMenuItem(item));
  });

  section.appendChild(container);

  return section;
};

function createMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const img = document.createElement("img");
  img.width = 175;
  img.src = item.imgUrl;
  img.alt = item.itemName;
  menuItem.appendChild(img);

  const itemName = document.createElement("p");
  itemName.classList.add("item-name");
  itemName.textContent = item.itemName;
  menuItem.appendChild(itemName);

  const price = document.createElement("p");
  price.classList.add("item-price");
  price.textContent = "$ " + item.price.toFixed(2);
  menuItem.appendChild(price);

  return menuItem;
}
