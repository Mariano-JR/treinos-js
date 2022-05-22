//Quando uma function é ultilizada dentro de um objeto, ela se torna um METODO
//Se o This for ultilizado dentro de um metodo, ele ira servir de referencia para o objeto pai do metodo
//Ex.1 
const pessoa = {
    firstName : "André",
    lastName  : "Soares",
    id        : 1,
    fullName  : function() {
        return this.firstName + " " + this.lastName;
    },
    getId     : function() {
        return this.id;
    }
};

pessoa.fullName(); // "André Soares"
pessoa.getId();    // 1

//Manipulação de valores this:
//Call - Ultilizado para chamar um dado em um objeto especifico
//EX. 
const pessoa1 = {
    nome : "Miguel",
};

const animal = {
    nome : "Murphy",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa1);  // "Miguel"
getSomething.call(animal);  // "Murphy"

//Call tambem pode ser ultilizado em funções com parametros
//Ex
const myObj = {
    num1 : 2,
    num2 : 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // 12

//Apply - tambem funciona como call
//Ex
const pessoa2 = {
    nome : "Miguel",
};

const animal1 = {
    nome : "Godi",
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa2);  // "Miguel"
getSomething.apply(animal1);  // "Godi"

//Diferente do Call, pra usar o Apply em funções com parametros, temos que colocar os elementos do parametro dentro de um array
//Ex
const myObj1 = {
    num1 : 2,
    num2 : 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj1, [1, 5]); // 12

//Bind - Clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parametro
//Ex
const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno(); // "Bruno"