let saldoincial = document.querySelector("#saldoincial");
let envio1  = document.querySelector("#envio1");
let h2titulo = document.querySelector("#h2titulo");

function ValorInicial ()
{   let valor =   Number(saldoincial.value)*1.01;
     h2titulo.textContent = 'Saldoinicial: ' + valor;
     
     
}
envio1.onclick =  ValorInicial;