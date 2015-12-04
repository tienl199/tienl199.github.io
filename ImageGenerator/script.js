var shoes = ["n1.jpg", "n2.jpg", "n3.jpg", "n4.jpg"];
var shoes2 = ["r1.jpg","r2.jpg", "r3.jpg","r4.jpg"];
var shoes3 = ["b1.jpg","b2.jpg", "b3.jpg","b4.jpg"];
var pressed = false;
var randomShoe;
var randomShoe2;
var randomShoe3;

for (var i = 0; i <80; i++){
    var randomShoe = shoes[Math.floor(Math.random()*4)];
    var numVar = i + 1;
    $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
}


    $('body').mousemove(function(){
            $('body').html("");
      if (pressed == false){
      console.log("working");
        randomShoe = shoes[Math.floor(Math.random()*4)];
        for (var i = 0; i <100; i++){
              var randomShoe = shoes[Math.floor(Math.random()*4)];
              var numVar = i + 1;
              $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
          }   
      } else {
            randomShoe2 = shoes2[Math.floor(Math.random()*4)];
    for (var i = 0; i <100; i++){
          var randomShoe2 = shoes2[Math.floor(Math.random()*4)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
      }
      }
    });
    

    $('body').click(function() {
           $('body').html("");
      if (pressed == false){
    randomShoe2 = shoes2[Math.floor(Math.random()*4)];
    for (var i = 0; i <100; i++){
          var randomShoe2 = shoes2[Math.floor(Math.random()*4)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
    }
      } else {
            randomShoe = shoes[Math.floor(Math.random()*4)];
        for (var i = 0; i <100; i++){
              var randomShoe = shoes[Math.floor(Math.random()*4)];
              var numVar = i + 1;
              $("body").append('<div class="square"><img src="' + randomShoe + '"></div>')
      }
      }
});

 $(window).resize(function() {
           $('body').html("");
    randomShoe3 = shoes3[Math.floor(Math.random()*4)];
    for (var i = 0; i <100; i++){
          var randomShoe3 = shoes3[Math.floor(Math.random()*4)];
          var numVar = i + 1;
          $("body").append('<div class="square"><img src="' + randomShoe3 + '"></div>')
    }
});


    
//     ').mousemove(function(){
//       $('body').html("");
//       console.log("working");
//         randomShoe2 = shoes2[Math.floor(Math.random()*4)];
//         for (var i = 0; i <100; i++){
//               var randomShoe2 = shoes2[Math.floor(Math.random()*4)];
//               var numVar = i + 1;
//               $("body").append('<div class="square"><img src="' + randomShoe2 + '"></div>')
//           }   
//     });  
      
//     }
      
//   }
  
//   });

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




