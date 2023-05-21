import copiarEnPortapapeles from './copiar-mensaje.js';

import {
  encriptarMensaje,
  desencriptarMensaje,
} from './encriptar-mensajes.js';

import {
  encriptador,
  desencriptador,
  copiarTexto,
} from './evento-click.js';

import {
  ocultarAlerta,
  verAlertaCopiado,
  resetear,
  textoInput,
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
    verAlertaCopiado();
    ocultarAlerta();
    document.querySelector('#texto-normal').value = '';
  });

  resetear();
};

iniciador();
