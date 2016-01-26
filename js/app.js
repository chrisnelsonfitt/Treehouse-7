/*jslint browser: true*/
/*global $, jQuery, alert*/
//MediaElement.js REQUIRED  
$('audio,video').mediaelementplayer({success: function (player, node) {  "use strict"; $('#' + node.id + '-mode').html('mode: ' + player.pluginType); },
                                     
        features: ["playpause", 'fullscreen', 'volume', 'current', 'duration', 'tracks', 'progress'],
                                     startLanguage: 'en',
        translationSelector: true,
        alwaysShowControls: true});

// Video Tag
var video = document.getElementsByTagName("video")[0];

//Hide and Show Buttons

$('.mejs-skin, .mejs-time-rail').mouseenter(function () {"use strict"; $('.mejs-button , .mejs-currenttime , .mejs-time span').css("display", "block"); });
$('.mejs-skin').mouseleave(function () { "use strict"; $('.mejs-button , .mejs-currenttime, .mejs-time span').css("display", "none"); });

//Remove script highlight on click
$("p , button , .mejs-time-rail ").click(function () { "use strict"; $('p').removeClass("hlight"); });

//Highlight text based on position of video
video.addEventListener("timeupdate", function () { "use strict"; if (video.currentTime < 8.255) {$("#1").addClass("hlight"); } else if (video.currentTime <= 17.9) { $("#2").addClass("hlight");
        $("#1").removeClass("hlight");
    } else if (video.currentTime <= 32) { $("#3").addClass("hlight");
         $("#2").removeClass("hlight"); } else if (video.currentTime <= 42) { $("#4").addClass("hlight");
         $("#3").removeClass("hlight"); } else if (video.currentTime <= 53) { $("#5").addClass("hlight");
         $("#4").removeClass("hlight"); } else if (video.currentTime <= 60) { $("#6").addClass("hlight");
          $("#5").removeClass("hlight"); } });

//link video with paragraph   
$("#1").click(function () { "use strict"; video.currentTime = 0; video.play(); });
$("#2").click(function () { "use strict"; video.currentTime = 8.255; video.play(); });
$("#3").click(function () { "use strict"; video.currentTime = 17.940; video.play(); });
$("#4").click(function () { "use strict"; video.currentTime = 32.100; video.play(); });
$("#5").click(function () { "use strict"; video.currentTime = 42.350; video.play(); });
$("#6").click(function () { "use strict"; video.currentTime = 53.760; video.play(); });