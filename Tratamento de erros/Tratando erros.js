//Throw: Define no console um erro
function verificaPalindromo1(string) {
    if (!string) throw "String invalida";  // retorna um erro no console com a frase em ""
}

verificaPalindromo1('');

//Try...catch: pega o erro com "try" e manipula o erro com "catch"
function verificaPalindromo2(string) {
    if (!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo1(string) {
    try {
        verificaPalindromo2(string)
    }
    catch(e) { //(e) => significa Erro
        console.log(e) //Mostra no console o erro(Throw) manipulado
    }
}

tryCatchExemplo1('');

//Finally: Ultilizado junto do Try...Catch, que sera chamada independe se tem um erro ou não, finally sempre será executado
function verificaPalindromo3(string) {
    if (!string) throw "String invalida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo2(string) {
    try {
        verificaPalindromo3(string)
    }
    catch(e) { 
        throw e;
    }
    finally {
        console.log('A string enviada foi:' + string); //Mostra no console que a string foi vazia
    }
}

tryCatchExemplo2('');