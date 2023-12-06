function copyMenu() {
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".deparments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-convas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-convas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

let MenuButton = document.querySelector(".trigger");
let CloseButton = document.querySelector(".t-close");
let addClass = document.querySelector(".site");

MenuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});

CloseButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

const SubMenu = document.querySelectorAll(".has-child .icon-samll");
SubMenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  SubMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expend") : null
  );
  if (this.closest(".has-child").classList != "expend")
    this.closest(".has-child").classList.toggle("expend");
}

// slider --------------------------

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// show search---------------------------

const serchButton = document.querySelector(".t-search");
tClose = document.querySelector(".search-close");
showClose = document.querySelector(".site");
serchButton.addEventListener("click", function () {
  showClose.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClose.classList.remove("showsearch");
});
