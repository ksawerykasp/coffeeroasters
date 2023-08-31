const toggleButton = document.querySelector(".navbar__hamburger-button");

const toggleActive = () => {
  const toggleMenu = document.querySelector(".navbar__toggleMenu");
  const toggleButtonIcon = document.querySelector(".navbar__button-line");
  toggleMenu.classList.toggle("navbar__toggleMenu--active");
  toggleButtonIcon.classList.toggle("navbar__button-line--active");
  document.body.classList.toggle("overflow-body");
};

toggleButton.addEventListener("click", toggleActive);
