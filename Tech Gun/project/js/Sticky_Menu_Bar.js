window.addEventListener("scroll", function () {
  let navbar = document.getElementById("menu-bar");
  if (window.pageYOffset >= 150) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
