const prompt = require("prompt-sync")({ sigint: true });

function compararNumeros(a, b){
    return a - b;
}
let arr = []
let total = 0;
for(let i = 1; i <= 10; i++){
    let valor = parseInt(prompt(console.log("Digite o "+i+"° valor: ")));
    arr.push(valor);
    total += valor;
}
console.log("Os valores digitados foram: "+arr+" E o total foi de: "+total);
arr.sort(compararNumeros);
console.log("O menor valor digitado é: "+arr[0]+"\nE o maior valor é: "+arr[arr.length - 1]);



