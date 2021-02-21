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

/* CARUSEL */

/* for product */
// document.getElementById('carousel-control-next-icon').onclick = function () {
//    this.style.backgroundColor = "red";
// }