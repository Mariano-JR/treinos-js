/*types: Utilizados para juntar diferentes interfaces ou definir que uma variavel pode ser uma interface
//interfaces: Utilizados para contrato de estrutura de dados

interface IAnimal { //Forma de ultilização da interface
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal {  //Extensão da primeira interface
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; //Forma de utlização do Type

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: false,
}
*/

/*Input com typescript
const input = document.getElementById('input') as HTMLInputElement; //"as": utilizado para falar ao typescript o elemento que esta sendo chamado

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});
*/

/*Generic types
function adicionaApendiceALista <T> (array: T[], valor: T) {  //Geralmente a letra "T" é utilizada quando não se sabe oque vai receber
    return array.map(() => valor);
}

adicionaApendiceALista(["A", "B", "C"], "D");
*/

/*"IN": ultilizado para saber se o paramentro possui algum dos dados das interfaces
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) { //Utilização do "in" no IF
        //redirecionar para a area de administração
    }

    // redirecionar para a area do usuario
}
*/

/* "?" :  Utilizada para deixa um item como OPCIONAL
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'; //Cargo se torna um parametro opcional
}

function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        //redirecionar(usuario.cargo);
    }

    //redirecionar para a area do usuario
}
*/

/*Criando readonly e private: dados apenas para leitura, sem alteração.
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]; //"-?": Utilizado para que a classe com "?" seja obrigatoria
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
*/

/*importação de bibliotecas com Typescript
É preciso que seja utilizado tambem um arquivo d.ts para que seja utilizado a integração com biblioteca
import $ from 'jquery'; //JQuery

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();
*/

/* Omit: utilizado para omitir alguma funcionalidade da interface
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    nome: 'Mariano',
    idade: 25,
}
*/