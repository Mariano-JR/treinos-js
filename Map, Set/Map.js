//Uma coleção de arrays no formato [chave, valor];
//Pode ser interado por um loop for..of
const myMap = new Map()  //declarado por "new Map()"

myMap.set('apple', 'fruit');
//Map(1) {"apple" => "fruit}    adiciona uma chave e um valor para essa chave

myMap.get(apple);
//"fruit"    declara o valor da chave

myMap.delete("apple");
//true       deleta o valor da chave

myMap.get("apple");
//undefined   valor de "apple" foi apagado

/*Map vs Objeto
-Maps podem ter chaves de qualquer tipo;
-Maps possuem a propiedade length;
-Maps são faceis de iterar;
-Ultilizado quando o valor da chaves é desconhecido;
-Os valores tem o mesmo tipo*/