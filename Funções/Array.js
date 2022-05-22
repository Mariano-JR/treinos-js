//Spread: Forma de lidar com elementos de array de forma separada
function sum (x, y, z) {
    return x + y + z;
}

const numbers = [1, 2 ,3];

console.log(sum(...numbers));

//Rest: Combina argumentos em um array (O que era um elemento independente se torna um array)
function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho()  //0
confereTamanho(1, 2)  //2
confereTamanho(3, 4, 5)  //3