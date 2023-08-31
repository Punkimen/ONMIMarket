// var fromm = document.getElementById("bga-min-m");
// var imgm = document.getElementById("bga-min-img-m");
//
// var widthm = fromm.offsetWidth;
// var width_tom = Number(widthm) *  0.52244;
// imgm.style.width = width_tom + 'px';

// console.log('aa2');
// var im_id = setInterval(function(){
//   console.log('aa');
//   setTimeout(function(){
//     var cursor = document.getElementById('cursor');
//     console.log('aa');
//     cursor.style.display = 'none';
//   }, 2000);
// }, 10000);

document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){
  setTimeout(function() {
    var from = document.getElementById("bga-min");
    var img = document.getElementById("bga-min-img");

    var width = from.offsetWidth;
    var width_to = Number(width) * 0.52244;
    console.log(from.offsetWidth);
    img.style.width = width_to + 'px';
  }, 1);
  setTimeout(function() {
    var from = document.getElementById("bga-min-m");
    var img = document.getElementById("bga-min-img-m");

    var width = from.offsetWidth;
    var width_to = Number(width) * 0.52244;
    console.log(from.offsetWidth);
    img.style.width = width_to + 'px';
  }, 1);
  setTimeout(function() {
    var from = document.getElementById("bga-min-r");
    var img = document.getElementById("bga-min-img-r");

    var width = from.offsetWidth;
    var width_to = Number(width) * 0.52244;
    var height_to = Number(width) / 2.0646837921 ;
    console.log(from.offsetWidth);
    img.style.width = width_to + 'px';
    // img.style.height = height_to + 'px';
  }, 10);
});
