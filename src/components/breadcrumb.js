// breadcrumb.js ХЛЕБНЫЕ КРОШКИ
import { layout } from "./layout";


let rendered = false;

export const breadcrumb = (action, parent, data) => {
  // console.log('breadcrumb component data: ', data);

  if ( action === 'remove' ) {
    console.log('\x1b[35m%s\x1b[0m', 'breadcrumb remove action');
    const thiselement = document.querySelector('.breadcrumb');
    if (thiselement) {
      thiselement.remove();
    }
    rendered = false;
    return;
  }

  if ( rendered ) {
    return '';
  }


  const listItems = data.map((item) => {
    return `
  <li class="breadcrumb__item">
    <a 
      class="breadcrumb__link" 
      href="${item.href}" 
      title="Вернуться в категорию ${item.title}"
    >
      ${item.title}
    </a>
  </li>
    `;
  }).join('');

  const el = document.createElement('div');
  el.classList.add('breadcrumb');

  const child = `
    <!-- ХЛЕБНЫЕ КРОШКИ -->
    <nav class="breadcrumb__navigation">
      <ul class="breadcrumb__list">
        ${listItems}
      </ul>
    </nav>
  `;

  el.append(layout(child, 'breadcrumb__container'));
  parent.append(el);

  rendered = true;

  return el;
}
