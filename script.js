TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
TweenMax.from(".nav-elements", 1, {
  opacity: 0,
  x: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".blob", 1, {
  opacity: 0,
  delay: 1.4,
  y: -20,
  ease: Expo.easeInOut,
});

TweenMax.from(".hero-body", 1, {
  opacity: 0,
  delay: 0.5,
  y: 40,
  ease: Expo.easeInOut,
});

// TweenMax.staggerFrom(".nav-elements a", 1, {
//     opacity: 0,
//     delay: .5,
//     x: 40,
//     ease: Power3.easeInOut
// }, 0.08)

// TweenMax.from(".menu", 1, {
//     opacity: 0,
//     delay: .6,
//     x: -20,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".title", 1, {
//     opacity: 0,
//     delay: 1,
//     y: 20,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".btn", 1, {
//     opacity: 0,
//     delay: 1.6,
//     y: 20,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".line-one", 1, {
//     opacity: 0,
//     delay: 2,
//     y: -800,
//     ease: Expo.easeInOut
// })
// TweenMax.from(".line-two", 1, {
//     opacity: 0,
//     delay: 2.5,
//     y: -800,
//     ease: Expo.easeInOut
// })

// TweenMax.from(".img", 2, {
//     opacity: 0,
//     delay: 2.9,
//     y: -800,
//     ease: Expo.easeInOut
// })

// TweenMax.staggerFrom(".media ul li", 2, {
//     opacity: 0,
//     delay: 3.2,
//     y: 40,
//     ease: Expo.easeInOut
// }, 0.2)
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
