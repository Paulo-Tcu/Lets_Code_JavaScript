// const contatos = [
//     {nome: 'contato1', telefone: '00000000000'},
//     {nome: 'contato2', telefone: '11111111111'},
//     {nome: 'contato3', telefone: '22222222222'},
//     {nome: 'contato4', telefone: '33333333333'},
//     {nome: 'contato5', telefone: '44444444444'}
// ]
// //vai percorrer todo a matriz de objetos com o find, e quando ele achar um valor que lhe foi passado (true), nesse caso o nome contato3
// const contato = contatos.find(contato => contato.nome === "contato3")

// console.log(contato);

//-------------------------------------------------------------
//FindIndex --- retornar o Index do valor desejada, ou seja, quando for true

// const nums = [1,2,3];
// const indexOf3 = nums.findIndex(num => num === 3);

// console.log(indexOf3);

//---------------------------------------------------------

//ForEach -- percorre o array
// const nums = [1,2,3];
// nums.forEach(num => console.log(num*2)); // percorreu o array e fez os valores * 2
// nums.forEach(console.log)
// nums.forEach((num,index,arr) => console.log(num, index, arr))
//---------------------------------------------------------
//every
// const nums1 = [10,20,30,40];
// const nums2 = [11,20,30,40];

// const ePar = num => num % 2 === 0;

// const nums1SaoPar = nums1.every(ePar);
// const nums2SaoPar = nums2.every(ePar);

// console.log(nums1SaoPar);
// console.log(nums2SaoPar);