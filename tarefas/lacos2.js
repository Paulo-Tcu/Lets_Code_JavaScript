const prompt = require("prompt-sync")({ sigint: true });

// const vetor = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ];
// for(let i = 0; i < vetor.length; i++)console.log(vetor[i]);
//-------------------------------------------------------------------------------------
// for(let i=1,notas = [], media = 0; i <= 4; i++){
//     notas.push(parseInt(prompt(console.log(`Informe a nota do ${i}° Bimestre: `))));
//     media += notas[i-1];
//     if(i === 4){
//         console.log("A média do aluno foi de: ",media/4);
//     }
// }
//--------------------------------------------------------------------------------------
// const vetor =[1,2,3,4,6,7,8,9,10];
// for(let i=0; i < vetor.length;i++){
//     if(vetor[i]%2 === 0)console.log(vetor[i]);
// }
//--------------------------------------------------------------------------------------
// const indiceLimite = parseInt(prompt(console.log("Digite um valor: ")));
// for(let i=0,vetor =[]; i < indiceLimite;i++){
//     vetor.push(i)
//     if(i === indiceLimite-1)console.log("Os números inteiros até o valor digitado são: ",vetor);
// }
//----------------------------------------------------------------------------------------
// for(let i=1,vetor =[]; i <= 5;i++){
//     vetor.push(prompt(console.log(`Digite o ${i}° valor: `)));
//     if(i === 5)console.log("Os números inteiros até o valor digitado são: ",vetor);
// }
//------------------------------------------------------------------------------------------
// for(let i=1,vetor =[]; i <= 5;i++){
//     vetor.push(parseInt(prompt(console.log(`Digite o ${i}° valor: `))));
//     if(i === 5){
//         vetor.sort((a,b) => (a-b));
//         console.log(`Os valores digitados foram: ${vetor}\nE o maior valor é: ${vetor[vetor.length-1]}`);
//     }
// }
//----------------------------------------------------------------------------------------------------
// const arrayEmString = ['0','1','2','3','4'];
// const arrayEmNumber = [];
// for(let i =0; i < arrayEmString.length;i++){
//     arrayEmNumber.push(Number(arrayEmString[i]));
// }
// console.log(arrayEmNumber);
//---------------------------------------------------------------------------------------------------
// const nums1 = [1,2,3,4,5];
// const nums2 = [6,4,8,9,7];
// const nums3 = [];
// for(let i=0; i < nums1.length && i < nums2.length;i++){
//     nums3.push(nums1[i]*nums2[i]);
// }
// console.log("Produto escalar: ",nums3);
//----------------------------------------------------------------------------------------------------
// const nums1 = [1,2,3,4,5];
// const nums2 = [6,4,8,9,7];
// const nums3 = [];
// for(let i=0; i < nums1.length && i < nums2.length;i++){
//     nums3.push(nums1[i]+nums2[i]);
// }
// console.log("Produto escalar: ",nums3);
//-----------------------------------------------------------------------------------------------------
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const nums = [];
// for(let i=0,sorteador; i < 10;i++){
//     sorteador = random(0,100);
//     if(sorteador >= 50){
//         nums.push(sorteador);
//     }
// }
// console.log(nums);
//-----------------------------------------------------------------------------------------------------
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const nums = [];
// for(let i =0; i < 10; i++){
//     nums.push(random(0,100));
// }
// nums.sort((a,b) => (a-b));
// console.log(nums);
// console.log("O maior número sorteador foi: ",nums[nums.length-1]);
// console.log("Já o menor foi: ",nums[0]);
// for(let i = 0,soma=0; i < nums.length; i++){
//     soma += nums[i];
//     if(i === nums.length-1){
//         console.log("A média desse vetor é de: ",soma/nums.length);
//         console.log("Já a soma é: ", soma);
//     }
// }
//------------------------------------------------------------------------------------
const random = function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const nums = [];
for(let i =0; i < 10; i++){
    nums.push(random(0,100));
}
console.log(nums);
for(let i=0, vetor = [];i < 4;i++){
    vetor.push(nums[i]);
    if(i === 3)console.log(vetor);
}
for(let i=nums.length-1,contador = 0, vetor = [];contador < 5;contador++,i--){
    vetor.push(nums[i]);
    if(contador === 4)console.log(vetor.reverse())
}
for(let i =0,vetor = [],vetor2 =[]; i < nums.length;i++){
    if(i%2 === 0)vetor.push(nums[i]);
    else if(i%2 === 1)vetor2.push(nums[i]);
    if(i === nums.length-1){
        console.log(vetor);
        console.log(vetor2);
    }
}

for(let i=0, vetor = [];i < 5;i++){
    vetor.push(nums[i]);
    if(i === 4)console.log(vetor.reverse());
}

for(let i=nums.length-1,contador = 0, vetor = [];contador < 5;contador++,i--){
    vetor.push(nums[i]);
    if(contador === 4)console.log(vetor)
}
