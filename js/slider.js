const body = document.querySelector('.body');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const min = 1;
const max = 20;
let randomNum = getRandomNum(1, 20);

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    const img = new Image();
    const timeOfDay = getTimesOfDay();
    const bgNum = `${randomNum}`.padStart(2, '0');
    const link = `https://raw.githubusercontent.com/gl-el/momentum-assets/main/${timeOfDay}/${bgNum}.jpg`;
    img.src = link;
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('${link}')`;
    });
}

setBg()

next.addEventListener('click', getSliderNext);
function getSliderNext() {
    (randomNum < max) ? randomNum++ : randomNum = min;
    setBg();
}


prev.addEventListener('click', getSliderPrev);
function getSliderPrev() {
    (randomNum > min) ? randomNum-- : randomNum = max;
    setBg();
}