const prompt = require("prompt-sync")({ sigint: true });
// let i =0,soma=0,contador=0;
// while(contador !== 1000){
//     let resultado = (1/i);
//     i = i*2;
//     soma +=resultado;
//     contador++;
// }
// console.log(soma);
//-------------------------------------------------------------------------------------------------------------
let contador =1,atual = 1;
const fatorial = parseInt(prompt(console.log("Digite o fatorial no qual deseja ver o resultado: ")));
switch (fatorial){
  case 0:
   atual = 1;
   break;
  case 1:
    atual = 1;
    break;
  default:
    while(contador <= fatorial){
      atual *= contador;
      contador++;
    }
    break;
}
console.log("O resultado de Fatorial "+fatorial+" é de: ",atual);