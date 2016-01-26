//MediaElement.js REQUIRED  
$('audio,video').mediaelementplayer({success: function (player, node) {  "use strict"; $('#' + node.id + '-mode').html('mode: ' + player.pluginType); },
                                     
        features: ["playpause", 'fullscreen', 'volume', 'current', 'duration', 'tracks', 'progress'],
                                     startLanguage: 'en',
        translationSelector: true,
        alwaysShowControls: true});
