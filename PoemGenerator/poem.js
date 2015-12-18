var isClicked = false; 
var flower =["in","go","long","take","years","me",
            "help","right","want","change","away",
            "close","hard","life","always","took",
            "let","idea","talk","leave","family",
            "hundred","against","truth",
            "less","government","explain","force",
            "return","matter","can't","flowers","appear",
            "continued","law","symbols","alone",
            "choose","information","recieved","caught",
            "silent","action","opposite","repeated","quiet"
            ];
var bike = ["was","have","from","new","end","change",
            "old","easy","small","move","every",
            "few","owned","passed","less","main",
            "gone","past","per","killed","lost",
            "crowd","loud","division","conditions",
            "then","much","copy",
            "same","own","ready","already","slowly",
            "repeated","developed","grow",
            "control"];
var steel = ["were","not","make","live",
            "matters","means","mother","went","found",
            "right","should","children","left","below",
            "lost","last","leave","family","under",
            "covered","cried","passed","remember",
            "nothing","person","bring",
            "built","gone","love","past","died",
            "killed","result","baby","break",
            "student","feeling","safe","death",
            "dead","action"];
var sunflowerseed = ["change","past","pass","people","like","long",
            "time","look","same","give","repeated",
            "think","study","important","high","enough",
            "leave","order","listen","red","pulled",
            "stand","voice","sun","him",
            "idea","government","against","force",
            "he","true","can't","amount","brought",
            "common","million","nation","killed",
            "quiet","lead","pushed","control",
            "information","recieved","silent"];
var vase = ["made","cover","change","found","study","miss",
            "own","country","real","keep","never",
            "under","voice","covered","questions","seen",
            "passed","done","surface","government","fact",
            "stay","ago","no","discovered",
            "instead","appear","remain","silent",
            "modern","value","block","death","dead",
            "killed","view"];

var icon = ["bike.png", "flower.png", "steel.png", "sunflowerseed.png","vase.png"];

var ranIcon;



// $(".tf").click(function(){
//     $(".flowertext").html(flower[Math.floor(Math.random()*flower.length)]);
// })


$(".flower").click(function(){
    var flowerCheck = flower[Math.floor(Math.random()*flower.length)];
    $(".flowertext").html(flowerCheck);
    isClicked = false;
    if (flowerCheck == "long") {
        isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "right") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(steel.png)');
    } else if (flowerCheck == "change") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(bike.png)');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(vase.png)');
    } else if (flowerCheck == "leave") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(steel.png)');
    } else if (flowerCheck == "family") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(steel.png)');
    } else if (flowerCheck == "against") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "less") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(bike.png)');
    } else if (flowerCheck == "government") {
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(vase.png)');
    } else if (flowerCheck == "appear") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(vase.png)');
    } else if (flowerCheck == "information") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "recieved") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "silent") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(vase.png)');
    } else if (flowerCheck == "action") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(steel.png)');
    } else if (flowerCheck == "repeated") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.floewrtext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(bike.png)');
    } else if (flowerCheck == "quiet") {
    //      isClicked = true;
    //     $('.floewrtext').html('');
    //     $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    //     $('.flowertext').css('background-image', 'url(bike.png)');
    }else {
        $('.flowertext').html(flowerCheck);
        $('.flower').css('background-image', 'none');
         $('.flowertext').css('background-image', 'none');
    }
    console.log(isClicked);
})

$(".bike").click(function(){
    var bikeCheck = bike[Math.floor(Math.random()*bike.length)];
    $(".biketext").html(bikeCheck);
    isClicked = false;
    if (bikeCheck == "change") {
        isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "passed") {
        isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "less") {
        isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
    } else if (bikeCheck == "gone") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
    } else if (bikeCheck == "past") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "killed") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if(bikeCheck == "lost") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
    } else if (bikeCheck == "same") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "own") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "repeated") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "control") {
         isClicked = true;
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    }else {
        $('.biketext').html(bikeCheck);
        $('.bike').css('background-image', 'none');
        $('.biketext').css('background-image', 'none');
    }
    console.log(isClicked);
})

