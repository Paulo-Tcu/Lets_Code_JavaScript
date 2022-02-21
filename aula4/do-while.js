const prompt = require("prompt-sync")({ sigint: true });

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const numero = randomIntFromInterval(1, 10);

// do{
//     var apostaUsuario = parseInt(prompt("Digite um número entre 1 e 10: "));
//     if(apostaUsuario !== numero){
//         apostaUsuario = console.log("Tente novamente !");
//     }
// } while (apostaUsuario !== numero);

// console.log("Parabéns! Você acertou!");

//-------------------------------------------------------------------------------------------
let acabou = false;
do{
    const dado = parseInt(prompt(console.log("Digite um dado de 4, 6, 8, 10, 12 ou 20 lados ou 0 para parar: ")));
    if(
        dado === 4 ||
        dado === 6 ||
        dado === 8 ||
        dado === 10 ||
        dado === 12 ||
        dado === 20
    ){
      console.log(randomIntFromInterval(1, dado));
    }
    else if (dado === 0){
      acabou = true;
      console.log("Fim do sistema")
    }
    else(console.log("Valor inválido"))
}while(!acabou)