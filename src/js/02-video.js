import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate({ seconds }) {
  localStorage.setItem(key, seconds);
}

player.setCurrentTime(localStorage.getItem(key) || 0);
