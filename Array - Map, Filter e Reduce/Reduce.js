//Executa uma função em todos os elementos do array e retorna um valor unico

//array.reduce(callbackfn, initialValue)
//callback: função a ser executada a partir do acumulador
//initialValue: valor sobre o qual o retorno final ira atuar

//Ex
const callbackFn = function(accumulator, currentValue, index, array) {
    // do something
}

array.reduce(callbackfn, initialValue)

//accumulator/prevValue: acumulador de todas as chamadas de callbackfn
//currentValue: elemento atual sendo acessado pela função