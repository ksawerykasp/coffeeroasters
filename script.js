const toggleButton = document.querySelector(".navbar__toggleButton");

const toggleActive = () =>
{
    const toggleMenu = document.querySelector(".navbar__toggleMenu")
    const toggleButtonIcon = document.querySelector(".navbar__toggleButton-icon")
    toggleMenu.classList.toggle("navbar__toggleMenu--active")
    toggleButtonIcon.classList.toggle("navbar__toggleButton-icon--active")
}

toggleButton.addEventListener("click", toggleActive);