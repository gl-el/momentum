const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const temperatureFeel = document.querySelector('.temperature-feel');
const weatherDescription = document.querySelector('.weather-description');
const weatherIcon = document.querySelector('.weather-icon');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
city.addEventListener('change', () => {
    cityName = city.value;
    setLocaleStorageCity(cityName);
    getWeather();
})

function setLocaleStorageCity(cityName) {
    localStorage.setItem('cityName', cityName);
}

function getLocalStorageCity() {
    if (localStorage.getItem('cityName')) {
        city.value = localStorage.getItem('cityName');
    } else {
        city.value = translation.cityName[lang];
    }
}

window.addEventListener('load', () => {
    getLocalStorageCity();
    getWeather();
})

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=77b18be68c156564e1b5eada12cc5552&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
        if (!data.weather) {
            throw new ReferenceError(`${translation.weatherError[lang]}`);
        }
        weatherError.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp * 10) / 10} °C`;
        temperatureFeel.textContent = `${translation.temperatureFeel[lang]} ${Math.round(data.main.feels_like * 10) / 10} °C`;
        weatherDescription.textContent = `${data.weather[0].description}`;
        wind.textContent = `${translation.wind[lang]} ${Math.round(data.wind.speed * 10) / 10} ${translation.speed[lang]}`;
        humidity.textContent = `${translation.humidity[lang]} ${data.main.humidity} %`;
    } catch(e) {
        weatherError.textContent = e.message;
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = '';
        temperatureFeel.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    }
}
