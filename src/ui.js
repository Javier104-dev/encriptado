const mostrarTextArea = () => {
  document.querySelector('#desencriptador__textarea').classList.remove('ocultar');
  document.querySelector('.desencriptador__imagen').classList.add('ocultar');
};

const mostrarAlertaExito = () => {
  document.querySelector('.desencriptador__alerta').classList.remove('visibilidad');
};

const mostrarAlertaNoPermitido = () => {
  document.querySelector('.encriptador__alerta').classList.remove('visibilidad');
};

const mostrarBotones = () => {
  document.querySelector('.desencriptador__botones').classList.remove('ocultar');
};

const ocultarAlertaExito = () => {
  document.querySelector('.desencriptador__alerta').classList.add('visibilidad');
};

const ocultarAlertaNoPermitido = () => {
  document.querySelector('.encriptador__alerta').classList.add('visibilidad');
};

const textoInput = () => {
  const $obtenerTexto = document.querySelector('#encriptador__textarea').value;
  return $obtenerTexto.toLowerCase();
};

export {
  mostrarTextArea,
  mostrarAlertaExito,
  mostrarAlertaNoPermitido,
  ocultarAlertaExito,
  ocultarAlertaNoPermitido,
  textoInput,
  mostrarBotones,
};
