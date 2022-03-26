const mynav = document.getElementById('nav');
const vis = document.getElementById('vishd');
const visimg = document.getElementById('imge');

window.onscroll = function(){
    "use strict";
    // Addanimation();
    logoeffect();
}
function logoeffect(){
  if(document.body.scrollTop >= window.screen.height || document.documentElement.scrollTop >= window.screen.height){
    mynav.style.backgroundColor = '#810000';
  //   visimg.style.display='none';
  //   vis.style.display='block';
   }
  else{
    mynav.style.backgroundColor = '#000';
    // visimg.style.animation='rotate 1s linear';
    // vis.style.display='none';
    // visimg.style.display='block';
  }
}


// function SlideShow() {
//   var i;
//   var slides = document.querySelectorAll(".Containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = 'block';
//   setTimeout(SlideShow, 2000); // Change image every 2 seconds
// } 
// var slidePosition = 0;
// SlideShow();

// function Addanimation(){
//   const a = window.screen.height;
//   if(document.body.scrollTop >= a - 100 || document.documentElement.scrollTop >= a - 100 ){
//     document.getElementById('1').classList.add('fade-left');
//     document.getElementById('2').classList.add('fade-right');
  
//   }
//   if(document.body.scrollTop >= 2*a|| document.documentElement.scrollTop >= 2*a){
//     document.getElementById('3').classList.add('fade-left');
//     document.getElementById('4').classList.add('fade-right');
//   }
//   if(document.body.scrollTop >= 3*a || document.documentElement.scrollTop >= a*3){
//     document.getElementById('5').classList.add('fade-left');
//    }

//   }

const burgerbtn = document.getElementById('burger');
burger.onclick = function(){burgermenu()};

function burgermenu(){
  if(document.getElementById("list").style.opacity == 1){
    document.getElementById("list").style.height= '00';
    document.getElementById("list").style.opacity = 0;
  }
  else{
    document.getElementById("list").style.height= '300px';
  document.getElementById("list").style.opacity = 1;
  }
  
}