$(".sunflowerseed").click(function(){
    var sunflowerseedCheck = sunflowerseed[Math.floor(Math.random()*sunflowerseed.length)];
    $(".sunflowerseedtext").html(sunflowerseedCheck);
    isClicked = false;
    if (sunflowerseedCheck == "change") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "passed") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "long") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "same") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "repeated") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "study") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "leave") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "voice") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "idea") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "government") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "against") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "force") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "can't") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "against") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "quiet") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "control") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "information") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "recieved") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "silent") {
        isClicked = true;
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    }else {
        $('.sunflowerseedtext').html(sunflowerseedCheck);
        $('.sunflowerseed').css('background-image', 'none');
        $('.sunflowerseedtext').css('background-image', 'none');
    }
    console.log(isClicked);
})

$(".vase").click(function(){
    var vaseCheck = vase[Math.floor(Math.random()*vase.length)];
    $(".vasetext").html(vaseCheck);
    isClicked = false;
    if (vaseCheck == "change") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(bike.png)');
        $('.vasetext').css('background-image', 'url(flower.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "passed") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "passed") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "study") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "voice") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "government") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
        $('.vasetext').css('background-image', 'url(flower.png)');
    } else if (vaseCheck == "killed") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
         $('.vasetext').css('background-image', 'url(bike.png)');
    } else if (vaseCheck == "silent") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(flower.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "found") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "own") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(bike.png)');
    } else if (vaseCheck == "under") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "covered") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "appear") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(flower.png)');
    } else if (vaseCheck == "death") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "dead") {
        isClicked = true;
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    }else {
        $('.vasetext').html(vaseCheck);
        $('.vase').css('background-image', 'none');
        $('.vasetext').css('background-image', 'none');
    }
    console.log(isClicked);
})

$(".steel").click(function(){
    var steelCheck = steel[Math.floor(Math.random()*steel.length)];
    $(".steeltext").html(steelCheck);
    isClicked = false;
    if (steelCheck == "passed") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
    } else if (steelCheck == "killed") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "found") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "under") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "covered") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "death") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "dead") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "right") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');
    } else if (steelCheck == "lost") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
    } else if (steelCheck == "leave") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
    } else if (steelCheck == "family") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)'); 
    } else if (steelCheck == "gone") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
    } else if (steelCheck == "past") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');  
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');  
    } else if (steelCheck == "action") {
        isClicked = true;
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');  
    }else {
        $('.steeltext').html(steelCheck);
        $('.steel').css('background-image', 'none');
        $('.steeltext').css('background-image', 'none');
    }
    console.log(isClicked);
})

$("body").click(function(){
    $('.flower').html("");
    icon[Math.floor(Math.random()*icon.length)];
})

// $( window ).scroll(function() {
//   $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
// });



// // if (isClicked == true) {
//     // console.log("wooo");
//     $(".flowertext").click(function(){
//         $(".flowertext2").html(flower[Math.floor(Math.random()*flower.length)]);
//         var flowerCheck = flower[Math.floor(Math.random()*flower.length)];
//     $(".flowertext2").html(flowerCheck);
//     isClicked = false;
//     if (flowerCheck == "long") {
//         isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//     } else if (flowerCheck == "right") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(steel.png)');
//     } else if (flowerCheck == "change") {
//          isClicked = true;
//         $('.flowertext2').css('background-image', 'url(bike.png)');
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(vase.png)');
//     } else if (flowerCheck == "leave") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(steel.png)');
//     } else if (flowerCheck == "family") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(steel.png)');
//     } else if (flowerCheck == "against") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//     } else if (flowerCheck == "less") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(bike.png)');
//     } else if (flowerCheck == "government") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(vase.png)');
//     } else if (flowerCheck == "appear") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(vase.png)');
//     } else if (flowerCheck == "information") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//     } else if (flowerCheck == "recieved") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//     } else if (flowerCheck == "silent") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(vase.png)');
//     } else if (flowerCheck == "action") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(steel.png)');
//     } else if (flowerCheck == "repeated") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext22').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(bike.png)');
//     } else if (flowerCheck == "quiet") {
//          isClicked = true;
//         $('.flowertext2').html('');
//         $('.flowertext2').css('background-image', 'url(sunflowerseed.png)');
//         $('.flowertext2').css('background-image', 'url(bike.png)');
//     }else {
//         $('.flowertext2').html(flowerCheck);
//         $('.flower').css('background-image', 'none');
//         $('.flowertext2').css('background-image', 'none');
//     }
//     console.log(isClicked);
// })

//         $('.flower').css('background-image', 'none');
//     });
// // }

// for (var i = 0; i <15; i++){
//     var randomflowerpng = flowerpng[Math.floor(Math.random()*1)];
//     $("flower").html('<div class="square"><img src="' + randomflowerpng + '"></div>')
// }