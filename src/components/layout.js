// * layout.js
// Контейнер конпонент .container
// child html содержимое контейнера
// classList список дополнительных классов

export const layout = (child, ...classList) => {

  const el = document.createElement("div");
  el.classList.add("container");
  if (classList) {
    el.classList.add(...classList);
  }

  if (typeof(child) === 'string') {
    el.innerHTML = child;
  } else {
    el.append(child)
  }

  return el;
};
