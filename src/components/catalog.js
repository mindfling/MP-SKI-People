// catalog.js Выбор КАТЕГОРИИ ТОВАРОВ
import { layout } from './layout';

let rendered = false;

export const catalog = (parent, data = []) => {
  console.log(`catalog data`, data);

  // todo типы товаров draft
  const types = data.map(item => item.type);

  // const typeSet = new Set(types);

  const typeList = Array.from( new Set(types) );
  console.log('typeList: ', typeList, typeList.length);

  if (rendered) {
    return '';
  }

  const el = document.createElement('div');
  el.classList.add('catalog');

  const catalogChild = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a 
          class="catalog__link catalog__link_active"
          href="#all"
          title="Отобразить ВСЕ категории товаров">
            все
        </a>
      </li>
      ${typeList.reduce((acc, currtype, i) => {
          return acc + `
      <li class="catalog__item">
        <a 
          class="catalog__link catalog__link_active1"
          href="#all"
          title="Отобразить категории товаров ${currtype}"
        >${currtype}</a>
      </li>
          `;
        }, '')}
    </ul>
    `;

  // обарачиваем в контейнер
  el.append(layout(catalogChild, 'catalog__container'));

  if (parent) {
    parent.append(el);
  }

  rendered = true;

  return el;
};


/*
  const catalogChild = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a 
          class="catalog__link catalog__link_active catalog__link_blue"
          href="#" title="
          Отобразить все категории товаров">
            Все
        </a>
      </li>
      <li class="catalog__item">
        <a 
          class="catalog__link"
          href="#skis" 
          title="Отобразить товары из категории лыжи">
            Лыжи
        </a>
      </li>
      <li class="catalog__item">
        <a 
          class="catalog__link"
          href="#snowboards" 
          title="Отобразить товары из категории сноуборды">
            Сноуборды
        </a>
      </li>
      <li class="catalog__item">
        <a 
          class="catalog__link"
          href="#equipment" 
          title="Отобразить товары из категории экипировка">
            Экипировка
        </a>
      </li>
      <li class="catalog__item">
        <a 
          class="catalog__link"
          href="#boots" 
          title="Отобразить товары из категории ботинки">
            Ботинки
        </a>
      </li>
    </ul>
  `;
  */