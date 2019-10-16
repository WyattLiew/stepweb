/** Hambyrger menu function */
function mainNarbarFunction() {
  var x = document.getElementById("myTopnav");
  var menu = document.getElementById("menu");
  menu.classList.remove("fa-bars");
  if (x.className === "navbar__ul") {
    x.className += " responsive";
    menu.classList.add("fa-times");

  } else {
    x.className = "navbar__ul";
    menu.classList.remove("fa-times");
    menu.classList.add("fa-bars");

  }