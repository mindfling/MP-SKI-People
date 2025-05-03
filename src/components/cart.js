import { layout } from './layout';
// cart.js КОРЗИНА
// <!-- CART КОРЗИНА -->

let rendered = false;

export const cart = (title, parent, data = []) => {
  console.log('inside component cart');

  // isRemove
  if (title === 'remove') {
    document.querySelector('.cart').remove();
    rendered = false;
    return;
  }

  if (rendered) {
    return document.querySelector('.cart');
  } 

  const el = document.createElement('section');
  el.classList.add('cart');

  // в других случаях рендерим верстку
  const child = `
    <h2 class="cart__title">${title}</h2>

    <div className="cart__wrapper">
      <ul class="cart__list">
        <li class="cart__item">
          <img
            src="/img/products/ski-blue-mini.png"
            alt="Синие горные лыжи на снегу"
            title="Синие горные лыжи на снегу"
            class="cart__item-image"
          />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
        <li class="cart__item">
          <img
            src="/img/products/ski-blue-mini.png"
            alt="Синие горные лыжи на снегу"
            title="Синие горные лыжи на снегу"
            class="cart__item-image"
          />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
        <li class="cart__item">
          <img
            src="/img/products/ski-blue-mini.png"
            alt="Синие горные лыжи на снегу"
            title="Синие горные лыжи на снегу"
            class="cart__item-image"
          />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
      </ul>

      <div class="cart__order">
        <h3 class="cart__order-title">Оформление</h3>
        <div class="cart__order-info">
          <p class="cart__order-count">
            <span class="cart__order-number">4</span>
            <span class="cart__order-text">товаров на сумму:</span>
          </p>
          <p class="cart__order-price">20&nbsp;000&nbsp;₽</p>
        </div>
        <p class="cart__order-delivery">Доставка 0&nbsp;₽</p>
        <button class="cart__order-button" type="submit" form="cartForm">Оформить заказ</button>
      </div>

      <form action="#" id="cartForm" class="cart__form" method="POST">
        <h3 class="cart__form-title">Данные для доставки</h3>

        <fieldset class="cart__form-inputs">
          <input 
            type="text" 
            name="name" 
            class="cart__form-input" 
            placeholder="Фамилия Имя Отчество"
            title="Ввести имя заказчика" />
          <input 
            type="tel" 
            name="tel" 
            class="cart__form-input" 
            placeholder="Телефон" 
            title="Ввести номер телефона заказчика" />
          <input 
            type="email" 
            name="email" 
            class="cart__form-input" 
            placeholder="E-mail"
            title="Ввести адрес электронной почты для электронного чека" />
          <input 
            type="text" 
            name="address" 
            class="cart__form-input" 
            placeholder="Адрес доставки"
            title="Ввести адрес доставки" />
          <textarea
            class="cart__form-text"
            name="comment"
            id="comment"
            placeholder="Комментарий к заказу"
            title="Ввести комментарии заказчика"
          ></textarea>
        </fieldset>

        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Доставка</legend>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="delivery"
              name="delivery"
              title="Доставка к клиенту"
            />
            Доставка
          </label>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="pickup"
              name="delivery"
              title="Получение клиентом самовывозом"
            />
            Самовывоз
          </label>
        </fieldset>

        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Оплата</legend>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="card"
              name="payment"
              title="Выбор оплаты банковской картой при получении"
            />
            Картой при получении
          </label>
          <label class="cart__form-label">
            <input
              class="cart__form-radio"
              type="radio"
              value="cash"
              name="payment"
              title="Выбор оплаты наличными при получении"
            />
            Наличными при получении
          </label>
        </fieldset>
      </form>
    </div>
  `;


  el.append(layout(child, 'cart__container'));
  parent.append(el);

  rendered = true;

  return el;
}
