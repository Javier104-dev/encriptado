import {
  encriptar,
  desencriptar,
} from './encriptador.js';

import {
  verTextArea,
  ocultarfoto,
  verBoton,
  verAlerta,
  ocultarAlerta,
  ocultarAlertaCopiado,
} from './ui.js';

const encriptarMensaje = (mensaje) => {
  if (!/^[a-z ]+$/g.test(mensaje)) { // agregar un espacio para que acepte espacios
    verAlerta();
  } else {
    document.querySelector('#texto-encriptado').value = encriptar(mensaje);
    ocultarfoto();
    verTextArea();
    verBoton();
    ocultarAlertaCopiado();
  }
};

const desencriptarMensaje = (mensaje) => {
  if (!/^[a-z ]+$/g.test(mensaje)) {
    verAlerta();
  } else {
    document.querySelector('#texto-encriptado').value = desencriptar(mensaje);
    document.querySelector('#titulo-caja').textContent = 'Mensaje Desencriptado';
    ocultarAlertaCopiado();
    ocultarAlerta();
    ocultarfoto();
    verBoton();
    verTextArea();
  }
};

export {
  encriptarMensaje,
  desencriptarMensaje,
};
