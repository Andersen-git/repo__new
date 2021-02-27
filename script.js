const burger = document.querySelector(".burger");
const clothebtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".overlay .menu");

let isOpen = false;
burger.addEventListener("click", () => {
   isOpen = !isOpen;
   overlay.classList.toggle("open");
   console.log('Кнопка нажата');
   if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh"
      document.body.parentNode.style.overflowY = "scroll"
   }
   if (!isOpen) {
      document.body.style.overflow = null;
      document.body.style.height = null
      document.body.parentNode.style.overflowY = null
   }
});
clothebtn.addEventListener("click", () => {
   isOpen = !isOpen;
   overlay.classList.remove("open");
   document.body.style.overflow = null;
});

// onclick="document.getElementById('myImage').src='image/btn__cart--copy.svg'"
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'image/dest-next.svg') {
//       myImage.setAttribute ('src','image/dest-next_copy.svg');
//     } else {
//       myImage.setAttribute ('src','image/dest-next.svg');
//     }
// }




// document.querySelector(carousel-control-next-icon).onclick = function() {
//    content: url("image/dest-next_copy.svg"); 
// }
// const marker = document.querySelector(".filter_icon");
// const summary = document.querySelector(".filter__main__summary");

// let isFill = false;
// summary.addEventListener("click", () => {
//    isFill = !isFill;
//    marker.classList.toggle("fill");
// });
/* CARUSEL */

/* for product */
// document.getElementById('carousel-control-next-icon').onclick = function () {
//    this.style.backgroundColor = "red";
// }