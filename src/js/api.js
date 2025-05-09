import { API_URL } from "./const";


export const getData = async () => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    return result;

  } catch (e) {
    return new Error(`fetch error ${e.message}`);
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
