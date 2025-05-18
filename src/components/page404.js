import { layout } from "./layout";

let rendered = false;

export const notFound = (text = 'Title 404 PAGE', title = '') => {
  // todo title заголовок , text текст

  const el = document.createElement('div');
  el.className = 'not-found';

  const child = `
    <style>
      .page__notfound {
        padding: 0 0 25px 0;
      }
    </style>
    <div
      class="containera page__notfound"
      style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:7px;"
    >
      <h1 class="page__title" style="text-align:center;font-size:50px;font-family:cursive;">
        ${text}
      </h1>
      <img class="page__image" src="/img/errors/404.webp" alt="404">
      <p class="page__text" style="text-align:center;">Жаль, похоже страницы по данному адресу не существует ;)</p>
      <a class="page__link" style="text-decoration:underline;" href="/">Вернуться на главную</a>
    </div>
  `;

  el.innerHTML = child;

  return el;
}
