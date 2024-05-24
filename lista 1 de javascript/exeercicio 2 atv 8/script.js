let suzana = document.querySelector ("#suzana");
let suzana2 = document.querySelector( "#suzana2");

function nome(){
    if (Number(suzana2.value)=== 1){ 
        alert ("parafuso");}
        else if (Number(suzana.value)=== 2){
            alert("Porca");}
            else if (Number(suzana.value)=== 3){
                alert("Prego");}
                else {
                    alert("diversos")
                }
                    

}
suzana.onclick = function(){
    nome()
}
      