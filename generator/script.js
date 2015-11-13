var shoes = ["n1.jpg", "n2.jpg", "n3.jpg", "n4.jpg", "n5.jpg"];
var shoes2 = ["r1.jpg","r2.jpg", "r3.jpg","r4.jpg","r5.jpg","r6.jpg","r7.jpg"];
var pressed = false;
var randomShoe;
var randomShoe2;

for (var i = 0; i <100; i++){
     $("body").append('<div class="square"></div>');
     var randomShoe = shoes[Math.floor(Math.random()*5)];
    $("body").append('<div class="square"></div>');
    var randomShoe2 = shoes[Math.floor(Math.random()*5)];
}

$('.square').click(function(){
  var randomShoe = shoes[Math.floor(Math.random()*5)];
  if (pressed == false){
    randomShoe = shoes[Math.floor(Math.random()*5)];
    $('.square').html('<img src = "' + randomShoe + '"/>')
    pressed == true;
  }else{
    $('.square').html('<img src = "' + randomShoe + '"/>')

    pressed = false;
  }
})


$('.square').mousemove(function(){
  var randomShoe2 = shoes2[Math.floor(Math.random()*7)];
  if (pressed == false){
    randomShoe2 = shoes2[Math.floor(Math.random()*7)];
    $('.square').html('<img src = "' + randomShoe2 + '"/>')
    pressed == true;
  }else{
    $('.square').html('<img src = "' + randomShoe2 + '"/>')

    pressed = false;
  }
})




