document.addEventListener('DOMContentLoaded', function() {
  var A = document.getElementById("Pergunta")
  A.textContent = "Insira o conjunto de dados, separados por virgula"
})

function Maior(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const primeiroDado = parseInt(numeros[0]);
    var holder = primeiroDado;
    for (i = 0; i < numeros.length; i++) {
      if (parseInt(numeros[i]) > holder) {
        holder = parseInt(numeros[i]);
      }
    }
    return holder;
  }

  function Menor(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const primeiroDado = parseInt(numeros[0]);
    var holder = primeiroDado;
    for (i = 0; i < numeros.length; i++) {
      if (parseInt(numeros[i]) < holder) {
        holder = parseInt(numeros[i]);
      }
    }
    return holder;
  }

  function Contagem(n1,n2){
    let aux = 0
    for(i=n1-1;i<n2;i++){
      aux++
    }
    return aux
  }

  function LoadContagem(){
    var conjuntoDeDados = (document.getElementById("Registro1").value).split(",")
    var res = document.getElementById("resultados")
    res.textContent = `Existem ${Contagem(Menor(conjuntoDeDados),Maior(conjuntoDeDados))} valores inteiros entre ${Menor(conjuntoDeDados)} e ${Maior(conjuntoDeDados)}.`
  }