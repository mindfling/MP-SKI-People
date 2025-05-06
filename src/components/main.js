// * main.js // mainLayout.js
// Контейнер конпонент .main
// children содержимое контейнера main

let rendered = false;

export const main = (children) => {
  
  if (rendered) {
    return document.querySelector('main');
    
  }

  // создаем элемент
  const el = document.createElement('main');
  
  // добавляем класс .container
  el.classList.add('main');
  
  el.append(children);

  document.body.append(el);
  
  rendered = true;
  
  return el;
}