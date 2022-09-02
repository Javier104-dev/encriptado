

document.querySelector("#encriptar").onclick = function(){
  const $textoEscrito = document.querySelector("#texto-normal");
  const textoEscrito = $textoEscrito.value
  
  document.querySelector("#texto-encriptado").value = encriptar(textoEscrito);

  return $textoEscrito.value= "";
  
}

document.querySelector("#desencriptar").onclick = function(){
  const $textoDesencriptado = document.querySelector("#texto-normal");
  const textoDesencriptado = $textoDesencriptado.value;

  document.querySelector("#texto-normal").value = desencriptar(textoDesencriptado);


}



function encriptar(texto){
  var reemplazos = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
  };
  texto = texto.replace(/a|e|i|o|u/g, function(asd){
    return reemplazos[asd];
  });
  return texto;
}

function desencriptar(texto){
  var reemplazos = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
  };
  texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(asd){
    return reemplazos[asd];
  });
  return texto;
}














/*

var character = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};
var entities = "aeas";
entities = entities.replace(/(a|e|i|o|u)/g,  function (c) {
return character[c];
});
console.log(entities)

*/