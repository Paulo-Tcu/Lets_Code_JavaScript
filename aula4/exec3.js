const prompt = require("prompt-sync")({ sigint: true });

function menorValor(menor){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[i+1]){
            valor1 = arr[i];
        }
          
    }
    return console.log(menor);
}
function maiorValor(maior){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[i+1])maior = arr[i+1];
    }
    return console.log(maior);
}

let arr = []
let total = 0;
for(let i = 1; i <= 10; i++){
    let valor = parseInt(prompt(console.log("Digite o "+i+"° valor: ")));
    arr.push(valor);
    total += valor;
}
console.log(arr+" E o total foi de: "+total);
const menor = menorValor(0);
const maior = maiorValor(0);
