let menuIcon = document.querySelector("#menuIcon");
let menuItem = document.querySelector("#menuItem");
menuIcon.addEventListener("click",function () {

  menuItem.classList.toggle("hidden");

});

window.addEventListener("scroll",()=>{

  let nav = document.getElementById("navigationBar");
  nav.classList.toggle("navigationBar", window.scrollY > 100);

});