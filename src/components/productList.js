// ** productList.js **
// Список товаров goods List
import { layout } from "./layout";
import { LOCAL } from "../js/const";

let rendered = false;

export const productList = (title, data = [], parent) => {
  console.log("product list data: ", data);

  if (rendered) {
    return "";
  }

  if (title === 'remove') {
    document.querySelector('.product').remove();
    rendered = false;
    return;
  }

  let goodsItem = '';

  // добавляем каждый html товара
  data.forEach(item => {
    const { id, price, img, name } = item;
    console.log('id, price, img, name: ', id, price, img, name);
    goodsItem += `
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product?id=${id}" title="Товар ${name} цена ${price} ₽">
            <img class="card__image" src="${LOCAL}/img${img}" alt="Товар ${name}">
          </a>
          <button class="card__like-button" title="Добавить в избранное">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="card__info">
            <h3 class="card__info-title">${name}</h3>
            <p class="card__info-price">${price}&nbsp;&#8381;</p>
          </div>
          <button class="card__button" title="Добавить товар ${name} в корзину">В&nbsp;корзину</button>
        </article>
      </li>
    `;
  });

  const el = document.createElement("section");
  el.classList.add("goods");

  const child = `
    <h2 class="goods__title goods__title_favorites">${title}</h2>

    <!-- ТОВАРЫ -->
    <ul class="goods__list">

      ${goodsItem}

      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__image" src="/img/products/ski-mount.png" alt="товар горные синие лыжи">
          </a>
          <button class="card__like-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                  
          </button>
          <div class="card__info">
            <h3 class="card__info-title">Горные&nbsp;лыжи</h3>
            <p class="card__info-price">5000&nbsp;&#8381;</p>
          </div>
          <button class="card__button">В&nbsp;корзину</button>
        </article>
      </li>

    </ul>

    <!-- ПАГИНАЦИЯ ВНИЗУ -->
    <div class="goods__pagination pagination">
      <ul class="pagination__list">
        <li class="pagination__item pagination__item_active"></li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
      </ul>
      <div class="pagination__controle">
        <button class="pagination__btn pagination__btn_prev" title="Предыдующая страница">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2279 16L17.5506 4.36399C17.6438 4.27022 17.7175 4.15889 17.7674 4.03645C17.8173 3.914 17.8424 3.78288 17.8414 3.65066C17.8403 3.51844 17.8129 3.38775 17.761 3.26615C17.7091 3.14456 17.6335 3.03447 17.5388 2.94226C17.444 2.85005 17.3319 2.77755 17.2089 2.72895C17.0859 2.68036 16.9545 2.65663 16.8223 2.65915C16.6901 2.66166 16.5598 2.69037 16.4387 2.74362C16.3177 2.79686 16.2084 2.87357 16.1172 2.96932L4.11724 15.3027C3.93561 15.4893 3.83398 15.7395 3.83398 16C3.83398 16.2605 3.93561 16.5106 4.11724 16.6973L16.1172 29.0307C16.2084 29.1264 16.3177 29.2031 16.4387 29.2564C16.5598 29.3096 16.6901 29.3383 16.8223 29.3408C16.9545 29.3433 17.0859 29.3196 17.2089 29.271C17.3319 29.2224 17.444 29.1499 17.5388 29.0577C17.6335 28.9655 17.7091 28.8554 17.761 28.7338C17.8129 28.6122 17.8403 28.4815 17.8414 28.3493C17.8424 28.2171 17.8173 28.086 17.7674 27.9635C17.7175 27.8411 17.6438 27.7298 17.5506 27.636L6.2279 16Z" fill="#1C1C1C"/>
          </svg>
        </button>
        <p class="pagination__pages">
          <span class="pagination__curr-page">1</span>
          из
          <span class="pagination__total-page">${data.length}</span>
        </p>
        <button class="pagination__btn pagination__btn_next" title="Следующая страница">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.7721 16L15.4494 4.36399C15.3562 4.27022 15.2825 4.15889 15.2326 4.03645C15.1827 3.914 15.1575 3.78288 15.1586 3.65066C15.1597 3.51844 15.1871 3.38775 15.239 3.26615C15.2909 3.14456 15.3665 3.03447 15.4612 2.94226C15.556 2.85005 15.6681 2.77755 15.7911 2.72895C15.9141 2.68036 16.0454 2.65663 16.1776 2.65915C16.3098 2.66166 16.4402 2.69037 16.5613 2.74362C16.6823 2.79686 16.7916 2.87357 16.8828 2.96932L28.8828 15.3027C29.0644 15.4893 29.166 15.7395 29.166 16C29.166 16.2605 29.0644 16.5106 28.8828 16.6973L16.8828 29.0307C16.7916 29.1264 16.6823 29.2031 16.5613 29.2564C16.4402 29.3096 16.3098 29.3383 16.1776 29.3408C16.0454 29.3434 15.9141 29.3196 15.7911 29.271C15.6681 29.2224 15.556 29.1499 15.4612 29.0577C15.3665 28.9655 15.2909 28.8554 15.239 28.7338C15.1871 28.6122 15.1597 28.4815 15.1586 28.3493C15.1575 28.2171 15.1827 28.086 15.2326 27.9635C15.2825 27.8411 15.3562 27.7298 15.4494 27.636L26.7721 16Z" fill="#1C1C1C"/>
          </svg>                  
        </button>
      </div>
    </div>
  `;

  el.append(layout(child, "goods__container"));
  parent.append(el);

  return el;
};
