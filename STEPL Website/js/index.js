/** main-slider__bar selected dots */
var slideIndex = 1;
showDivs(slideIndex);

function currentSlide(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("main-slider__slide");
  var dots = document.getElementsByClassName("main-slider__bar"); 
  // if (n > x.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = x.length}
  // for (i = 0; i < x.length; i++) {
  //   x[i].style.display = "none";  
  // }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" main-slider__selected", "");
  }
  // x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " main-slider__selected";
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar__ul") {
    x.className += " responsive";

  } else {
    x.className = "navbar__ul";
  }
}

