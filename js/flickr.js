let flickrGallery = [];

async function getFlickrGallery() {
  let url = '';
  const timeOfDay = getTimesOfDay();
  if (imgTagInput.value.length === 0) {
  url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=68687e1b75e84ce5308c4e01f42efe3d&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1&per_page=20`;
  } else {
  url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=68687e1b75e84ce5308c4e01f42efe3d&tags=${imgTagInput.value}&extras=url_l&format=json&nojsoncallback=1&per_page=20`; 
  }
  const res = await fetch(url);
  flickrGallery = await res.json();
  try {
    if(flickrGallery.photos.total === 0 || !flickrGallery.photos) {
      throw new ReferenceError(`${translation.tagError[lang]}`)
    }
  } catch(e) {
    imgTagInput.value = e.message;
  }
}

async function getFlickrImg() {
  const bgNum = `${randomNum-1}`;
  linkImg = flickrGallery.photos.photo[bgNum].url_l;
}
