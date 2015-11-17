var t = ["un1.jpg", "un2.jpg", "un3.jpg"]
var pressed = false;
var tests

$(".container_all").click(function() {
  if (pressed == false){
    tests = t[Math.floor(Math.random()*3)];
    $(".container_all").append('<div class="test"><img src="' + tests + '"></div>')
    // var newTop = event.clientY + "px";
    // var NewLeft=event.clientX + "px";
    // $("").css("top",newTop);
    // $(".container_all").css("left",NewLeft);
       pressed = true;
  }else{
     $('.test').hide();
     pressed = false;
          }   
    });  
  