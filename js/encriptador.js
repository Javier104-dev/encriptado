document.querySelector("#encriptar").onclick = function(){

  const $textoEscrito = document.querySelector("#texto-normal").value;
  const textoEscrito = $textoEscrito.toLowerCase();
  
  if(!/^[a-z ]+$/g.test(textoEscrito)){ //agregar un espacio para que acepte espacios

    verAlerta();}

    else{ document.querySelector("#texto-encriptado").value = encriptar(textoEscrito);
      
      ocultarAlerta();
      ocultarfoto();
      verTextArea();
      verBoton();
      ocultarAlertaCopiado();
    }
}

document.querySelector("#desencriptar").onclick = function(){
  const $textoDesencriptado = document.querySelector("#texto-normal").value;
  const textoDesencriptado = $textoDesencriptado.toLowerCase();

  if(!/^[a-z ]+$/g.test(textoDesencriptado)){
    
    verAlerta();
    ocultarAlertaCopiado();
    
  }else{
      document.querySelector("#texto-encriptado").value = desencriptar(textoDesencriptado);
      document.querySelector("#titulo-caja").textContent = "Mensaje Desencriptado";
      ocultarAlertaCopiado();
      ocultarAlerta();
      ocultarfoto();
      verTextArea();
    }
}


document.querySelector("#copiarTexto").onclick = function(event){
  document.querySelector("#texto-normal").value = "";
  copiarTextoEncriptado();
  verAlertaCopiado();
  ocultarAlerta();
  event.preventDefault(); //se reenvia el formulario y reinicia la pagina, se pone event (antes retur false)
}

document.querySelector("#resetear").onclick = function(){
  ocultarTextArea();
  verFoto();
  ocultarBoton();
  ocultarAlerta();
  ocultarAlertaCopiado();
}



function encriptar(texto){
  var reemplazos = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
  };
  texto = texto.replace(/a|e|i|o|u/gi, function(x){
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


function copiarTextoEncriptado(){
  let texto = document.querySelector("#texto-encriptado");
  texto.select();
  
  document.execCommand("copy");
}



function verTextArea(){
  document.querySelector("#idtextArea").className = ""; // siempre usar #(id) para ocultar o da error
}

function ocultarTextArea(){
  document.querySelector("#idtextArea").className = "oculto";
}

function verFoto(){
  document.querySelector("#imagen2").className = ""; // siempre usar #(id) para ocultar o da error
}

function ocultarfoto(){
  document.querySelector("#imagen2").className = "oculto";
}

function verBoton(){
  document.querySelector("#copiarTexto").className = "";
}

function ocultarBoton(){
  document.querySelector("#copiarTexto").className = "oculto";
}

function verAlerta(){
  document.querySelector("#alerta").className = "";
}

function ocultarAlerta(){
  document.querySelector("#alerta").className = "visibilidad";
}

function verAlertaCopiado(){
  document.querySelector("#alerta-copiado").className = "";
}

function ocultarAlertaCopiado(){
  document.querySelector("#alerta-copiado").className = "visibilidad2";
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