const prompt = require("prompt-sync")({ sigint: true });

// const arr = ['banana', 'maça','true','seleção','abc','false'];

// const arr2 = arr.filter(obj => obj.length < 5);
// console.log(arr2);
//---------------------------------------
// const arr = [1,5,41,78,15,548,1,4];

// const arr2 = arr.filter(obj => obj > 5);
// console.log(arr2);
//--------------------------------------
// const arr = [1,5,41,78,15,548,1,4];
// const arr2 = arr.filter(obj => obj % 2 === 0);
// console.log(arr2);
//-------------------------------------
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const isPrime = (num) => {
//     for (let i = 2; i <= num; i++)
//     if (num % i === 0 && num != 2)return false;
//     else if(num > 1)return num;
// }

// const arry2 = array.filter(valor => isPrime(valor));
// console.log(arry2);
//------------------------------------------------
// const people = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]
// const people2 = people.filter(obj => obj.age >= 18);
// console.log(people2);
//--------------------------------------------------
// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const people2 = people.filter(obj => obj.member === false);
// console.log(people2);
//----------------------------------------------------------
// const numeros = [1,2,3,2,1,3,3,5,4,6];

// const numeros2 = numeros.filter((valor,indice) => numeros.indexOf(valor) === indice);
// console.log(numeros2);
//----------------------------------------------------------
const restaurantes = [
    {
      nome: 'Pizzaria do Mario',
      horario_abertura: 14,
      horario_fechamento: 23
    },
    {
      nome: 'Churrascaria do Ronaldo',
      horario_abertura: 11,
      horario_fechamento: 14,
    },
    {
      nome: 'Bar do Zeca',
      horario_abertura: 12,
      horario_fechamento: 2,
    },
    {
      nome: 'Doceria da Mara',
      horario_abertura: 8,
      horario_fechamento: 20,
    },
  ]
let horaAtual = hora_data = new Date().getHours()
const restaurantes_abertos = restaurantes.filter(obj => {
    if(obj.horario_fechamento < obj.horario_abertura){
      if(horaAtual >= obj.horario_abertura || horaAtual <= obj.horario_fechamento)return obj;
    }
    else if(horaAtual >= obj.horario_abertura && horaAtual <= obj.horario_fechamento) return obj;

});
console.log(restaurantes_abertos);
