const list = [
    {
        nome: 'sabao em po',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome: 'toalha',
        preco: 30,
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, list) {
    return list.reduce(function(prev, current) {

        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, list));