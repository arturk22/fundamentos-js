// parâmetros de função

function soma(num1 = 0, num2 = 0){
     let resultado = num1 + num2;

    return resultado 
}

// console.log(soma(4,5))
// console.log(soma(440,-5))

// // parâmetros x argumentos


// // ordem dos parâmetros

// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} e a minha idade é ${idade}`
// }

// console.log(nomeIdade())

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2
}

console.log(multiplica(soma(5,4), soma(3)))
