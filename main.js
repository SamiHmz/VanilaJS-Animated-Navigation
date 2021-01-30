const hamburgerMenu = document.getElementById("hamburger");
const menu = document.getElementById("navigation-menu");
const menuItems = menu.children;

function switchMenu() {
  hamburgerMenu.classList.toggle("change");
  const { x } = menu.getBoundingClientRect();

  if (x < 0) {
    menu.classList.add("slide-right");
    menuItemsAnimationToggle("in");
  } else {
    menu.classList.replace("slide-right", "slide-left");
    menuItemsAnimationToggle("out");
  }
}

function menuItemsEventListners() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", switchMenu);
  }
}

function menuItemsAnimationToggle(direction) {
  const currentDirection = direction === "out" ? "in" : "out";
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove(`slide-${currentDirection}-${i + 1}`);
    menuItems[i].classList.add(`slide-${direction}-${i + 1}`);
  }
}

// Event Listners
hamburgerMenu.addEventListener("click", switchMenu);
menuItemsEventListners();
