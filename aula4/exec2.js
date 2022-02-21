const prompt = require("prompt-sync")({ sigint: true });

let valor = 0;
const tabuada = parseInt(prompt(console.log("Digite a tabuada que deseja exibir: ")));
while(valor <= 10){
    console.log(tabuada+" X "+valor+" = ",tabuada * valor);
    valor ++;
}