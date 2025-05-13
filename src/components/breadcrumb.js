// breadcrumb.js ХЛЕБНЫЕ КРОШКИ

export const breadcrumb = (action, parent) => {

  const el = document.createElement('div');

  const child = `
    <!-- ХЛЕБНЫЕ КРОШКИ -->
    
    <div class="breadcrumb">
      <div class="container breadcrumb__container">
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
      </div>
    </div>
  `;

  el.innerHTML = child;

  return el;
}
