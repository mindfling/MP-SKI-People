// catalog.js Выбор КАТЕГОРИИ ТОВАРОВ
import { layout } from './layout';


let rendered = false;

export const catalog = (parent, data = []) => {

  if (rendered) {
    return '';
  }
  
  const el = document.createElement('div');
  el.classList.add('catalog');
  

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a class="catalog__link catalog__link_active catalog__link_blue" href="#" title="Отобразить все категории товаров">Все</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#skis" title="Отобразить товары из категории лыжи">Лыжи</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#snowboards" title="Отобразить товары из категории сноуборды">Сноуборды</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#equipment" title="Отобразить товары из категории экипировка">Экипировка</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#boots" title="Отобразить товары из категории ботинки">Ботинки</a>
      </li>
    </ul>
  `;

  
  el.append(layout(child, 'catalog__container'));
  parent.append(el);
  
  rendered = true;

  return el;
}