// ** product.js **
// КАРТОЧКА СТРАНИЦА ТОВАРА

import { LOCAL } from "../js/const";
import { layout } from "./layout";

let rendered = false;

export const product = (title, parent) => {

  if (title === 'remove') {
    document.querySelector('.product').remove();    
    rendered = false;
    return;
  }

  if (rendered) {
    return '';
  }

  const el = document.createElement("section");
  el.classList.add("product");

  const child = `
    <h2 class="product__title ">${title}</h2>

    <div class="product__description">
      <div class="product__slider">
        <div class="swiper product__slider-main">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski1.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski2.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski3.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski4.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski5.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${LOCAL}/img/ski6.png" />
            </div>
          </div>
          <button type="button" class="product__slider-arrow product__slider-arrow_prev">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.86395 7.0001L7.52528 1.1821C7.5719 1.13522 7.60874 1.07955 7.6337 1.01833C7.65866 0.957109 7.67122 0.891546 7.67068 0.825436C7.67013 0.759326 7.65647 0.693981 7.6305 0.633183C7.60453 0.572385 7.56676 0.517341 7.51938 0.471236C7.472 0.425131 7.41594 0.388881 7.35445 0.364583C7.29297 0.340285 7.22727 0.328422 7.16117 0.32968C7.09507 0.330939 7.02988 0.345294 6.96936 0.371914C6.90885 0.398535 6.85421 0.436893 6.80862 0.484768L0.808619 6.65143C0.717804 6.74478 0.666992 6.86987 0.666992 7.0001C0.666992 7.13033 0.717804 7.25542 0.808619 7.34877L6.80862 13.5154C6.85421 13.5633 6.90885 13.6017 6.96936 13.6283C7.02988 13.6549 7.09507 13.6693 7.16117 13.6705C7.22727 13.6718 7.29297 13.6599 7.35445 13.6356C7.41594 13.6113 7.472 13.5751 7.51938 13.529C7.56676 13.4829 7.60453 13.4278 7.6305 13.367C7.65647 13.3062 7.67013 13.2409 7.67068 13.1748C7.67122 13.1087 7.65866 13.0431 7.6337 12.9819C7.60874 12.9207 7.5719 12.865 7.52528 12.8181L1.86395 7.0001Z"
                fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="product__slider-arrow product__slider-arrow_next">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.47394 7.0001L0.812606 1.1821C0.765995 1.13522 0.729146 1.07955 0.70419 1.01833C0.679234 0.957109 0.666666 0.891546 0.667215 0.825436C0.667764 0.759326 0.681419 0.693981 0.707389 0.633183C0.733359 0.572385 0.771128 0.517341 0.818511 0.471236C0.865894 0.425131 0.92195 0.388881 0.983436 0.364583C1.04492 0.340285 1.11062 0.328422 1.17672 0.32968C1.24282 0.330939 1.30801 0.345294 1.36853 0.371914C1.42904 0.398535 1.48368 0.436893 1.52927 0.484768L7.52927 6.65143C7.62009 6.74478 7.6709 6.86987 7.6709 7.0001C7.6709 7.13033 7.62009 7.25542 7.52927 7.34877L1.52927 13.5154C1.48368 13.5633 1.42904 13.6017 1.36853 13.6283C1.30801 13.6549 1.24282 13.6693 1.17672 13.6705C1.11062 13.6718 1.04492 13.6599 0.983436 13.6356C0.92195 13.6113 0.865894 13.5751 0.818511 13.529C0.771128 13.4829 0.733359 13.4278 0.707389 13.367C0.681419 13.3062 0.667764 13.2409 0.667215 13.1748C0.666666 13.1087 0.679234 13.0431 0.70419 12.9819C0.729146 12.9207 0.765995 12.865 0.812606 12.8181L6.47394 7.0001Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
        <div class="swiper product__slider-thumbs slider-thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski1.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski2.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski3.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski4.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski5.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski6.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski7.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${LOCAL}/img/ski8.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="product__info">
        <p class="product__info-price">5&nbsp;000&nbsp;₽</p>
        <p class="product__info-id">арт.&nbsp;84348945757</p>
        <h3 class="product__info-title">Общие характеристики</h3>
        <table class="product__info-table product__table">
          <tr class="product__table-row">
            <td class="product__table-item">Коллекция</td>
            <td class="product__table-item">Snow</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Производитель</td>
            <td class="product__table-item">Россия</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Гарантия</td>
            <td class="product__table-item">18 мес.</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Срок службы</td>
            <td class="product__table-item">5 лет</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Цвет</td>
            <td class="product__table-item">Синий</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Макс. нагрузка</td>
            <td class="product__table-item">130 кг</td>
          </tr>
        </table>
        <div class="info-buttons">
          <button class="info-buttons__to-cart" type="button">
            В корзину
          </button>
          <button class="info-buttons__like">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div> 
  `;

  el.append(layout(child, "product__container"));
  parent.append(el);

  return el;
};
