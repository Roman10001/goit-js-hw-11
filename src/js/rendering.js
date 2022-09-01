import mark from '../templates/image-list.hbs';
import getImg from './apiService';
import observer from './observer';
import { showSuccess, showError } from './notify';

const galleryRef = document.querySelector('.gallery');
let page = 1;
let memoryRequest = '';

const rendering = function(request) {
   if (memoryRequest !== request) {
    page = 1;
    galleryRef.innerHTML = '';
  }
  memoryRequest = request;
  const link = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${request}&page=${page}&per_page=12&key=29629302-abb150ceeb95ece7f01e6af14`;
  getImg(link)
    .then(img => {
      galleryRef.insertAdjacentHTML('beforeend', mark(img.hits));
      observer.observe(galleryRef.lastElementChild);
      showSuccess();
    }
  )
    .catch(error => {
      showError();
      console.log(error)
    });
  page++;
};
export { rendering, memoryRequest, galleryRef };