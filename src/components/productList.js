// ** productList.js **
// Список товаров goods List
import { layout } from "./layout";
import { LOCAL } from "../js/const";
import { pagination } from "./pagination";
import { loadFavorite } from "../js/localstorage";


let rendered = false;

const render = (productsData, favoritesData = []) => {
  
  if (!productsData) {
    console.log('ПУСТОЙ data: ', productsData);
    return '';
  }
  
  const favoriteIDs = favoritesData.map(prod => prod.id);

  // одна штука товара
  let goodsItem = '';
  // добавляем каждый html товара
  productsData.forEach(({ id, price, img, name, type }) => {

    goodsItem += `
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product?id=${id}" title="Товар ${name} цена ${price} ₽">
            <img class="card__image" src="${LOCAL}/img${img}" alt="Товар ${name}">
          </a>
          <button class="card__like-button ${favoriteIDs.includes(id) ? 'card__like-button_active' : '' }" title="Добавить товар ${name} в избранное" data-id="${id}">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="currentColor" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
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
  return goodsItem;
};

  
  
export const productList = (action, title, parent, data = []) => {
  console.log('productList action, title, data = [], parent: ', action, title, data, parent);

  if (action === 'remove') {
    console.log('\x1b[35m%s\x1b[0m', 'ОЧИЩАЕМ productList goods remove action');
    document.querySelector('.goods').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.goods');
  }

  if (!Array.isArray(data)) {
    console.log('передали не массив');
    data = [];
  }
  
  
  // todo перенести в арг
  const favorites = loadFavorite();
  // список избранных товаров favorites

  // вся верстка списка
  const child = ( data.length > 0 ) ? `
    <!-- Заголовок товары -->
    <h2 class="goods__title goods__title_favorites">${title}</h2>
    <!-- ТОВАРЫ -->
    <ul class="goods__list">
      ${render(data, favorites)}
    </ul>
    <!-- ПАГИНАЦИЯ ВНИЗУ -->
    ${pagination(2, data.length)}
  ` : `
    <!-- Заголовок товары -->
    <!-- ТОВАРЫ -->
    <h2 class="page__title" style="font-family:cursive;font-size:50px;">
      Сервер не отвечает
    </h2>
    <img class="page__image" src="/img/errors/404.webp" alt="404">
    <p class="page__text">Проверьте подключение к сети</p>
  `; // todo перенести пагинацию отдельно


  const el = document.createElement("section");
  el.classList.add("goods");

  el.append(layout(child, "goods__container"));
  parent.append(el);

  rendered = true;


  // todo вынести вовне обработка нажатия на кнопку категорий товаров
  const catalogButton = document.querySelector('.catalog');
  // проверяем есть ли он
  if (catalogButton) {
    catalogButton.addEventListener('click', e => {

      if (e.target.matches('a')) {
        // todo сделать лучше связать как-то с catalog.js
        // очищаем все
        catalogButton.querySelectorAll('.catalog__link')
          .forEach(link => link.classList.remove('catalog__link_active'));
        // делаем активную ссылку
        e.target.classList.add('catalog__link_active');

        const text = e.target.textContent; // текст ссылки
        const goodslist = document.querySelector('.goods__list');
        const goodstitle = document.querySelector('.goods__title');

        if (e.target.textContent.toString().toLowerCase() === 'все') {
          //перестраиваем BCE product
          console.log('отдаем все товары');
          goodslist.innerHTML = render(data);
          goodstitle.innerHTML = title;
          
        } else {
          //перестраиваем product list
          const refreshList = data.filter(item =>
            (item.type.toString().toLowerCase() === text.toString().toLowerCase()));
          console.log('\x1b[36m%s\x1b[0m', 'Обновленный список товаров refreshList: ', refreshList);
          goodslist.innerHTML = render(refreshList);
          goodstitle.innerHTML = `${title} ${text}`;
        }
      }

    })
  }

  return el;
};
