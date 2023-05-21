const copiarEnPortapapeles = () => {
  const texto = document.querySelector('#texto-encriptado');
  texto.select();
  navigator.clipboard.writeText(texto.value);
  texto.value = '';
};

export default copiarEnPortapapeles;
