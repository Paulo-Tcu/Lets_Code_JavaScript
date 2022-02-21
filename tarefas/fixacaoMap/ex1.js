const prompt = require("prompt-sync")({ sigint: true });
const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000
    },
    {
        id: 2,
        nome: 'Galaxy A51',
        preco: 1500
    },
    {
        id: 3,
        nome: 'Iphone 12',
        preco: 12000
    }
];

const produtosComDesconto = produtos.map((obj,indice) => {
    let numero = parseFloat(prompt(console.log(`Informe o valor de desconto so produto ${obj.nome} com valor sem desconto de R$ ${obj.preco}: `))).toFixed(2);
    return {...produtos[indice],
    precoDesconto: obj.preco-((obj.preco/100)*numero)}
})

console.log(produtosComDesconto);