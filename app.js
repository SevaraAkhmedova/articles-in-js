let data = [
  {
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    title: "Mac M1 Air",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 5,
    price: "14.99",
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    title: "Mac M2 Pro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 4,
    price: "24.99",
  },
  {
    img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "HP Pavilion",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 2,
    price: "34.99",
  },
  {
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Asus Zenbook",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 1,
    price: "44.99",
  },
  {
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    title: "Windows ultrabook",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 5,
    price: "54.99",
  },
  {
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Mac M1 Pro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 4,
    price: "64.99",
  },
  {
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Asus Zenbook",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, beatae? Quidem veritatis amet fugit perspiciatis dolore recusandae eum odit accusantium velit porro explicabo sunt ipsam ab, provident, adipisci nihil harum.",
    rank: 3,
    price: "44.99",
  },
];

let container = document.getElementById("container");
let count = document.querySelector(".count");
let cartCount = 0;

function renderStars(count) {
  let starWithoutClr = "☆";
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars += "★";
  }

  for (let i = 0; i < 5 - count; i++) {
    stars += "☆";
  }
  return stars;
}

data.map((product) => {
  let article = document.createElement("article");
  article.innerHTML = `
    <img
    src=${product.img}
    alt=""
    />
    <h1>${product.title}</h1>
    <p>
    ${product.description}
    </p>
    <div class="price">
    <p> ${renderStars(product.rank)}</p>
    <p>$${product.price}</p>
    </div>
    <button id="buyBtn">Buy Now</button>
  `;
  container.append(article);
});

let buyBtn = document.querySelectorAll("#buyBtn");
console.log(buyBtn);

buyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    count.textContent = cartCount;
    btn.disabled = true;
    btn.textContent = "In Cart ";
    btn.style.border = "2px solid red";
    btn.style.color = "red";
  });
});
