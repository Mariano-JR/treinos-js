const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];  //para tornar os elementos de um set em um array, precisa de ultilizar um spread.
}

console.log(valoresUnicos(meuArray));