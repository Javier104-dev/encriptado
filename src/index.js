import copiarEnPortapapeles from './copiar-mensaje.js';

import {
  encriptarMensaje,
  desencriptarMensaje,
} from './encriptar-mensajes.js';

import {
  encriptador,
  desencriptador,
  copiarTexto,
  resetear,
} from './evento-click.js';

import {
  textoInput,
  mostrarAlertaExito,
} from './ui.js';

const iniciador = () => {
  encriptador(() => {
    encriptarMensaje(textoInput());
  });

  desencriptador(() => {
    desencriptarMensaje(textoInput());
  });

  copiarTexto(() => {
    copiarEnPortapapeles();
    mostrarAlertaExito();
    document.querySelector('#encriptador__textarea').value = '';
  });

  resetear();
};

iniciador();
