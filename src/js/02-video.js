import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const KEY = "videoplayer-current-time"
const playEl = document.querySelector('#vimeo-player');
const player = new Player(playEl);

    player.on('timeupdate', throttle(function(data) {
        localStorage.setItem(KEY,data.seconds)
    },1000))
const dataVideo = JSON.parse(localStorage.getItem(KEY))
if (dataVideo) {
    player.setCurrentTime(dataVideo)
   
}
  
