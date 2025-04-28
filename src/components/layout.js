// Контейнер конпонент .container
// child html содержимое контейнера
// classList список дополнительных классов

export const layout = (child, classList) => {

  // создаем элемент div
  const el = document.createElement('div');
  
  // добавляем класс .container
  el.classList.add('container');
  
  // добавляем дополнительные классы если есть
  if (classList) {
    el.classList.add(classList);
  }
  
  // вставляем текстовый код html внутрь контейнреа
  el.innerHTML = child;

  return el;
}