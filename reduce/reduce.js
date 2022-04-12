function somaArray(arr) {
    return arr.reduce(function callBack(prev, current) {
        return prev + current;
    })
}

const array = [1, 2]

//console.log('Igual a:', somaArray(array));


function calcularCompra(saldoDisponivel, lista) {
    return lista.reduce(function callBack(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

const lista = [
    {
        name: 'café',
        preco: 10
    },

    {
        name: 'nescau',
        preco: 20
    },

    {
        name: 'cerveja',
        preco: 30
    }
]



const saldoDisponivel = 100;

console.log('saldo dispónivel', calcularCompra(saldoDisponivel, lista));