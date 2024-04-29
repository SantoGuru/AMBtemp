document.addEventListener('DOMContentLoaded', function() {
    var A = document.getElementById("Pergunta")
    A.textContent = "Insira até que posição você deseja receber:"
 })
 
 function Fibonacci(){
    var n = parseInt(document.getElementById("Registro1").value); 
    var Fibo = []
    var res = document.getElementById("resultados")
    if (!isNaN(n)){
     for (i=1;i<=n;i++){
         function FiboInter(n){
         var antepNum
         var penNum = 0
         var numAtual = 1
         if ((n==0)||(n==1)){
             return n
         }
         for(x=2;x<=n;x++){
             antepNum = penNum
             penNum = numAtual
             numAtual = antepNum + penNum
         }
         return numAtual
         }
         Fibo.push(FiboInter(i))
     }
     res.textContent = "Os numeros até a posição são:"+`${Fibo.join(", ")}`
    }else{
        alert("Dado inserido é invalido!")
    }
}