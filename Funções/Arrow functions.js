//Representada pela seta "=>", é uma abreviação de criação de função dentro de uma constante ou variavel - ARROW FUNCTION NÂO FAZ HOISTING
//Ex.1
const helloWorld = () => {
    return "Hello World"                        //sem arrow function ficaria: const helloWorld = function(){
                                                //                                return "Hello World";
}                                               //                                }

//Ex.2  - Caso tenha apenas uma linha, pode dispensar o RETURN e as CHAVES
const soma = (a, b) => a + b;

soma(4, 6)  //10

//Ex.3 - Caso tenha apenas um parametro, pode dispensar os parenteses
const soma2 = a => a;

soma(4); // 4

//Dentro de uma arrow function, o "THIS" sempre vai ser o objeto global, metodo para modificar seu valor não funcionara;
//Não existo o objeto "ARGUMENTS";
//O construtor (Ex: new MeuObjeto()) não pode ser ultilizado;
//Para metodos de objetos, sempre ultilizar a função comum.