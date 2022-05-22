/*Resultado de um array apos uma operação
- Não modifica o array original;
- Cria um novo array;
- Realiza as operações em ordem. */

array.map(callback, thisArg)
//callback: função a ser executada em cada elemento
//thisArg (opcional): valor de this dentro da função callback

callback(item, index, array)  // não é obrigatorio passar todos os itens

/* Map vs forEach
- Valor que vai ser retornado
- Considere se o array auxiliar será necessario */
//usando Map
const array1 = [1, 2, 3, 4, 5];

array.map((item) => item * 2); //retorna: [2, 4, 6, 8, 10]

//usando forEach
const array2 = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorna: undefined