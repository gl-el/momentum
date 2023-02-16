let unsplashGallery = [];

async function getUnsplashGallery() {
  let url = '';
  const timeOfDay = getTimesOfDay();
  if (imgTagInput.value.length === 0) {
  url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&count=20&client_id=A4aIA6TEXDEjOYeHrU_pYzL17JOmiY3ZXptWxW_Uvo0`;
  } else {
  url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${imgTagInput.value}&count=20&client_id=A4aIA6TEXDEjOYeHrU_pYzL17JOmiY3ZXptWxW_Uvo0`; 
  }
  const res = await fetch(url);
  unsplashGallery = await res.json();
  try {
    if(unsplashGallery.errors) {
      throw new ReferenceError(`${translation.tagError[lang]}`)
    }
  } catch(e) {
    imgTagInput.value = e.message;
  }
}

async function getUnsplashImg() {
  const bgNum = `${randomNum-1}`;
  linkImg = unsplashGallery[bgNum].urls.regular;
}
