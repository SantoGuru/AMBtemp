document.addEventListener('DOMContentLoaded', function() {
  var A = document.getElementById("Pergunta1")
  A.textContent = "Insira um número positivo e inteiro:"
})



function Check(N) {
  if (N <= 1) {
    alert("Dado invalido!")
    if (N == 1){
      return "o número 1 não é composto e nem considerado um número primo"
    } 
    return "Não é um número positivo/inteiro"
  } else {
  for (i = 2; i <= N; i++) {
      if (N % i == 0) {
        switch (N == i) {
          case true:
            return "É primo";
          case false:
            return "Não é primo";
        }
      }
    }
  }
}

function LoadPrimo(){
  var res = document.getElementById("resultados")
  var a = parseInt(document.getElementById("Registro1").value); 
  res.textContent = `O número(${a}) digitado: ${Check(a)}`
}