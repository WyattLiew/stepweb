/** main-slider__bar selected dots */
var slideIndex,slides,dots;

function initMainSlides(){
    slideIndex = 0;
    slides = document.getElementsByClassName("main-slider__slide");
    slides[slideIndex].style.opacity=1;

    //add dots
    if(slides.length>1){
      
    dots=[];
    var dotsContainer=document.getElementById("main-slider__navigation"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("main-slider__bar");
        dotsContainer.append(dot);
        dot.setAttribute("onclick","showDivs("+i+")");
        dots.push(dot);
    }
    /** Take notes this**/
    dots[slideIndex].classList.add("main-slider__selected");
    }
    
}

initMainSlides();

function plusSlides(n) {
    showDivs(slideIndex+n);
}

function showDivs(n) {
  var i;
  var current,next;
  var moveSlideAnimClass={
      forCurrent:"",
      forNext:""
  };
  
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
    }

    if(n!=slideIndex){ 
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "main-slider__slide";
            slides[i].style.opacity=0;
            dots[i].classList.remove("main-slider__selected");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("main-slider__selected");
        slideIndex=n;
    }
  
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },10000);
}
setTimer();

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
}

$(document).scroll(function () {
    var y = $(window).scrollTop();
    if (y > 1200) {
        $('.animation-text').fadeIn(1000);
    } else {
        $('.animation-text').fadeOut("slow");
    }
    if (y > 300) {
        $('.animation-text__whatwebelieve').fadeIn(1000);
    } else {
        $('.animation-text__whatwebelieve').fadeOut();
    }

});
