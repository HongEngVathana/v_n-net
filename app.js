let menuIcon = document.querySelector("#menu_icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,poortfolio-box,.contact form",
  {
    origin: "buttom",
  }
);
ScrollReveal().reveal(".home-contect h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-contect p,about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Cleaner Developer🧹🧹🧹", "Web Cleaner Developer💥", "Cute boy😜"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
