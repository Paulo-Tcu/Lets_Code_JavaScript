const prompt = require("prompt-sync")({ sigint: true });

// function helloWorld(){
//     console.log("Wello World!!!");
// }

// helloWorld();

// const banana = "Banana";
// console.log(`Fruta do dia: ${banana}`); //Para utilizar código JS sem contatenar: Tamplate String

// function somar(a, b){ //Função com parametros
//    return a+b;
// }

// function somar(a, b){ //Função com parametros e validando com if ternario
//     let validar =  isNaN(a) || isNaN(b);
//     return validar ? NaN : a+b;
//  }

// //somar(2,"a");

// //  Funções Anônimas
// //Padrão
// const show = function(){
//     console.log("Mostrando");
// }
// show();

// //função reservada setTimeout com função anonima
// setTimeout(function(){              
//     console.log("Mostrando após 1 segundo");
// },1000);

// //Função anonima sendo exatamente executada
// (function(){
//     console.log("Estou aqui");
// })();

//------------------------atividade em aula---------------------------------------

// criar um obj com nome e sobrenome e printar por função anonima e exatamente executada
(function(nome, sobrenome){
    const pessoa = {
        nome,
        sobrenome,
    }
    console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
})("Paulo","Araujo")