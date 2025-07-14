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
      style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0px;"
    >
      <h1 class="page__title" style="text-align:center;font-size:40px;font-family:cursive;">
        ${text}
      </h1>

      <img class="page__image" style="width:500px;" src="/img/errors/404-transparent.png" alt="404">

      <p class="page__text" style="text-align:center;font-size:12px;margin-bottom:8px;">ИЗВИНИТЕ, ЗАПРАШИВАЕМАЯ СТРАНИЦА НЕ НАЙДЕНА</p>

      <p class="page__text" style="text-align:center;font-size:8px;line-height:1.6;margin-bottom:10px">
          Возможно она была удалена или даже никогда не существовала.<br />
            Чтобы найти нужную информацию, рекомендуем перейти<br />
              на <a class="page__link"href="/">главную страницу</a>
      </p>
    </div>
  `;

  el.innerHTML = child;

  return el;
}
