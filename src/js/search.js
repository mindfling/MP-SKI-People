import { router } from "./router";
// реализуем поиск по товарам на стороне клиента

export const search = () => {

  const searchForm = document.querySelector('.header__search');
  const searchInput = document.querySelector('.header__search-input');
  // console.log('searchForm: ', searchForm);
  // console.log('searchInput: ', searchInput);

  if (searchForm && searchInput) {
    console.log('search form форма готова к поиску');
    // существует ли форма
    searchForm.addEventListener('submit', event => {
      event.preventDefault(); // отключаем submit формы по умолчанию
      const searchValue = searchInput.value.toLowerCase();
      console.log('SUBMIT ищем searchValue: ', searchValue);
      router.navigate(`/search?search=${searchValue}`); // навигатор переходит по нужному адресу
    })
  };
};
