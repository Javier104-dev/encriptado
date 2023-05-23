import {
  encriptar,
  desencriptar,
} from './encriptador.js';

import {
  mostrarAlertaNoPermitido,
  ocultarAlertaExito,
  mostrarTextArea,
  ocultarAlertaNoPermitido,
  mostrarBotones,
} from './ui.js';

const encriptarMensaje = (mensaje) => {
  if (!/^[a-z ]+$/g.test(mensaje)) { // agregar un espacio para que acepte espacios
    mostrarAlertaNoPermitido();
  } else {
    document.querySelector('#mensaje__encriptado__textarea').value = encriptar(mensaje);
    mostrarTextArea();
    ocultarAlertaNoPermitido();
    ocultarAlertaExito();
    mostrarBotones();
  }
};

const desencriptarMensaje = (mensaje) => {
  if (!/^[a-z ]+$/g.test(mensaje)) {
    mostrarAlertaNoPermitido();
  } else {
    document.querySelector('#mensaje__encriptado__textarea').value = desencriptar(mensaje);
    mostrarTextArea();
    ocultarAlertaNoPermitido();
    ocultarAlertaExito();
    mostrarBotones();
  }
};

export {
  encriptarMensaje,
  desencriptarMensaje,
};
