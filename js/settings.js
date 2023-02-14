const btnSettings = document.querySelector('.settings-button');
const settings = document.querySelector('.settings-list');

btnSettings.addEventListener('click', () => {
  translateMenu()
  settings.classList.toggle('settings_inactive');
  btnSettings.classList.toggle('active');
})

const langsSelect = document.querySelector('.language-slider');
const btnLangs = document.querySelector('.lang__checkbox');
btnLangs.addEventListener('change', (e) => {
  (btnLangs.checked) ? lang = 'ru' : lang = 'en';
  getTranslate()
  localStorage.setItem('langSetting', btnLangs.checked);
})

const btnPlayer = document.querySelector('.player__checkbox');
const player = document.querySelector('.player');
btnPlayer.addEventListener('click', () => {
  player.classList.toggle('inactive');
  localStorage.setItem('playerSetting', btnPlayer.checked);
})

const btnWeather = document.querySelector('.weather__checkbox');
const weather = document.querySelector('.weather');
btnWeather.addEventListener('click', () => {
  weather.classList.toggle('inactive');
  localStorage.setItem('weatherSetting', btnWeather.checked);
})

const btnTime = document.querySelector('.time__checkbox');
const time = document.querySelector('.time');
btnTime.addEventListener('click', () => {
  time.classList.toggle('inactive');
  localStorage.setItem('timeSetting', btnTime.checked);
})

const btnDate = document.querySelector('.date__checkbox');
const date = document.querySelector('.date');
btnDate.addEventListener('click', () => {
  date.classList.toggle('inactive');
  localStorage.setItem('dateSetting', btnDate.checked);
})

const btnGreeting = document.querySelector('.greeting__checkbox');
const greetingWhole = document.querySelector('.greeting-container');
btnGreeting.addEventListener('click', () => {
  greetingWhole.classList.toggle('inactive');
  localStorage.setItem('greetingSetting', btnGreeting.checked);
})

const btnQuote = document.querySelector('.quote__checkbox');
const quoteWhole = document.querySelector('.quote-container');
btnQuote.addEventListener('click', () => {
  quoteWhole.classList.toggle('inactive');
  changeQuot.classList.toggle('inactive');
  localStorage.setItem('quoteSetting', btnQuote.checked);
})

function getLocalStorage() {
  if (localStorage.getItem('userName')) {
    nameBox.value = localStorage.getItem('userName');
  }
  if (localStorage.getItem('langSetting') !== null) {
    const langSetting = localStorage.getItem('langSetting');
    (langSetting === 'true') ? btnLangs.checked = true : btnLangs.checked = false;
    (btnLangs.checked) ? lang = 'ru' : lang = 'en';
    getTranslate();
  }
  if (localStorage.getItem('imgSrc')) {
    imgSrcSelect.value = localStorage.getItem('imgSrc');
    if (localStorage.getItem('imgTag')) {
      imgTagInput.value = localStorage.getItem('imgTag');
    }
    changeImgSrc()
  }
  if (localStorage.getItem('playerSetting') !== null) {
    const playerSetting = localStorage.getItem('playerSetting');
    (playerSetting === 'true') ? btnPlayer.checked = true : btnPlayer.checked = false;
    (btnPlayer.checked) ? player.classList.add('inactive') : player.classList.remove('inactive');
  }
  if (localStorage.getItem('weatherSetting') !== null) {
    const weatherSetting = localStorage.getItem('weatherSetting');
    (weatherSetting === 'true') ? btnWeather.checked = true : btnWeather.checked = false;
    (btnWeather.checked) ? weather.classList.add('inactive') : weather.classList.remove('inactive');
  }
  if (localStorage.getItem('timeSetting') !== null) {
    const timeSetting = localStorage.getItem('timeSetting');
    (timeSetting === 'true') ? btnTime.checked = true : btnTime.checked = false;
    (btnTime.checked) ? time.classList.add('inactive') : time.classList.remove('inactive');
  }
  if (localStorage.getItem('dateSetting') !== null) {
    const dateSetting = localStorage.getItem('dateSetting');
    (dateSetting === 'true') ? btnDate.checked = true : btnDate.checked = false;
    (btnDate.checked) ? date.classList.add('inactive') : date.classList.remove('inactive');
  }
  if (localStorage.getItem('greetingSetting') !== null) {
    const greetingSetting = localStorage.getItem('greetingSetting');
    (greetingSetting === 'true') ? btnGreeting.checked = true : btnGreeting.checked = false;
    (btnGreeting.checked) ? greetingWhole.classList.add('inactive') : greetingWhole.classList.remove('inactive');
  }
  if (localStorage.getItem('quoteSetting') !== null) {
    const quoteSetting = localStorage.getItem('quoteSetting');
    (quoteSetting === 'true') ? btnQuote.checked = true : btnQuote.checked = false;
    (btnQuote.checked) ? quoteWhole.classList.add('inactive') : quoteWhole.classList.remove('inactive');
  }
}

window.addEventListener('load', getLocalStorage)


const langSettingText = document.querySelector('.settings__lang');
const srcSettingText = document.querySelector('.setting__src');
const playerSettingText = document.querySelector('.settings__player');
const weatherSettingText = document.querySelector('.settings__weather');
const timeSettingText = document.querySelector('.settings__time');
const dateSettingText = document.querySelector('.settings__date');
const greetingSettingText = document.querySelector('.settings__greeting');
const quoteSettingText = document.querySelector('.settings__quote');

function translateMenu() {
  langSettingText.textContent = translation.settings.langSetting[lang];
  srcSettingText.textContent = translation.settings.srcSetting[lang];
  playerSettingText.textContent = translation.settings.playerSetting[lang];
  weatherSettingText.textContent = translation.settings.weatherSetting[lang];
  timeSettingText.textContent = translation.settings.timeSetting[lang];
  dateSettingText.textContent = translation.settings.dateSetting[lang];
  greetingSettingText.textContent = translation.settings.greetingSetting[lang];
  quoteSettingText.textContent = translation.settings.quoteSetting[lang];
}