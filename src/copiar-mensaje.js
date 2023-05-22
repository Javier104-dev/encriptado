const copiarEnPortapapeles = () => {
  const texto = document.querySelector('#desencriptador__textarea');
  texto.select();
  navigator.clipboard.writeText(texto.value);
  texto.value = '';
};

export default copiarEnPortapapeles;
