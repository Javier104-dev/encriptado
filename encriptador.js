

document.querySelector("#encriptar").onclick = function(){
  const $textoEscrito = document.querySelector("#texto-normal");
  const textoEscrito = $textoEscrito.value
  
  document.querySelector("#texto-encriptado").value = encriptar(textoEscrito);
 
  ocultarfoto();
  verTextArea();
}

document.querySelector("#desencriptar").onclick = function(){
  const $textoDesencriptado = document.querySelector("#texto-normal");
  const textoDesencriptado = $textoDesencriptado.value;

  document.querySelector("#texto-encriptado").value = desencriptar(textoDesencriptado);
  document.querySelector("#titulo-caja").textContent = "Texto Desencriptado"
}

document.querySelector("#resetear").onclick = function(){
  ocultarTextArea();
  verFoto()
}




function encriptar(texto){
  var reemplazos = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
  };
  texto = texto.replace(/a|e|i|o|u/g, function(x){
    return reemplazos[x];
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
  texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(x){
    return reemplazos[x];
  });
  return texto;
}

function verTextArea(){
  document.querySelector("#idtextArea").className = ""; // siempre usar #(id) para ocultar o da error
}

function ocultarTextArea(){
  document.querySelector("#idtextArea").className = "oculto";
}

function verFoto(){
  document.querySelector("#imagen").className = ""; // siempre usar #(id) para ocultar o da error
}

function ocultarfoto(){
  document.querySelector("#imagen").className = "oculto";
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