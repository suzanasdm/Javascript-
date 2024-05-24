let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4")
let retorno = document.querySelector("#retorno");
let envio = document.querySelector("#envio");


function calcularSoma() {
    
    let numero1 = parseFloat(valor1.value);
    let numero2 = parseFloat(valor2.value);
    let numero3 = parseFloat(valor3.value);
    let numero4 = parseFloat(valor4.value);
   
    let soma = numero1 + numero2 +numero3 + numero4;
    
    
    let maiorValor =   (numero1 <= numero2) ? 
    ((numero1 <= numero3) ? 
     ((numero1 <= numero4) ? numero1 : numero4) : 
     (numero3 <= numero4 ? numero3 : numero4)) : 
    ((numero2 <= numero3) ? 
     ((numero2 <= numero4) ? numero2 : numero4) : 
     (numero3 <= numero4 ? numero3 : numero4));
    retorno.textContent =  maiorValor;
}

envio.onclick=calcularSoma;