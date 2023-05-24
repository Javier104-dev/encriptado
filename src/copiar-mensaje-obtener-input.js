const copiarEnPortapapeles = () => {
  const texto = document.querySelector('#mensaje__encriptado__textarea');
  texto.select();
  navigator.clipboard.writeText(texto.value);
  texto.value = '';
};

const textoInput = () => {
  const $obtenerTexto = document.querySelector('#encriptador__textarea').value;
  return $obtenerTexto.toLowerCase();
};

export {
  copiarEnPortapapeles,
  textoInput,
};
