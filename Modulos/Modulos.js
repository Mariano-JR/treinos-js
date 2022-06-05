//Modulos: São arquivos Javascritp que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.
/*Vantagens:
- Organização do código;
- Compartilhamento de variaves em escopos diferentes;
- Explicita as dependencias dos arquivos */

//Exportar: Named exports:
//modo 1
export function mostrarIdade(pessoa) {  //export: usada para exportar função de outro arquivo
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostrarCidade(pessoa) {
    return `A Cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostrarHobby(pessoa) {
    return `O Hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

//modo 2
function mostrarIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostrarCidade(pessoa) {
    return `A Cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostrarHobby(pessoa) {
    return `O Hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostrarIdade,
    mostrarCidade,
    mostrarHobby
}

//Default exports: So pode haver um por arquivo; Será o retorno padrão do seu arquivo
function mostrarIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostrarCidade(pessoa) {
    return `A Cidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostrarHobby(pessoa) {
    return `O Hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostrarIdade,
    mostrarCidade,
    mostrarHobby
}

export default mostrarHobby;

//Importar: Named exports:
import {funcao, variavel, classe} from './arquivo.js'; //import: usada para importar oque estiver dentro de "{}" de outro arquivo

//Default exports:
import valorDefault from './arquivo.js';

//Trocar nome de imports:
import {arquivo as Apelido} from './arquivo.js'; //Usado para dar um apelido ao import
Apelido.metodo();

//Importar tudo de um arquivo
import * as INF0S from './arquivo.js'; //"*" ultilizado pra importar tudo, "as" ultilizado para dar apelido ao import(INF0S).
INF0S.metodoA();
console.log(INF0S.variavel);

//Vincular ao HTML
<script type="module" src="./main.js"></script> //É preciso colocar o type="module" no script HTML

/* - Modulos sempre estão em "strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessario utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "/" como ponto de partida. */