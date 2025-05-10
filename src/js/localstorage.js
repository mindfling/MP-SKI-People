export const key_favorite = "ski-people-favorite";
export const key_cart = "ski-people-cart";


export const localStorageSave = (key, data) => {
  // console.log("save lss", key);
  // save to localStorage
  localStorage.setItem(key, JSON.stringify(data));
};

export const saveFavorite = (data) => {
  localStorageSave(key_favorite, data);
};

export const saveCart = (data) => {
  localStorageSave(key_cart, data);
};


export const localStorageLoad = (key) => {
  // console.log(`load lsl ${key}`);
  // read localStorage or empty []
  const data = localStorage.getItem(key);
  return JSON.parse(data) || [];
};

export const loadFavorite = () => {
  return localStorageLoad(key_favorite);
};

export const loadCart = () => {
  return localStorageLoad(key_cart);
};
