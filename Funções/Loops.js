// if/else: declarada uma condição, se TRUE, será ultilizado codigo dentro de if, se FALSE, será ultilizado else
//Ex.1
function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    
    return resultado;
}

numeroPositivo(2)  // true
numeroPositivo(-5)  // false

//Ex.2
function numeroPositivo (num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

//Ex.3
function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}

//Da pra armazenar outro if dentro de um mesmo com Else If

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo";
}

//Switch/case  sempre precisa de um valor "default", sempre compara tipo e valor, é ideal para comparar muitos valores
function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1) // cão
getAnimal(4) // peixe
getAnimal("1") // peixe

//for: loop dentro de elementos interaveis (arrays, strings).
function multiplicaPorDois(arr) {
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados
}

const meusNumeros = [2, 33, 456, 356, 40]

multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]

//for in: loop entre propriedades enumeraveis de um objeto
//Ex.1
function forInExemplo(obj) {
    for (prop in obj) { //prop: cada propiedade dentro do objeto
        console.log(prop);
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }
}

forInExemplo(meuObjeto);
// nome
//idade
//cidade

//Ex.2
function forInExemplo(obj) {
    for (prop in obj) {
        console.log(obj[prop]); //Acessar dados do objeto
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }
}

forInExemplo(meuObjeto);
// João
// 20
// Salvador

// for of: loop entre estruturas interaveis (arrays, strings)
//Ex.1
function logLetras(palavras) {
    for (letra of palavra) {
        console.log(letra);
    }

const palavra = "abacaxi";

logLetras(palavra)
// a
// b
// a
// c
// a
// x
// i
}

//Ex. 2
function logNumeros(nums) {
    for (num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logLetras(nums);
// 30
// 20
// 233
// 2


//While e do while: Executa a instrução até que a mesma seja falsa
//Ex.1
function exemploWhile() {
    let num = 0

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

//Ex.2
function exemploDoWhile() {
    let num = 0;

    do {
        console.log(num);
        num++;
    } while (num <= 5)
}

exemploDoWhile()
// 0
// 1
// 2
// 3
// 4
// 5

//Ex.3
function exemploDoWhile() {
    let num = 6;

    do {
        console.log(num);
        num++
    } while (num <= 5)
}

exemploDoWhile()
//6