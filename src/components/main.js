// * main.js // mainLayout.js
// Контейнер конпонент .main
// children содержимое контейнера main

export const main = (children) => {

  // создаем элемент
  const el = document.createElement('main');
  
  // добавляем класс .container
  el.classList.add('main');
  
  // вставляем текстовый код html внутрь контейнреа
  // el.innerHTML = child;
  el.append(children);

  el.innerHTML = `<h1 class="title">Inner Main Title</h1>`

  return el;
}