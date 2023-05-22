const encriptador = (callback = () => {}) => {
  const $boton = document.querySelector('#boton__encriptar');
  $boton.addEventListener('click', callback); // de esta forma pasamos un callback a un click
};

const desencriptador = (callback = () => {}) => {
  const $boton = document.querySelector('#boton__desencriptar');
  $boton.addEventListener('click', callback);
};

const copiarTexto = (callback = () => {}) => {
  const $boton = document.querySelector('#boton__copiar');
  $boton.addEventListener('click', callback);
};

const resetear = () => {
  const $boton = document.querySelector('#boton__resetear');
  $boton.addEventListener('click', () => {
    window.location.reload();
  });
};

export {
  encriptador,
  desencriptador,
  copiarTexto,
  resetear,
};
