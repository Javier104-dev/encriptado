const mostrarTextArea = () => {
  document.querySelector('#mensaje__encriptado__textarea').classList.remove('ocultar');
  document.querySelector('.mensaje__encriptado____imagen').classList.add('ocultar');
};

const mostrarAlertaExito = () => {
  document.querySelector('.mensaje__encriptado__alerta').classList.remove('visibilidad');
};

const mostrarAlertaNoPermitido = () => {
  document.querySelector('.encriptador__alerta').classList.remove('visibilidad');
};

const mostrarBotones = () => {
  document.querySelector('.mensaje__encriptado__botones').classList.remove('ocultar');
};

const ocultarAlertaExito = () => {
  document.querySelector('.mensaje__encriptado__alerta').classList.add('visibilidad');
};

const ocultarAlertaNoPermitido = () => {
  document.querySelector('.encriptador__alerta').classList.add('visibilidad');
};

export {
  mostrarTextArea,
  mostrarAlertaExito,
  mostrarAlertaNoPermitido,
  ocultarAlertaExito,
  ocultarAlertaNoPermitido,
  mostrarBotones,
};
