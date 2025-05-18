// catalog.js Выбор КАТЕГОРИИ ТОВАРОВ
import { layout } from "./layout";


let rendered = false;

export const catalog = (action, parent, data = []) => {
  console.log('catalog data', data);

  if (action === 'remove') {
    console.log('\x1b[35m%s\x1b[0m', 'catalog remove action');
    document.querySelector('.catalog').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return '';
  }

  if (!Array.isArray(data)) {
    // е. мы передали не массив
    console.log('мы передали не массив');
    data = [];
    // rendered = false;
    // return;
  }
  
  if ( data.length <= 0 ) {
    // е. мы передали ПУСТОЙ массив
    console.log('мы передали ПУСТОЙ массив');
    rendered = false;
    return;
  }
  
  // собираем все категории types товаров
  const typeList = Array.from(new Set( data.map(prod => prod.type) ));
  console.log('typeList: ', typeList);

  const el = document.createElement("div");
  el.classList.add("catalog");

  const catalogItems = `
    <ul class="catalog__list">
      ${typeList.reduce((acc, currtype, i) => (acc + `
        <li class="catalog__item">
          <a 
            class="catalog__link"
            href="#?s=${currtype}"
            title="Отобразить категории товаров ${currtype}"
          >${currtype}</a>
        </li>
      `), `
        <li class="catalog__item">
          <a 
            class="catalog__link catalog__link_active"
            href="#all"
            title="Отобразить ВСЕ категории товаров"
          >${ typeList.length ? 'BCE' : 'Нет категорий'}</a>
        </li>
      `)}
    </ul>
    `;

  // обарачиваем в контейнер
  el.append(layout(catalogItems, "catalog__container"));

  if (parent) {
    parent.append(el);
  }

  rendered = true;

  return el;
};
