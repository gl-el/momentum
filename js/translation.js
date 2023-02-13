const langsSelect = document.querySelector('.language-slider');
const langsSwitch = document.querySelector('.lang__checkbox');

langsSwitch.addEventListener('change', (e) => {
  (langsSwitch.checked) ? lang = 'ru' : lang = 'en';
  getWeather();
  getQuotes(true);
  showGreeting();
})