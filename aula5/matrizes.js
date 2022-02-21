const prompt = require("prompt-sync")({ sigint: true });

const tabela = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

//const linhaTabela = tabela[0];

// console.log(tabela[0][0]);
// console.log(linhaTabela[0]);
// let coluna = parseInt(prompt(console.log("Digite o numero da coluna desejada: ")));
// for (let i = 0; i < tabela.length;i++){
//     console.log(tabela[i][coluna]);
// }
// console.log("-------------------------------------------------------")
// for(let i =0; i < tabela.length;i++){
//   for(let n=0; n < tabela[i].length;n++){
//       console.log(tabela[i][n]);
//   }
    
// }
console.log(tabela.join("\n"));

const arr = [...tabela,10, 11, 12]; //assim cria uma nova matriz com mesmo valor --- spred operator
// const tabela2 = tabela; // assim somente referencia o espaço da memoria

// sem destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//com destructuring
//const [a, b, c] = arr
const [a, b, c, ...resto] = arr // usando o spred no desctructuring
console.log(arr+"\n"+a+"\n"+b+"\n"+c+"\n"+resto);