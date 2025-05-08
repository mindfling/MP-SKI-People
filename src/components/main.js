// * main.js // mainLayout.js
// Контейнер конпонент .main
// children содержимое контейнера main

let rendered = false;
let maincount = 0;

export const main = (children) => {
  console.log('main', ++maincount);
  console.log('children: ', children);

  if (rendered) {
    return document.querySelector('main');
  }

  // создаем элемент
  const el = document.createElement('main');
  
  // добавляем класс .container
  el.classList.add('main');
  
  // добавляем всех детей
  if (children) {
    el.append(children);
  }
  
  // монтируем все это на страницу
  document.body.append(el);
  
  // готово
  rendered = true;
  
  return el;
}