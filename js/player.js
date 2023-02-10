import playList from './playList.js';

const audio = new Audio();
const btnPlay = document.querySelector('.play');
const btnPrev = document.querySelector('.play-prev');
const btnNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
let isPlay = false;
let playNum = 0;

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
}

btnPlay.addEventListener('click', () => {
  (isPlay) ? pauseAudio() : playAudio();
  btnPlay.classList.toggle('pause');
})

function addPlayList() {
  playList.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('play-list__item');
    li.textContent = `${item.title}`;
    playListContainer.append(li);
  });
}

window.addEventListener('load', addPlayList());

const playListItems = document.querySelectorAll('.play-list__item');
playListItems[0].classList.add('play-list__item_active');

function removeItemActive() {
  playListItems.forEach((item) => item.classList.remove('play-list__item_active'));
}


playListItems.forEach(item => {
  item.addEventListener('click', (e) => {
    removeItemActive();
    const songs = Array.from(e.target.parentNode.children);
    const selectedSong = e.target;
    playNum = songs.indexOf(selectedSong);
    selectedSong.classList.add('play-list__item_active');
    (isPlay) ? playAudio() : pauseAudio();
  });
})

btnPrev.addEventListener('click', () => {
  (playNum > 0) ? playNum-- : playNum = playListItems.length - 1;
  removeItemActive();
  playListItems[playNum].classList.add('play-list__item_active');
  playListItems[playNum].scrollIntoView();
  if (isPlay === true) playAudio();
})

btnNext.addEventListener('click', () => {
  (playNum < playListItems.length - 1) ? playNum++ : playNum = 0;
  removeItemActive();
  playListItems[playNum].classList.add('play-list__item_active');
  playListItems[playNum].scrollIntoView();
  if (isPlay === true) playAudio();
})
