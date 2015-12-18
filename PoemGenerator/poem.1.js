var isClicked = false; 
var flower =["long","years","help","right","change",
            "always","took","let","idea","leave","family",
            "against","less","government","force",
            "return","matter","can't","appear",
            "continued","law","symbols","alone",
            "choose","information","recieved","caught",
            "silent","action","opposite","repeated","quiet"
            ];
var bike = ["was","new","end","change",
            "old","move","every",
            "few","owned","passed","less","main",
            "gone","past","per","killed","lost",
            "crowd","conditions",
            "then","copy","same","own","ready","already","slowly",
            "repeated","developed","grow",
            "control"];
var steel = ["were","live","matters","mother","found",
            "right","should","children","left","below",
            "lost","leave","family","under",
            "covered","cried","passed","remember",
            "nothing","built","gone","love","past","died",
            "killed","break",
            "student","feeling","safe","death",
            "dead","action"];
var sunflowerseed = ["change","past","people","long",
            "time","same","repeated","important","enough",
            "leave","order","listen","red",
            "stand","voice","sun","government","against","force",
            "he","true","can't","amount",
            "common","million","nation","killed",
            "quiet","lead","pushed","control",
            "information","silent"];
var vase = ["cover","change","found","study",
            "own","country","real","keep",
            "under","voice","covered","questions",
            "passed","surface","government",
            "stay","discovered",
            "instead","appear","remain","silent",
            "modern","value","death","dead",
            "killed"];

var icon = ["bike.png", "flower.png", "steel.png", "sunflowerseed.png","vase.png"];



// $(".tf").click(function(){
//     $(".flowertext").html(flower[Math.floor(Math.random()*flower.length)]);
// })

$('.button').click(function() {
    $('.intro-text').fadeOut();
});


$(".flower").click(function(){
    var flowerCheck = flower[Math.floor(Math.random()*flower.length)];
    $(".flowertext").html(flowerCheck);
    isClicked = false;
    if (flowerCheck == "long") {
        isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "right") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
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
        $('.flowertext').html('');
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
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "less") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(bike.png)');
    } else if (flowerCheck == "government") {
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
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
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "recieved") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
    } else if (flowerCheck == "silent") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(vase.png)');
    } else if (flowerCheck == "action") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(steel.png)');
    } else if (flowerCheck == "repeated") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(bike.png)');
    } else if (flowerCheck == "quiet") {
         isClicked = true;
        $('.flower').css('background-image','none');
        $('.flowertext').html('');
        $('.flowertext').css('background-image', 'url(sunflowerseed.png)');
        $('.flowertext').css('background-image', 'url(bike.png)');
    }else {
        $('.flowertext').html(flowerCheck);
        $('.flower').css('background-image', 'none');
         $('.flowertext').css('background-image', 'none');
    }
    console.log(isClicked);
});

$(".bike").click(function(){
    var bikeCheck = bike[Math.floor(Math.random()*bike.length)];
    $(".biketext").html(bikeCheck);
    isClicked = false;
    if (bikeCheck == "change") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "passed") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "less") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
    } else if (bikeCheck == "gone") {
         isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
    } else if (bikeCheck == "past") {
         isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "killed") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
        $('.biketext').css('background-image', 'url(steel.png)');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if(bikeCheck == "lost") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(steel.png)');
    } else if (bikeCheck == "same") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "own") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(vase.png)');
    } else if (bikeCheck == "repeated") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(flower.png)');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    } else if (bikeCheck == "control") {
        isClicked = true;
        $('.bike').css('background-image','none');
        $('.biketext').html('');
        $('.biketext').css('background-image', 'url(sunflowerseed.png)');
    }else {
        $('.biketext').html(bikeCheck);
        $('.bike').css('background-image', 'none');
        $('.biketext').css('background-image', 'none');
    }
    console.log(isClicked);
});

$(".sunflowerseed").click(function(){
    var sunflowerseedCheck = sunflowerseed[Math.floor(Math.random()*sunflowerseed.length)];
    $(".sunflowerseedtext").html(sunflowerseedCheck);
    isClicked = false;
    if (sunflowerseedCheck == "change") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "passed") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "long") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "same") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "repeated") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "study") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "leave") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "voice") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "idea") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "government") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    } else if (sunflowerseedCheck == "against") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "force") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "can't") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "against") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(steel.png)');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "quiet") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "control") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(bike.png)');
    } else if (sunflowerseedCheck == "information") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "recieved") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
    } else if (sunflowerseedCheck == "silent") {
        isClicked = true;
        $('.sunflowerseed').css('background-image','none');
        $('.sunflowerseedtext').html('');
        $('.sunflowerseedtext').css('background-image', 'url(flower.png)');
        $('.sunflowerseedtext').css('background-image', 'url(vase.png)');
    }else {
        $('.sunflowerseedtext').html(sunflowerseedCheck);
        $('.sunflowerseed').css('background-image', 'none');
        $('.sunflowerseedtext').css('background-image', 'none');
    }
    console.log(isClicked);
});

$(".vase").click(function(){
    var vaseCheck = vase[Math.floor(Math.random()*vase.length)];
    $(".vasetext").html(vaseCheck);
    isClicked = false;
    if (vaseCheck == "change") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(bike.png)');
        $('.vasetext').css('background-image', 'url(flower.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "passed") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "passed") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "study") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "voice") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "government") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
        $('.vasetext').css('background-image', 'url(flower.png)');
    } else if (vaseCheck == "killed") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
         $('.vasetext').css('background-image', 'url(bike.png)');
    } else if (vaseCheck == "silent") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(flower.png)');
        $('.vasetext').css('background-image', 'url(sunflowerseed.png)');
    } else if (vaseCheck == "found") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "own") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(bike.png)');
    } else if (vaseCheck == "under") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "covered") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "appear") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(flower.png)');
    } else if (vaseCheck == "death") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    } else if (vaseCheck == "dead") {
        isClicked = true;
        $('.vase').css('background-image','none');
        $('.vasetext').html('');
        $('.vasetext').css('background-image', 'url(steel.png)');
    }else {
        $('.vasetext').html(vaseCheck);
        $('.vase').css('background-image', 'none');
        $('.vasetext').css('background-image', 'none');
    }
    console.log(isClicked);
});

$(".steel").click(function(){
    var steelCheck = steel[Math.floor(Math.random()*steel.length)];
    $(".steeltext").html(steelCheck);
    isClicked = false;
    if (steelCheck == "passed") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
    } else if (steelCheck == "killed") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "found") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "under") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "covered") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "death") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "dead") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(vase.png)');
    } else if (steelCheck == "right") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');
    } else if (steelCheck == "lost") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
    } else if (steelCheck == "leave") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');
    } else if (steelCheck == "family") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)'); 
    } else if (steelCheck == "gone") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');
    } else if (steelCheck == "past") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(bike.png)');  
        $('.steeltext').css('background-image', 'url(sunflowerseed.png)');  
    } else if (steelCheck == "action") {
        isClicked = true;
        $('.steel').css('background-image','none');
        $('.steeltext').html('');
        $('.steeltext').css('background-image', 'url(flower.png)');  
    }else {
        $('.steel').css('background-image','none');
        $('.steeltext').html(steelCheck);
        $('.steel').css('background-image', 'none');
        $('.steeltext').css('background-image', 'none');
    }
    console.log(isClicked);
});


$(document).keyup(function(e){
     if (e.keyCode === 32) {
        location.reload();
     }
 });

