import 'normalize.css'
import './styles.scss';
import { initRouter } from './js/router';

// import { Navigation, Thumbnails } from 'swiper/modules';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper } from 'swiper';
import 'swiper/css';

console.log('do thumb swiper');

const thumbnailsSlider = new Swiper('.slider-thumbnails', {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  clickable: true,
  on: { 
    init: function () {
      console.log('thumbs init, 😀 '); 
    }
  }
});

console.log('lets swiper');

const productSlider = new Swiper('.prodswiper', {
  spaceBetween: 10,
  modules: [Navigation, Thumbs, Pagination],
    navigation: {
    prevEl: '.product__slider-arrow_prev',
    nextEl: '.product__slider-arrow_next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: thumbnailsSlider,
    clickable: true,
  },
  on: {
    init: () => {
      console.log('slider init 😀 ok'); 
    }
  }
});

console.log('before init router');

const init = () => {
  initRouter();
}

init();
