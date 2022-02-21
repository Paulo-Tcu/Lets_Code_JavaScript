const prompt = require("prompt-sync")({ sigint: true });

const arr = [10, 20, 30, 40, 50];

//for-in, onde o laço é executado dentro de todo o array
// for (index in arr){
//     console.log(index, arr[index]);
// }

// for-of, onde ele mostra os valores dentro do array
// for(value of arr){
//   console.log(value);
// }

// foi criado a let i com valor inicial 0 para executar sempre que i for menor que o tamanho do array
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//------------------------------------------------------------------------------------------------------
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rolar(dado){
    return randomIntFromInterval(1, dado);
}

function splitInput(input){
    const splitInput = input.toUpperCase().split("D");
    const normalizedINput = [
        parseInt(splitInput[0]),
        parseInt(splitInput[1]),
    ]
    return normalizedINput;
}

const input = prompt(console.log("Digite a quantidade e o dado no formato XDY, exemplo: 2D6: "));
const quantidadeEDado = splitInput(input);
const quantidade = quantidadeEDado[0];
const dado = quantidadeEDado[1];

let jogadasDoDado = [];
let total = 0;

for (let i = 0; i < quantidade; i++){
    const resultado = rolar(dado);
    jogadasDoDado.push(resultado);
    total += resultado;
}
console.log("Rolagens: "+ jogadasDoDado +", Total: "+ total);

//for (;;) console.log("Lup infinito");