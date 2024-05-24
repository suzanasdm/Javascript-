let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let botao = document.querySelector("#botao");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
 

function medias() {
    let media1 = parseFloat(numero1.value) ;
    let media2 = parseFloat(numero2.value);
    let media3 = parseFloat(numero3.value);

 if (isNaN(media1) || isNaN(media2) || isNaN(media3)) {
    alert('Por favor, insira três números válidos.');
    return; 
 }
// Calcula a média aritmética
let mediad = (media1 + media2 + media3) / 3; 

let valor = (media1 * 3 + media2 * 2 + media3 * 5) / (3 + 2 + 5);
 let soma2 = valor + mediad;
let soma3 = (valor + mediad+ soma2) / 3
// Exibe os resultados
{}

    a.textContent = mediad.toFixed(2);
    b.textContent = valor.toFixed(2);
    c.textContent = soma2.toFixed(2);
    d.textContent = soma3.toFixed(2);
}





 botao.onclick = medias;
 
