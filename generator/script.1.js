
var shoe = ["n1.jpg", "n2.jpg", "n3.jpg", "n4.png", "n5.jpg"];


for (var increment = 0; increment < 100; increment++) {
  $("body").append('<div class="square1"></div>');
  $("body").append('<div class="square2"></div>');
  $("body").append('<div class="square3"></div>');
  $("body").append('<div class="square4"></div>');
  $("body").append('<div class="square5"></div>');
}

var randomShoe = shoe[Math.floor(Math.random()*5)];

function makePattern() {
  $(".square1").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

function makePattern() {
  $(".square2").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

function makePattern() {
  $(".square3").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

function makePattern() {
  $(".square4").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

function makePattern() {
  $(".square5").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);
});

}

$(".square1").click(function(){
  makePattern();
})


$(".square2").click(function(){
  makePattern();
})

$(".square3").click(function(){
  makePattern();
})

$(".square4").click(function(){
  makePattern();
})

$(".square5").click(function(){
  makePattern();
})

// function makePattern() {
//   $(".square").each(function() {
//   // var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
//   // var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
//   // $(this).css("top",topPosition).css("left",leftPosition);
//   var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   $(this).css("background-color",newColor);
// //  var size = Math.floor(Math.random()*500) + "px";
// //   $(this).css("width",size).css("height",size);
// //   $(this).css("background-size",size);
// });
// }

// $(".square").click(function(){
//   makePattern();
// })

// $(".square1").mousemove(function(){
//   makePattern();
// })