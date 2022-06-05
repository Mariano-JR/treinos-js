/*Prototipos: Todos os objetos JavaScript herdam propriedades e metodos de um prototype.
O objeto Object.prototype esta no topo desta cadeia.*/

//Classes:
//Syntatic sugar: uma sintaxe feita para facilitar a escrita
//Sem Syntatic Sugar:
var Meal = function(food) {
    this.food = food
}

Meal.prototype.eat = function() {
    return '(EMOJI)'
}
//Com Syntatic sugar:
class Meal {
    constructor (food) {
        this.food = food
    }

    eat() {
        return '(EMOJI)'
    }
}

//Ex1
class Animal {
    constructor(type = 'animal') { //constructor: constroi a classe e cria parametros
        this.type = type
    }

    get type() { 
        return this._type
    }
                                        //Get, Set: Ultilizado para acessar os parametros da classe
    set type(val) {
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log('Making animal sound')
    }
}

let a = new Animal()
console.log(a.type) // ANIMAL

class Cat extends Animal {
    constructor() {
        super('cat') //super: serve para jogar o type para a classe pai em cima
    }

    makeSound() { //Metodo da classe
        super.makeSound()
        console.log('Meow!')
    }
}

let b = new Cat()
console.log(b.type) //CAT