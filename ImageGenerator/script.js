var shoes = ["n1.jpg", "n2.jpg", "n3.jpg", "n4.jpg", "n5.jpg"];
var shoes2 = ["r1.jpg","r2.jpg", "r3.jpg","r4.jpg","r5.jpg","r6.jpg","r7.jpg"];
var pressed = false;
var randomShoe;
var randomShoe2;

for (var i = 0; i <100; i++){
    var randomShoe = shoes[Math.floor(Math.random()*5)];
    var numVar = i + 1;
    $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
}


    $('body').mousemove(function(){
            $('body').html("");

      if (pressed == false){
      console.log("working");
        randomShoe = shoes[Math.floor(Math.random()*5)];
        for (var i = 0; i <100; i++){
              var randomShoe = shoes[Math.floor(Math.random()*5)];
              var numVar = i + 1;
              $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
          }   
      } else {
            randomShoe2 = shoes2[Math.floor(Math.random()*7)];
    for (var i = 0; i <100; i++){
          var randomShoe2 = shoes2[Math.floor(Math.random()*7)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
      }
      }
    });
// }else{ 


$('body').click(function() {
    $('body').html("");
  if (pressed == false){
    randomShoe2 = shoes2[Math.floor(Math.random()*7)];
    for (var i = 0; i <100; i++){
          var randomShoe2 = shoes2[Math.floor(Math.random()*7)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
      }
      pressed = true;
  }else{
    randomShoe = shoes[Math.floor(Math.random()*5)];
    for (var i = 0; i <100; i++){
          var randomShoe = shoes[Math.floor(Math.random()*5)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
    $('body').mousemove(function(){
      $('body').html("");
      console.log("working");
        randomShoe2 = shoes2[Math.floor(Math.random()*7)];
        for (var i = 0; i <100; i++){
              var randomShoe2 = shoes2[Math.floor(Math.random()*7)];
              var numVar = i + 1;
              $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
          }   
    });  
      
    }
      
  }
  
  });

// $('.square').mousemove(function(){
//   var randomShoe2 = shoes2[Math.floor(Math.random()*7)];
//   if (pressed == false){
//     randomShoe2 = shoes2[Math.floor(Math.random()*7)];
//     $('.square').html('<img src = "' + randomShoe2 + '"/>')
//     pressed == true;
//   }else{
//     $('.square').html('<img src = "' + randomShoe2 + '"/>')

//     pressed = false;
//   }
// });




