
// let marquee = document.querySelectorAll('.clipped-text');

// marquee.forEach(el => {
//   // set a default rate, the higher the value, the faster it is
//   let rate = 200;
//   // get the width of the element
//   let distance = el.clientWidth;
//   // get the margin-right of the element
//   let style = window.getComputedStyle(el);
//   let marginRight = parseInt(style.marginRight) || 0;
//   // get the total width of the element
//   let totalDistance = distance + marginRight;
//   // get the duration of the animation
//   // for a better explanation, see the quoted codepen in the first comment
//   let time = totalDistance / rate;
//   // get the parent of the element
//   let container = el.parentElement;

//   gsap.to(container,time,{
//     repeat: -1,
//     x: '-' + totalDistance,
//     ease: Linear.easeNone,
//   });
// });

