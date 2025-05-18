import { loadFavorite, localStorageLoad, localStorageSave } from "./localstorage";
//todo addFavorite.js


export const addFavorite = async (data) => {
  console.log('load local storage');
  
  const list = document.querySelector(".goods__list");

  if (list) {
    list.addEventListener("click", (e) => {
      const favoriteList = loadFavorite();
      console.log('add favorite favoriteList: ', favoriteList);
      
      const target = e.target;

      const targetLikeButton = target.closest(".card__like-button");

      if (targetLikeButton) {
        targetLikeButton.classList.toggle('card__like-button_active');

        const id = Number(e.target.closest('.card__like-button').dataset.id);
        console.log('addfavorite id: ', id);

        // находим товар с id
        const item = data.find((item) => item.id === id);

        if (favoriteList.length === 0) {
          // 1й раз сохраняем весь товар сразу
          favoriteList.push(item);
          localStorageSave("ski-people-favorite", favoriteList);

        } else {
          // е список не пустой проверяем есть ли этот товар в списке
          let thereIs = false;
          favoriteList.forEach((favoriteItem, index) => {
            if (favoriteItem.id === id) {
              // е этот товар был в списке то убираем его
              thereIs = true;
              favoriteList.splice(index, 1);
              localStorageSave("ski-people-favorite", favoriteList);
            }
          });

          if (!thereIs) {
            // е товара не было в списке то добавляем его в список
            favoriteList.push(item);
            localStorageSave("ski-people-favorite", favoriteList);
          }
        }
      }
    });
  }
}
