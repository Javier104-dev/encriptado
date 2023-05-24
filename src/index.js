import {
  copiarEnPortapapeles,
  textoInput,
} from './copiar-mensaje-obtener-input.js';

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
