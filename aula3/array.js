const prompt = require("prompt-sync")({ sigint: true });

const array = [5, 4, 3.5, 4, "banana", null, undefined, "chuva"];

// console.log(array);
// console.log(array[0]);
// console.log(array[50]);
// array[0] = "laranja";
// console.log(array[0]);

// console.log(array.length); //verificar o tamanho do array
// console.log(array[array.length - 1]); // exibir o ultimo valor do array

//Inserção de valores no Array
// array.push("maça");
// console.log(array.length);
// console.log(array[array.length - 1]);

// array.unshift("pera");
// console.log(array);

//Busca de valores
// console.log(array.indexOf(4)); //retorna o indice do primeiro valor encontrado
// console.log(array.lastIndexOf(4)); //retorna o indice do ultimo valor encontrado

// console.log(array.indexOf("4") > -1); //retorna o indice do primeiro valor encontrado ---- utilizando booleano
// console.log(array.lastIndexOf(4) > -1); //retorna o indice do ultimo valor encontrado ---- utilizando booleano

//console.log(array.includes("banana")); //retorna em boleano

//Remoção de valores do Array
// let ItemRemovido = array.pop(); //remove o ultimo item
// ItemRemovido = array.shift(); //remove o primeiro item
// console.log(ItemRemovido);
// console.log(array)

//Splice
//const response = array.splice(3); //apaga o indice 3 em diante
//const response = array.splice(3,2); // apaga o indice 3 e mais um valor, após a virgula é a quantidade de valores a deletar
//const response = array.splice(-2,1); // com o valor 1 depois da virgula ele apaga somente o proprio indice, com valor negativo o splice se inicia do final
// const response = array.splice(3,2,"abacaxi","manga"); //pega o indice 3, apaga ele e mais um valor e depois começa a add os valores depois da segunda virgula

// console.log(response);
// console.log(array);

//Preenchimento de Array
// const arr = new Array(10);
// arr.fill("x");
// console.log(arr);

// concatenação de Arrays
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [7,8,9];
// const arrFinal = [].concat(arr1,arr2,arr3);

//Reversão Arrays
// const arr = [1,2,3,4];
// arr.reverse(); //reverse as posições
// console.log(arr);

//Ordenação Arrays
// const arr = [5,9,2,7,4];
// arr.sort();
// console.log(arr);

// Const + Array
const arr = [1];
arr.push(2);

console.log(arr);

arr = [1,2] // vai dar erro