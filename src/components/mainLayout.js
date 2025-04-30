// Контейнер конпонент .container
// child html содержимое контейнера

export const main = (children) => {

  // создаем элемент
  const el = document.createElement('main');
  
  // добавляем класс .container
  el.classList.add('main');
  
  // вставляем текстовый код html внутрь контейнреа
  // el.innerHTML = child;
  el.append(children);

  return el;
}