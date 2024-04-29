document.addEventListener('DOMContentLoaded', function() {
  var A = document.getElementById("Pergunta1")
  A.textContent = "Insira um conjunto de números separados por vírgula"
})

function Check(N) {
  var soma = 0;
  numeros = N
  for (i in numeros) {
    soma += parseInt(numeros[i]);
  }
  return soma;
}

function LoadSomatorio(){
  var res = document.getElementById("resultados")
  var a = (document.getElementById("Registro1").value).split(","); 
  res.textContent = `O resultado da soma do conjunto: ${Check(a)}`
}