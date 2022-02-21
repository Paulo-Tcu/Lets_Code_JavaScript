const prompt = require("prompt-sync")({ sigint: true });

// const precoProduto = [150,2500,1845,674,50,634,789,147,987,1000];

// const precoComDesconto = precoProduto.map(num => {
//     if (num < 200){
//         return num = num-(num * 0.05)
//     }
//     else if(num >= 200 && num < 400){
//         return num = num-(num * 0.10)
//     }
//     else if(num >= 400 && num < 2000){
//         return num = num-(num * 0.15)
//     }
//     else{
//         return num = num-(num * 0.20)
//     }
// })
// console.log(`O preço dos 10 produtos mais vendidos são: \n${precoProduto}\nJá com desconto, são: \n${precoComDesconto}`);
//--------------------------------------------------------------------------------------------------------------------------
// const x = [3,4,7,1,5];

// const y = [4,3,1];

// const n = y.map((num,indice) => num*x[indice]);

// console.log(n)
//----------------------------------------------------------------------
// const people = [
//     {
//         name: "Angelina Jolie",
//         age: 80,
//         weight: 55,
//         height: 1.79
//     },
//     {
//         name: "Eric Jones",
//         age: 28,
//         weight: 100,
//         height: 1.6
//     },
//     {
//         name: "Paris Hilton",
//         age: 34,
//         weight: 79,
//         height: 1.65
//     },
//     {
//         name: "Kayne West",
//         age: 26,
//         weight: 83,
//         height: 1.83
//     },
//     {
//         name: "Bob Ziroll",
//         age: 90,
//         weight: 60,
//         height: 1.65
//     }
//   ];
// const people2 = people.map(obj => {
//     let bmi = obj.weight/(obj.height*2), classification;
//     bmi < 18.5 || bmi > 25 ? classification = 'Fora da faixa Normal' : classification = 'Normal'
//     return {
//     ...obj,
//     bmi,
//     classification,
//   }
// })
// console.log(people2);
//------------------------------------------------------------------------------------------------------------------
// const customers = [
//     [1, 'isidro_von@hotmail.com', 'Switzerland'],
//     [2, 'frederique19@gmail.com', 'Micah Sanford'],
//     [3, 'fredy54@gmail.com', 'Tunisia'],
//     [4, 'braxton29@hotmail.com', 'Egypt'],
//     [5, 'josh_batz60@gmail.com', 'Serbia'],
//     [6, 'emie_corkery82@yahoo.com', 'Brazil']
//   ];
// const pessoaRedeSocial = customers.map((obj) => {
//     return {
//         id: obj[0],
//         email: obj[1],
//         country: obj[2]
//     }
// });
// console.log(pessoaRedeSocial);
//------------------------------------------------------------------------------------------------------------------

// const posts = [
//     {
//       id: 0,
//       title: 'Programação Funcional',
//       content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       author: 'Gabriel Millitelo'
//     },
//     {
//       id: 1,
//       title: 'Funções de Alta Ordem',
//       content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       author: 'Lucas Maia'
//     },
//     {
//       id: 2,
//       title: 'Funções de Alta Ordem de Arrays',
//       content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       author: 'Felipe Cabral'
//     },
//     {
//       id: 3,
//       title: 'Função map()',
//       content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       author: 'Walisson Silva'
//     }
//   ];
//   let posts2 = posts.map(obj => {
//     return{
//       id: obj.id,
//       title: obj.title,
//       content: alterarString(obj.content,300),
//       author: obj.author.toUpperCase()
//     }
    
//   })
// function alterarString (string,valor){
//   let novaString;
//   if(String(string).length > valor){
//     for(let i=0; i < valor;i++){
//       novaString += string[i];
//     }
//     return novaString;
//   }
//   return string;
// }
// console.log(posts2);
//--------------------------------------------------------------------------------------------------------------------
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let arr =[0];
// arr.map(obj => {
//   for(let i=1;i < 20;i++){
//     arr.push(random(-10,10));
//   }
//   return arr;
// })
// console.log(arr)
//---------------------------------------------------------------------------------------------------------
// const products = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// const total =[];
// products.filter(x => {
//   total.push(x.price)
// });
// console.log(total.reduce((somatoria,valor) => somatoria + valor));
//-----------------------------------------------------------------------------------------------------------
// const arr = [["1", "2", "3"],[true], [4, 5, 6]];

// const arr2 = [].concat(arr[0],arr[1],arr[2])
// console.log(arr2);
//----------------------------------------------------------------------------------------------------------
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// const diagonal = []
// matrix.filter((valor,indice) => {
//   diagonal.push(matrix[indice][indice]);
// });
// console.log(diagonal.reduce((somatoria,valor) => somatoria + valor));
//-----------------------------------------------------------------------------------------------------------
// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ]
// const voters2 = voters.filter(obj => obj.voted === true);
// console.log(`Total de ${voters2.length} votos válidos`);
//-------------------------------------------------------------------------------------------------------------
// const arr = [1,2,3,4];

// const arr2 = arr.map(obj => String(obj));
// const total = arr2.reduce((somatoria,valor) => somatoria + valor);
// console.log(total);