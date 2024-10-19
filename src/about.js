import chickenSandwichImg from "./assets/images/chicken-sandwich.png";

const PARAGRAPHS = [
  `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit et eveniet, fugiat earum accusantium nisi
    optio veritatis perferendis ratione nobis quae temporibus harum, eligendi iure cumque ab deserunt illum
    explicabo voluptates nulla debitis sapiente. Eaque excepturi accusantium optio nulla maiores culpa officia
    iste illum laborum officiis, molestias deserunt rem veniam magni nam odit corrupti quo amet. Accusantium
    voluptatibus excepturi repudiandae, ipsa veniam consequatur in commodi, soluta voluptatum quis temporibus
    deserunt dolor porro dolorem eaque voluptates quam. Maiores illum molestias est iste, non odit praesentium
    delectus saepe modi quidem architecto ab voluptates laboriosam quam ad tempora rerum voluptatem consectetur
    laborum debitis.
  `,
  `
    Iusto obcaecati deserunt architecto tenetur laudantium nesciunt perferendis fuga, commodi quis, sunt
    inventore molestias maxime recusandae doloremque temporibus modi at, qui corporis magni voluptas. Accusamus
    sit cum, sint ad cupiditate eum numquam? Fugit possimus distinctio libero, quisquam excepturi, a quod qui
    ratione veritatis repudiandae earum error facere ducimus dolorum optio quaerat debitis. Amet, vel adipisci?
    Laudantium perspiciatis esse quod exercitationem cum nam, nihil in. Aliquid, omnis eaque. Est ut adipisci
    similique vel ea temporibus exercitationem obcaecati quam fuga, facilis rerum? Illo, eaque id? Voluptates
    facilis eos nam beatae, esse voluptatibus, asperiores minus provident ad quod soluta alias. Fuga, voluptates
    perferendis.
  `,
  `
  Illum illo aspernatur id eaque molestiae. Officia, fugit qui vel accusamus cum dolorum ea similique culpa
  aliquam incidunt iure quo nulla numquam tempore? Exercitationem dolore dolor laborum perspiciatis blanditiis
  sit neque repellendus pariatur harum provident, animi eveniet odit quisquam voluptatem voluptatibus eos
  earum ipsam cum impedit nam. Commodi adipisci harum pariatur totam quo suscipit tenetur at beatae voluptates
  quod recusandae non fugit earum numquam perferendis eius neque corrupti ab minus deleniti, animi
  perspiciatis? Consequuntur eaque delectus a inventore excepturi, deserunt tempora beatae illo nobis
  assumenda illum nisi obcaecati, quas porro dicta nulla quidem laboriosam temporibus aperiam ad itaque.
  Maxime, quibusdam.
  `,
];

const getContent = function () {
  const article = document.createElement("article");
  article.setAttribute("id", "about");

  const h1 = document.createElement("h1");
  h1.textContent = "About Us";
  article.appendChild(h1);

  const container = document.createElement("div");
  container.classList.add("container");

  const img = document.createElement("img");
  img.width = 560;
  img.src = chickenSandwichImg;
  img.alt = "chicken sandwich";
  container.appendChild(img);

  const div = document.createElement("div");

  PARAGRAPHS.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;

    const br = document.createElement("br");
    
    div.appendChild(p);
    div.appendChild(br);
  });

  container.appendChild(div);

  article.appendChild(container);

  return article;
};

export default { getContent };
