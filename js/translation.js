const langsSelect = document.querySelector('.language-slider');

langsSelect.addEventListener('change', (e) => {
  (langsSelect.value === '0') ? lang = 'en' : lang = 'ru';
  getWeather();
  getQuotes(true);
  showGreeting();
})



