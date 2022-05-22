function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'João',
    idade: 45,
}

const animal = {
    nome: 'Nala',
    idade: 6,
}

console.log(calculaIdade.call(pessoa1, 5));