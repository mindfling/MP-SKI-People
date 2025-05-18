import { API_GOODS, API_URL } from "./const";


export const getData = async (query = '') => {
  query = query.toString().toLowerCase(); // приводим к нижнему регистру

  try {
    const response = await fetch(API_URL);
    // console.log('response: ', response);
    const json = await response.json();
    // return json;
    
    if (query != '' && query != null) {
      // проверка на непустой запрос
      // ЗДЕСЬ УСЛОВИЯ поиска по типу или по имени товара
      const querySearch = json.filter( item =>
        item.type.toLowerCase() === query
        || item.name.toLowerCase().includes(query)
      );

      return querySearch; // возвращаем результаты поиска
    }
  
    return json; // по умолч возвращаем все товары

  } catch (e) {
    return new Error(`ОШИБКА ЗАГРУЗКИ ДАННЫХ fetch error ${e.message}`);
  }
};



export const loadData = async () => {
  return await fetch(API_URL)
    .then((data) => {
      return data.json();
    })
    .then((obj) => {
      // console.log(obj);
      return obj;
    })
    .catch((err) => console.log(`fetch ошибка ${err.message}`));
};
