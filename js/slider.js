const body = document.querySelector('.body');
const next = document.querySelector('.slide-next');
const prev = document.querySelector('.slide-prev');
const imgSrcSelect = document.querySelector('.image-src');
const imgTagInput = document.querySelector('.image-tag');
const min = 1;
const max = 20;
let randomNum = getRandomNum(min, max);
let linkImg = '';

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGithubImg() {
    const timeOfDay = getTimesOfDay();
    const bgNum = `${randomNum}`.padStart(2, '0');
    linkImg = `https://raw.githubusercontent.com/gl-el/momentum-assets/main/${timeOfDay}/${bgNum}.jpg`;
}

function setBg(linkImg) {
    const img = new Image();
    img.src = linkImg;
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('${linkImg}')`;
    });
}
getGithubImg()
setBg(linkImg)

next.addEventListener('click', getSliderNext);
function getSliderNext() {
    (randomNum < max) ? randomNum++ : randomNum = min;
    toggleImg()
}


prev.addEventListener('click', getSliderPrev);
function getSliderPrev() {
    (randomNum > min) ? randomNum-- : randomNum = max;
    toggleImg()
}

imgSrcSelect.addEventListener('change', changeImgSrc);

async function toggleImg() {
    switch (imgSrcSelect.value) {
        case '0':
            getGithubImg();
            setBg(linkImg);
            break;
        case '1':
            await getUnsplashImg();
            setBg(linkImg);
            break;
        case '2':
            await getFlickrImg();
            setBg(linkImg);
            break;
    }
}
async function changeImgSrc() {
    (imgSrcSelect.value === '0') ? imgTagInput.classList.add('inactive') : imgTagInput.classList.remove('inactive');
    if (imgSrcSelect.value === '1') await getUnsplashGallery();
    if (imgSrcSelect.value === '2') await getFlickrGallery();
    toggleImg();
}

imgTagInput.addEventListener('change', changeImgSrc);