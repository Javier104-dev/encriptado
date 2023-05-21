function encriptar(texto) {
  const reemplazos = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  };
  const textoEncriptado = texto.replace(/a|e|i|o|u/gi, (x) => reemplazos[x]);
  return textoEncriptado;
}

function desencriptar(texto) {
  const reemplazos = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
  };
  const textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, (x) => reemplazos[x]);
  return textoDesencriptado;
}

export {
  encriptar,
  desencriptar,
};
