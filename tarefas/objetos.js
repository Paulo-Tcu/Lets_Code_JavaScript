const prompt = require("prompt-sync")({ sigint: true });
// let cachorro = {
//     nome: 'Bob',
//     idade: 2,
//     dono: 'Carlos',
//     latir: () => console.log('Woof'),
//     comer: function(comida){
//       console.log(this.nome+' está comendo '+comida)
//     }
//   }

// let carro = {
//     nome: 'Gol',
//     marca: 'VW',
//     cor: 'Branco',
//     ano: 2019,
//     ligar: function(){
//         console.log(`O ${this.nome} esta ligando...`)
//     },
//     desligar: function(){
//         console.log(`O ${this.nome} esta desligando...`)
//     }
// }

// carro.ligar();
//---------------------------------------------------------------------------------------
// const alunos = [
//     ["João", 30, "Python", "Data Science"],
//     ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
//     ["Pedro", 40, "Java", "Mobile"],
//     ["Luciana", 25, "C#", "Web Full Stack - Backend"]
// ]
// /* ex 1 */ console.log(alunos[3]);
// /* ex 2 */ console.log(alunos[1][1]);
// /* ex 3 */ alunos[2].splice(alunos[2].indexOf("Mobile"),1);
// alunos[2].push("Data Science");
// console.log(alunos[2]);

// const pessoa = {
//     primeiroNome: "John",
//     segundoNome: "Doe",
//     idade: 30,
//     etnia: "pardo",
//     naturalidade: "Recife-PE",
//     nacionalidade: "brasileira",
//     showInfo: function(){
//         console.log(`${this.primeiroNome} ${this.segundoNome} tem ${this.idade} anos de idade, é ${this.etnia}, natural
//     de ${this.naturalidade} e de nacionalidade ${this.nacionalidade}.`)
//     }
// };

// pessoa.showInfo();

// const venda = {
//     produto: "ventilador",
//     marca: "Arno",
//     loja: "Amazon",
//     quantidade: 5,
//     preco: 500,
//     hasDesconto: function(){
//         return this.preco > 450 ? true :false;
//     },
//     calcularValorFinal: function(){
//         let valor;
//         if(this.hasDesconto())valor = this.preco - (this.preco*0.10);
//         return valor;
//     }
// }
// console.log(`[${venda.loja} ${venda.marca}] - [${venda.quantidade}] - [Valor total da venda = ${venda.calcularValorFinal()}]`);
//--------------------------------------------------------------------------------------------
// const animal = (nome = null, apelido = null, raca = null, idade = null, isVacinado = null) =>({
//     nome,
//     apelido,
//     raca,
//     idade,
//     isVacinado
// });

// const cachorro = animal("Toto",raca = "Vira-Lata", idade = 5);
// console.log(cachorro);

let vetor = [5, 4, 3, 2, 1];
let produto = (indice, valor) => indice*10
let resultado = vetor.map(produto);

console.log(resultado);