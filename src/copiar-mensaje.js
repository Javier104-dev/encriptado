const copiarEnPortapapeles = () => {
  const texto = document.querySelector('#mensaje__encriptado__textarea');
  texto.select();
  navigator.clipboard.writeText(texto.value);
  texto.value = '';
};

export default copiarEnPortapapeles;
