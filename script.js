document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

document.getElementById("topbtn").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
