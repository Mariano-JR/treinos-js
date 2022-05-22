//Set são estruturas que armazenam apenas valores únicos, que não se repetem nunca
const mySet = new Set()  //declarado por "new Set()"

mySet.add(1); //adiciona um valor ao Set
mySet.add(5);

mySet.has(1); //true      declara se tem aquele valor no Set
mySet.has(3); //false

mySet.delete(5);  //deleta um valor do set

/* Set vs Array
-Possui valores únicos;
-Em vez de propriedade length, consulta-se o número de registro pela propiedade size
-Não possui os métodos map, filter, reduce etc. */