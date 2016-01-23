var video = document.getElementsByTagName("video")[0];

//Hide and Show Buttons
$('.mejs-button, .mejs-currenttime, .mejs-duration , .mejs-time span').css("display", "none");
$('.mejs-skin, .mejs-time-rail').mouseenter(function () {$('.mejs-button , .mejs-currenttime , .mejs-time span').css("display", "block"); });
$('.mejs-skin').mouseleave(function () {$('.mejs-button , .mejs-currenttime, .mejs-time span').css("display", "none"); });

//Remove script highlight on click
$("p , button , .mejs-time-rail ").click(function () { $('p').removeClass("hlight"); });

//Highlight text based on position of video
video.addEventListener("timeupdate", function () {
    if (video.currentTime < 7.53) {$("#1").addClass("hlight"); } else if (video.currentTime <= 17.9) {
        $("#2").addClass("hlight");
        $("#1").removeClass("hlight");
    } else if (video.currentTime <= 32) { $("#3").addClass("hlight");
         $("#2").removeClass("hlight"); } else if (video.currentTime <= 42) { $("#4").addClass("hlight");
         $("#3").removeClass("hlight"); } else if (video.currentTime <= 53) { $("#5").addClass("hlight");
         $("#4").removeClass("hlight"); } else if (video.currentTime <= 60) { $("#6").addClass("hlight");
          $("#5").removeClass("hlight"); }
});

//link video with paragraph   
$("#1").click(function () {
    video.currentTime = 0;
    video.play();
});
$("#2").click(function () {
    video.currentTime = 8;
    video.play();
});
$("#3").click(function () {
    video.currentTime = 17;
    video.play();
});
$("#4").click(function () {
    video.currentTime = 32;
    video.play();
});
$("#5").click(function () {
    video.currentTime = 42;
    video.play();
});
$("#6").click(function () {
    video.currentTime = 53;
    video.play();
});