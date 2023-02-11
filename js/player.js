import playList from './playList.js';

const audio = new Audio();
const btnPlay = document.querySelector('.play');
const btnPrev = document.querySelector('.play-prev');
const btnNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const audioDuration = document.querySelector('.duration-time');
const audioCurrentTime = document.querySelector('.current-time');
const progress = document.querySelector('.progress');
const songTitle = document.querySelector('.song-title');
const muteBtn = document.querySelector('.unmute');
const volumeSlider = document.querySelector('.volume-slider');
let isPlay = false;
let playNum = 0;
let pauseTime = 0;

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
audioDuration.textContent = playList[0].duration;

playListItems.forEach(item => {
  item.addEventListener('click', (e) => {
    pauseTime = 0;
    removeItemActive();
    const songs = Array.from(e.target.parentNode.children);
    const selectedSong = e.target;
    playNum = songs.indexOf(selectedSong);
    (selectedSong.classList.contains('play-list__item_active')) ? pauseAudio() : playAudio();
    btnPlay.classList.add('pause');
  });
})

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = pauseTime;
  audioDuration.textContent = playList[playNum].duration;
  audio.play();
  addItemActive(playListItems[playNum]);
  btnPlay.classList.add('pause');
  songTitle.textContent = playList[playNum].title;
  isPlay = true;
  updateProgressBar();
}

function pauseAudio() {
  audio.pause();
  removeItemActive();
  btnPlay.classList.remove('pause');
  isPlay = false;
}

btnPlay.addEventListener('click', () => {
  (isPlay) ? pauseAudio() : playAudio();
  pauseTime = audio.currentTime;
})

function removeItemActive() {
  playListItems.forEach((item) => item.classList.remove('play-list__item_active'));
}

function addItemActive(item) {
  item.classList.add('play-list__item_active');
}

function getPrevSong() {
  (playNum > 0) ? playNum-- : playNum = playListItems.length - 1;
  pauseTime = 0;
  removeItemActive();
  playListItems[playNum].classList.add('play-list__item_active');
  playListItems[playNum].scrollIntoView();
}

function getNextSong() {
  (playNum < playListItems.length - 1) ? playNum++ : playNum = 0;
  removeItemActive();
  pauseTime = 0;
  playListItems[playNum].classList.add('play-list__item_active');
  playListItems[playNum].scrollIntoView();
}

btnPrev.addEventListener('click', () => {
  getPrevSong()
  if (isPlay === true) playAudio();
  ;
})

audio.addEventListener('ended', () => {
  getNextSong()
  if (isPlay === true) playAudio();
  audioDuration.textContent = playList[playNum].duration;
})

btnNext.addEventListener('click', () => {
  getNextSong()
  if (isPlay === true) {
    pauseTime = 0;
    playAudio();
  }
  audioDuration.textContent = playList[playNum].duration;
})

function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = `${audio.currentTime / audio.duration * 100}%`;
  audioCurrentTime.textContent = convertTime(audio.currentTime);
  const delay = 300;
  setTimeout(updateProgressBar, delay);
}

function convertTime(number) {
  let minutes = `${parseInt(parseInt(number)/60)}`;
  let seconds = `${parseInt(number) - minutes*60}`;
  minutes = minutes.padStart(2, '0');
  seconds = seconds.padStart(2, '0');
  return `${minutes}:${seconds}`
}

progress.addEventListener('click', (e) => {
  if (isPlay === true) {
    pauseTime = audio.duration * (e.offsetX / progress.offsetWidth);
    playAudio();
  } 
})

audio.volume = 0.5;

muteBtn.addEventListener('click', () => {
  muteBtn.classList.toggle('mute');
  if (audio.volume === 0) {
    audio.volume = 0.5;
    volumeSlider.value = 0.5;
  } else {
    audio.volume = 0;
    volumeSlider.value = 0;
  }
})

volumeSlider.addEventListener('change', () => {
  audio.volume = volumeSlider.value;
 (audio.volume === 0) ? muteBtn.classList.add('mute') : muteBtn.classList.remove('mute')
})