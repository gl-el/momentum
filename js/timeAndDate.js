const time = document.querySelector('.time');
const date = document.querySelector('.date');

showTime();

function showTime() {
    const dateInfo = new Date();
    const currentTime = dateInfo.toLocaleTimeString();
    time.textContent = currentTime;
    const delay = 1000;
    setTimeout(showTime, delay);
    showDate();
}

function showDate() {
    const dateInfo = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    const currentDate = dateInfo.toLocaleDateString(translation.date.ru, options);
    date.textContent = currentDate;
}

