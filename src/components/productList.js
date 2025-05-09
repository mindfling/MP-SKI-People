// ** productList.js **
// Список товаров goods List
import { layout } from "./layout";
import { LOCAL } from "../js/const";
import { pagination } from "./pagination";

let rendered = false;


export const productList = (title, data = [], parent) => {

  if (rendered) {
    return "";
  }

  if (title === 'remove') {
    // здесь очищаем корзину
    document.querySelector('.product').remove();
    rendered = false;
    return;
  }


  const getGoodsItems = (data) => {
    // одна штука товара
    let goodsItem = '';
    // добавляем каждый html товара
    data.forEach(({ id, price, img, name, type }) => {
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

    return goodsItem;
  };

  // вся верстка списка
  const child = `
    <h2 class="goods__title goods__title_favorites">${title}</h2>

    <!-- ТОВАРЫ -->
    <ul class="goods__list">
      ${getGoodsItems(data)}
    </ul>

    <!-- ПАГИНАЦИЯ ВНИЗУ -->
    ${pagination(2, data.length)}
  `;


  const el = document.createElement("section");
  el.classList.add("goods");

  el.append(layout(child, "goods__container"));
  parent.append(el);

  rendered = true;


  // обработка нажатия на кнопку категорий товаров
  const catalogButton = document.querySelector('.catalog');
  // проверяем есть ли он
  if (catalogButton) {
    catalogButton.addEventListener('click', e => {

      if (e.target.closest('a')) {
        // todo сделать лучше
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
          goodslist.innerHTML = getGoodsItems(data);
          goodstitle.innerHTML = title;
          
        } else {
          //перестраиваем product list
          const refreshList = data.filter(item =>
            (item.type.toString().toLowerCase() === text.toString().toLowerCase()));
          console.log('refreshList: ', refreshList);
          goodslist.innerHTML = getGoodsItems(refreshList);
          goodstitle.innerHTML = `${title} ${text}`;
        }
      }

    })
  }

  return el;
};
