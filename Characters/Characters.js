const links = document.querySelectorAll(".character-list a");

const image = document.querySelector("#character-image");

const mainImage = "Characters-img/90b10f5e3ac73c5d560e0931b9278ab6.jpg";

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    image.src = link.dataset.image;
  });

  link.addEventListener("mouseleave", () => {
    image.src = mainImage;
  });
});

const images = [
  "Characters-img/Group 5.svg",
  "Characters-img/Group 2.svg",
  "Characters-img/Group 6.svg",
  "Characters-img/Group 3.svg",
  "Characters-img/Group 1.svg",
  "Characters-img/Group 4 (2).png",
];

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});
