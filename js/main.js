const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__item");

// var intFrameWidth = window.innerWidth;
// console.log(intFrameWidth);

var width, height;
window.onresize = window.onload = function () {
  width = this.innerWidth;
  height = this.innerHeight;
  if (this.width > 768) {
    if (menuBtn.classList.length > 1) {
      this.closeNav();
      console.log("closed");
    }
  }
};

function closeNav() {
  menuBtn.classList.remove("open");
  nav.classList.remove("open");
  navList.classList.remove("open");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("fade");
  });
  // document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("open");
  navList.classList.toggle("open");
  navLinks.forEach((navLink) => {
    navLink.classList.toggle("fade");
  });
});
