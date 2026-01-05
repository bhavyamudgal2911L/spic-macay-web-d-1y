const navbar = document.querySelector("nav");
const header = document.querySelector("header");
const virasatBtn = document.querySelector(".virasat-button");
const OFFSET = 150;


window.addEventListener("scroll", () => {
  const headerHeight = header.offsetHeight + OFFSET;

  if (window.scrollY > headerHeight) {
    navbar.classList.add("fixed-position", "navbar-dark");
    navbar.classList.remove("homeNav");

    if (virasatBtn) {
      virasatBtn.classList.add("btn-outline-light");
    }
  } else {
    navbar.classList.remove("fixed-position", "navbar-dark");
    navbar.classList.add("homeNav");

    if (virasatBtn) {
      virasatBtn.classList.remove("btn-outline-light");
    }
  }
});
