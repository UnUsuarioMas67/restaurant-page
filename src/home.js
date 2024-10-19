import burgerImg from "./assets/images/burger.png";

const getContent = function () {
  const article = document.createElement("article");
  article.setAttribute("id", "home");

  const homeText = document.createElement("div");
  homeText.classList.add("home-text");

  const h1 = document.createElement("h1");
  const h1Span = document.createElement("span");
  h1Span.textContent = "Superb Flavor";
  const h1Text = document.createTextNode(" in Every Bite");
  h1.appendChild(h1Span);
  h1.appendChild(h1Text);

  homeText.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deserunt. Aliquam quis expedita quas enim
          atque consectetur reprehenderit ullam quibusdam earum, ut cum magni quisquam veniam voluptatem facilis
          architecto corporis.`;

  homeText.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "This button does nothing";

  homeText.appendChild(button);

  article.appendChild(homeText);

  const homeImg = document.createElement("div");
  homeImg.classList.add("home-img");

  const img = document.createElement("img");
  img.src = burgerImg;
  img.alt = "image of burger";
  img.width = 560;

  homeImg.appendChild(img);

  article.appendChild(homeImg);

  return article;
};

export default { getContent };
