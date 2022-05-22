//Filtra os itens de acordo com determinada condição
//Não modifica o array principal
//Cria um novo array com os itens que passaram pelo filtro

Array.filter(callback, thisArg)
//callback: função a ser executada em cada elemento;
//thiArg (opcional): valor de "this" dentro da função callback

//Ex
const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => frutas.includes('maça')) //includes: string com aquela palavra
//retorno: ['maça fuji', 'maça verde'];