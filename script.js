let authors = document.querySelector(".author");
let image = document.querySelector("img");

let content = document.querySelector(".content");

let authorNames = ["Sagar", "Pranay", "Prem", "Amit"];

let count = 0;

let imgURL = [
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
];

let contentinfo = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto corrupti, voluptate deleniti recusandae similique omnis  Atque.",

  "   Lorem ipsum dolor, sit amet e, quaerat odit ipsa unde magni maxime facere omnis nisi.",

  "Lorem ipsum dolor sit amet consectetur",

  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolor consequatur quisquam quas excepturi ea molestiae  vero odit.",
];

function testimonial() {
  image.setAttribute("src", imgURL[count]);

  content.textContent = contentinfo[count];

  authors.textContent = authorNames[count];
  count++;

  if (count > authorNames.length - 1) {
    count = 0;
  }
}

setInterval(testimonial, 5000);
