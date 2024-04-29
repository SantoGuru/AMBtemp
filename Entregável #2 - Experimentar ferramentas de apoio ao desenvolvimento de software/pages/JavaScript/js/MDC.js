document.addEventListener('DOMContentLoaded', function() {
  var A = document.getElementById("Pergunta1")
  A.textContent = "Insira o valor de A:"
  var B = document.getElementById("Pergunta2")
  B.textContent = "Insira o valor de B:"
})

function mdc(a, b) {
  var aux;
  while (a % b > 0) {
    aux = a % b;
    a = b;
    b = aux;
  }
  return b;
}

function LoadMDC(){
  var res = document.getElementById("resultados")
  var a = parseInt(document.getElementById("Registro1").value); 
  var b = parseInt(document.getElementById("Registro2").value); 
  res.textContent = `${mdc(a, b)}`
}