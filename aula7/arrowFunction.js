const prompt = require("prompt-sync")({ sigint: true });

// Metodos para Arrow Function
// const somar = function(num1, num2){
//     return num1 + num2;
// }

// const somar = (num1, num2) => {
//     return num1 + num2;
// }

const somar = (num1, num2) => console.log(num1 + num2);

// const somar = (num1, num2) => (
//     num1 + num2
// );

const show = () => console.log("Mostrando uma Função");

show();
somar(1,2);