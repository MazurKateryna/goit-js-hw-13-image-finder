  
import * as basicLightbox from 'basiclightbox';

export default function openModal(e) {
  if (e.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(`<div><img src=${e.target.src}></div>`);
  instance.show();
}