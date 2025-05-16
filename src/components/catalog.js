// catalog.js Выбор КАТЕГОРИИ ТОВАРОВ
import { layout } from "./layout";


let rendered = false;

export const catalog = (action, parent, data = []) => {
  console.log('catalog component data', data);

  if (action === 'remove') {
    console.log('\x1b[35m%s\x1b[0m', 'catalog remove action');
    document.querySelector('.catalog').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return '';
  }


  // собираем все категории types товаров
  const types = data.map((item) => item.type);
  // const typeList = Array.from(new Set(types));
  const typeList = [...new Set(types)];

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
          >ВСЕ</a>
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
