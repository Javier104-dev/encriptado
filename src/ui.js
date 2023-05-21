function verTextArea() {
  document.querySelector('#idtextArea').className = ''; // siempre usar #(id) para ocultar o da error
}

function ocultarfoto() {
  document.querySelector('#imagen2').className = 'oculto';
}

function verBoton() {
  document.querySelector('#copiarTexto').className = '';
}

const verAlerta = () => {
  document.querySelector('#alerta').className = '';
};

function ocultarAlerta() {
  document.querySelector('#alerta').className = 'visibilidad';
}

function verAlertaCopiado() {
  document.querySelector('#alerta-copiado').className = '';
}

function ocultarAlertaCopiado() {
  document.querySelector('#alerta-copiado').className = 'visibilidad2';
}

const resetear = () => {
  const $boton = document.querySelector('#resetear');
  $boton.addEventListener('click', () => {
    window.location.reload();
  });
};

const textoInput = () => {
  const $obtenerTexto = document.querySelector('#texto-normal').value;
  return $obtenerTexto.toLowerCase();
};

export {
  verTextArea,
  ocultarfoto,
  verBoton,
  verAlerta,
  ocultarAlerta,
  verAlertaCopiado,
  ocultarAlertaCopiado,
  resetear,
  textoInput,
};
