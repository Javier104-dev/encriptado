const encriptador = (callback = () => {}) => {
  const $boton = document.querySelector('#encriptar');
  $boton.addEventListener('click', callback); // de esta forma pasamos un callback a un click
};

const desencriptador = (callback = () => {}) => {
  const $boton = document.querySelector('#desencriptar');
  $boton.addEventListener('click', callback);
};

const copiarTexto = (callback = () => {}) => {
  const $boton = document.querySelector('#copiarTexto');
  $boton.addEventListener('click', callback);
};

export {
  encriptador,
  desencriptador,
  copiarTexto,
};
