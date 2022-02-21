const prompt = require("prompt-sync")({ sigint: true });

//                              Tarefa solicitada no chat do google meet
// const nota1 = parseFloat(prompt("Digite a primeira nota: "));
// const nota2 = parseFloat(prompt("Digite a segunda nota: "));

// if((nota1 + nota2)/2 >= 7) console.log("O aluno ficou com média "+(nota1+nota2)/2+" e foi aprovado");
// else console.log("O aluno ficou com média "+(nota1+nota2)/2+" e foi reprovado");

//---------------------------------------------------------------------------------------------
//                              Questão 1
// const idade = parseInt(prompt("Digite sua idade: "));
// if (idade >= 18) console.log("Maior de idade, pois possui "+idade+" anos.");
// else console.log("Menor de idade, pois possui "+idade+" anos.");
//-----------------------------------------------------------------------------------------------
//                              Questão 2
// while(true){
//     const valor1 = parseInt(prompt("Digite o primeiro valor inteiro: "));
//     const valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
//     const valor3 = parseInt(prompt("Digite o terceiro valor inteiro: "));

//     if (valor1 === valor2 || valor1 ===valor3 || valor2 === valor3){
//         console.log("Os valores não podem ser repetidos, tente novamente.")
//     }
//     else {
//         if (valor1 > valor2 && valor1 > valor3) console.log("O maior valor é: "+valor1);
//         if (valor2 > valor1 && valor2 > valor3) console.log("O maior valor é: "+valor2);
//         if (valor3 > valor2 && valor3 > valor1) console.log("O maior valor é "+valor3);
//         break;
//     }
// }
//------------------------------------------------------------------------------------------------------
//                              Questão 3
// const salario = parseFloat(prompt("Digite o valor do sário em RS: ")).toFixed(2);
// const tempo = parseInt(prompt("Digite o tempo de trabalho na empresa, somente em anos: "));

// if (tempo >= 5) console.log("O valor a recebecer de bônus é de R$ "+(salario*0.20).toFixed(2));
// else console.log("O valor a recebecer de bônus é de R$ "+(salario*0.10).toFixed(2));
//--------------------------------------------------------------------------------------------------------
//                              Questão 4
// const emprestimo = parseFloat(prompt("Digite o valor do emprestimo: R$ "));
// const parcela = parseInt(prompt("Digite a quantidade de parcelas que deseja: "));
// const salario = parseFloat(prompt("Digite o valor do sário do solicitante: R$ "));

// if (emprestimo / parcela <= salario * 0.30) console.log("Emprestimo Aceito");
// else console.log("Emprestimo Negado");

