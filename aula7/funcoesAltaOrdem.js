const prompt = require("prompt-sync")({ sigint: true });

const somar = (a,b) => a+b;
const subtrair = (a,b) => a-b;
const multiplicador = (a,b) => a*b;
const dividir = (a,b) => b > 0 ? a/b : NaN;

const calcular = (operacao, a,b) => operacao(a,b);

// const resultado = calcular(somar,2,2);
// console.log(resultado);

const operacao = parseInt(prompt(console.log("Escolha uma operação a utilizar:\n[1] Adição(+)\n[2]Subtração(-)\n[3]Multiplicação(x)\n[4]Divisão(/): ")));
const v1 = parseInt(prompt(console.log("Digite um valor: ")));
const v2 = parseInt(prompt(console.log("Digite outro valor: ")));
let resultado =0;
switch(operacao){
    case 1:
        resultado = calcular(somar,v1,v2);
        console.log(resultado);
        break;
    case 2:
        resultado = calcular(subtrair,v1,v2);
        console.log(resultado);
        break;
    case 3:
        resultado = calcular(multiplicador,v1,v2);
        console.log(resultado);
        break;
    case 4:
        resultado = calcular(dividir,v1,v2);
        console.log(resultado);
        break;
    default:
        console.log("Opção inválida");
        break;
}
//                      tarefas
//Criar uma função media de 2 números utilizando apenas a função calcular; media(a,b)


//Criar uma função que diz qual foi o valor de 10% de desconto para um produto passando o seu preço. desconto(preco)