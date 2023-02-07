const greeting = document.querySelector('.greeting');
const nameBox = document.querySelector('.name');
nameBox.placeholder = translation.placeholder[lang];

function showGreeting() {
    greeting.textContent = translation.greeting[getTimesOfDay()][lang];
}

showGreeting();

function getTimesOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours < 6) return 'night';
    else if (hours >= 6 && hours < 12) return 'morning';
    else if (hours >= 12 && hours < 18) return 'afternoon';
    else return 'evening';
}

nameBox.addEventListener('click', () => {
    nameBox.value = '';
    const userName = nameBox.value;
    setLocalStorage(userName);
})

nameBox.addEventListener('change', (e) => {
    const userName = nameBox.value;
    setLocalStorage(userName);
})

function setLocalStorage(user) {
    localStorage.setItem('userName', user);
}

function getLocalStorage() {
    if(localStorage.getItem('userName')) {
        nameBox.value = localStorage.getItem('userName');
    }
}
  
window.addEventListener('load', getLocalStorage)