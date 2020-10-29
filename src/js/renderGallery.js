  
import galleryItems from '../templates/galleryItems.hbs';

const gallery = document.querySelector('.gallery');

export default function (picsArr) {
  gallery.insertAdjacentHTML('beforeend', galleryItems(picsArr));
}