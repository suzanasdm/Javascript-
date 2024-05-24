
let quilo1 = document.querySelector("#quilo1");
let quantidade = document.querySelector("#quantidade");
let ok = document.querySelector("#ok");
let h2Titulo = document.querySelector("#h2Titulo");

function somar() {
    let soma = parseFloat(quilo1.value) * parseFloat(quantidade.value);
    h2Titulo.textContent = soma;
}

ok.onclick = somar;
