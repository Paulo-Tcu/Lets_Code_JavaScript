//TIPOS PRIMITIVOS
/*
let undefined;
let numero = 1;
let texto = 'texto';
let booleano = true;

const pi = 3.14;

//TIPOS COMPLEXOS


/*function funcao(){
    console.log("função");
}
*/

/* let array = [1,2,3];
let objeto = {a:1, b:2};

//console.log("Console1:",numero);

//numero = "Olá";

console.log(typeof undefined);
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof null); 
const helloWord = "Olá mundo";
console.log(helloWord); */
const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseInt(prompt("Digite um número: "));
const valor2 = parseInt(prompt("Digite um número: "));

const media = (valor1 + valor2)/ 2.0;

console.log(media);