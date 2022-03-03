const idadeMinima = 18;
let idadeCliente = 18;

if(idadeCliente >= idadeMinima){
    console.log("pode");
}else{
    console.log("não pode");
}

idadeCliente = idadeCliente - 1;

            // condições                  //true   //false
console.log(idadeCliente >= idadeMinima ? "pode" : "não pode");