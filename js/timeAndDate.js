const timeBox = document.querySelector('.time');
const dateBox = document.querySelector('.date');

showTime();

function showTime() {
    const dateInfo = new Date();
    const currentTime = dateInfo.toLocaleTimeString();
    timeBox.textContent = currentTime;
    const delay = 1000;
    setTimeout(showTime, delay);
    showDate();
    showGreeting();
}

function showDate() {
    const dateInfo = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    const currentDate = dateInfo.toLocaleDateString(translation.date[lang], options);
    dateBox.textContent = currentDate;
}

