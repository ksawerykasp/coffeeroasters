const toggleMenu = document.querySelector(".navbar__menu__icon");
const toggleMenuIcon = document.querySelector(".navbar__menu__icon--content");
const toggleList = document.querySelector(".navbar__menu__list--off");

const activeToggleMenu = () =>
{
    toggleMenuIcon.classList.toggle("navbar__menu__icon--content--active");
    toggleList.classList.toggle("navbar__menu__list--on");
}

toggleMenu.addEventListener("click", activeToggleMenu)