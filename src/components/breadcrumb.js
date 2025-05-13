// breadcrumb.js ХЛЕБНЫЕ КРОШКИ
import { layout } from "./layout";


let rendered = false;

export const breadcrumb = (action, parent) => {

  if ( action === 'remove' ) {
    document.querySelector('.breadcrumb');
    rendered = false;
    return '';
  }

  if ( rendered ) {
    return document.querySelector('.breadcrumb');
  }


  const el = document.createElement('div');
  el.classList.add('breadcrumb');

  const child = `
    <!-- ХЛЕБНЫЕ КРОШКИ -->
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a class="breadcrumb__link" href="#" title="Вернуться на Главную">Главная</a>
        </li>

        <li class="breadcrumb__item">
          <a class="breadcrumb__link" href="#" title="Вернуться на категорию Лыжи">Лыжи</a>
        </li>

        <li class="breadcrumb__item">
          <a class="breadcrumb__link" href="#" title="Вернуться на категорию Горные лыжи">Горные лыжи</a>
        </li>
      </ul>
    </nav>
  `;

  el.append(layout(child, 'breadcrumb__container'));
  parent.append(el);

  rendered = true;

  return el;
}
