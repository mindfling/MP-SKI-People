import { localStorageLoad, localStorageSave } from "./localstorage";


export const addCart = async (data) => {

  const cartList = localStorageLoad('ski-people-cart');
  const list = document.querySelector('.goods__list');

  if (list) {
    list.addEventListener('click', e => {
      if (e.target.closest('.card__button')) {
        
        const id = Number(e.target.closest('.card').querySelector('.card__like-button').dataset.id);
        const item = data.flat(Infinity).find(item => (item.id === id));

        if (cartList.length === 0) {
          cartList.push(item);
          localStorageSave('ski-people-cart', cartList);
        } else {
          let thereIs = false;
          cartList.forEach((cartItem, index) => {
            if (cartItem.id === id) {
              thereIs = true;
              cartList.splice(index, 1);
              localStorageSave('ski-people-cart', cartList);
            }
          });
          if (!thereIs) {
            cartList.push(item);
            localStorageSave('ski-people-cart', cartList);
          }
        }
      }
    })
  }
}
