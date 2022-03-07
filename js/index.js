

const mynav = document.getElementById('nav');
const vis = document.getElementById('vishd');
const visimg = document.getElementById('imge');


window.onscroll = function(){
    "use strict";
    if(document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280){
        mynav.style.backgroundColor = '#810000';
        visimg.style.display='none';
        vis.style.display='block';
        
      }
      else{
        mynav.style.backgroundColor = '#000';
        visimg.style.animation='rotate 1s linear';
        vis.style.display='none';
        visimg.style.display='block';
        
    }
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 2 seconds
} 