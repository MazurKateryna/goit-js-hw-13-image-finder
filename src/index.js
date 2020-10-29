import './styles.css';

import apiService from './js/apiService';
import renderGallery from './js/renderGallery';
import openModal from './js/modal';
import InfiniteScroll from 'infinite-scroll';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', openModal);

const infScroll = new InfiniteScroll(gallery, {
  responseType: 'text',
  history: false,
  path: function () {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${apiService.query}&page=${apiService.page}&per_page=12&key=${apiService.apiKey}`;
  },
});

infScroll.on('load', response => {
  const result = JSON.parse(response);

  renderGallery(result.hits);
  apiService.incrPage();
});

form.addEventListener('submit', e => {
  e.preventDefault();

  apiService.query = form.elements.query.value;

  gallery.innerHTML = '';
  form.reset();

  apiService.resetPage();
  infScroll.loadNextPage(); 
});
