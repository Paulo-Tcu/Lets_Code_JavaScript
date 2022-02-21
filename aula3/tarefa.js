/*Construa um algoritmo que leia o código de um determinado produto e mostre a sua classificação. 
Utilizando ifs e usando switch

Código Classificação
1 - Alimento não-perecível
2, 3 ou 4 - Alimento perecível
5 ou 6 - Vestuário
7 - Higiene pessoal
8, 9, 10 - Utensílios domésticos
Qualquer outro código Inválido */

const prompt = require("prompt-sync")({ sigint: true });

const cod = parseInt(prompt("Digite o código do produto: "));

// if(cod === 1)console.log("Alimento não-perecível");
// else if(cod === 2 || cod === 3 || cod === 4)console.log("Alimento perecível");
// else if(cod === 5 || cod === 6)console.log("Vestuário");
// else if(cod === 7)console.log("Higiene Pessoal");
// else if(cod === 8 || cod === 9 || cod === 10)console.log("Utensílios domésticos");
// else console.log("Inválido");

//Com switch case
switch (cod){
    case 1:
        console.log("Alimento não-perecível");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Alimento perecível");
        break;
    case 5:
    case 6:
        console.log("Vestuário");
        break;
    case 7:
        console.log("Higiene Pessoal");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Utensílios domésticos");
        break;
    default:
        console.log("Inválido");
        break;
}