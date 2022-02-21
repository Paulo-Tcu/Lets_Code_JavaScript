const prompt = require("prompt-sync")({ sigint: true });
//                                  exc Laços de Repetição

// let arr = []
// let total = 0;
// for(let i = 1; i <= 10; i++){
//     let valor = parseInt(prompt(console.log("Digite o "+i+"° valor: ")));
//     arr.push(valor);
//     total += valor;
// }
// console.log("Os valores digitados foram: "+arr+" E o total foi de: "+total);
//------------------------------------------------------------------------------------------------

// let validar;
// do{
//     let idade = parseInt(prompt(console.log("Digite a idade: ")));
//     let salario = parseFloat(prompt("Digite o salário: "));
//     let genero = String(prompt(console.log("Digite o Gênero: "))).toUpperCase();
//     if (idade <0 || idade > 150){
//         validar = true;
//         console.log("Tente novamente, idade invalida")
//     }
//     else if(salario < 0){
//         validar = true;
//         console.log("Tente novamente, salario invalida")
//     }
//     else if(genero !== "M" && genero !== "F" && genero !== "OUTRO"){
//         validar = true;
//         console.log("Tente novamente, gênero invalido")
//     }
//     else{
//         validar = false;  
//         console.log("Fim do laço!!!")
//     } 
// }while(validar);
//---------------------------------------------------------------------------------------------------------
// const n = parseInt(prompt(console.log("Digite um valor limite: ")));
// for (let i=7;i <= n;i+=7){
//     console.log(i);
// }
//---------------------------------------------------------------------------------------------------------
// let total=0;
// for(let i=2;i < 1000;i++){
//     n = i;
//     total += n;
//     console.log(i);
// }
// console.log(total);
//----------------------------------------------------------------------------------------------------------
//          ex 4
// const v1 = parseInt(prompt(console.log("Digite o primeiro valor: ")));
// const v2 = parseInt(prompt(console.log("Digite o segundo valor: ")));
// let total =0;
// for(let i=1; i <= v2;i++){
//   total = total + v1;  
// }
// console.log(total);
//-------------------------------------------------------------------------------------------------------------
//          ex 5
// let valor,soma=0,contador=1;
// do{
//   valor = parseInt(prompt(console.log(`Digite o ${contador} valor: `)));
//   if(valor === 0){
//     console.log("Por ter digitado o valor de 0, o sistema não irá mais solicitar valores a digitar!!!");
//   }
//   else if(valor < 0){
//     console.log("Valor inválido, digite um valor igual ou maior que 0 !!!");
//     valor = parseInt(prompt(console.log(`Digite o ${contador} valor: `)));
//   }
//   soma += valor;
//   contador++;
// }while(valor !== 0);
// console.log(`O total dos valores digitados foi de: ${soma}`)
//-------------------------------------------------------------------------------------------------------------
//          ex 6
// function ordenar(a,b){
//   return a-b;
// }

// let arrayDeNumeros = [];
// const lacos = parseInt(prompt(console.log("Digite a quantidades de loops desejados: ")));
// for(let i=1; i <= lacos;i++){
//   let valor = parseInt(prompt(console.log(`Digite o ${i} valor: `)));
//   arrayDeNumeros.push(valor);
// }
// console.log(`Os valores digitados foram: ${arrayDeNumeros}`)
// arrayDeNumeros.sort(ordenar);
// console.log(`Agora já os 3 menores valores digitados em forma 
// decrescente foram: ${arrayDeNumeros[2]}, ${arrayDeNumeros[1]}, ${arrayDeNumeros[0]}`);
//-------------------------------------------------------------------------------------------------------------
//            ex 7
// let arrayDeNumeros = [];
// const lacos = parseInt(prompt(console.log("Informe um valor: ")));
// console.log(`O números pares decrescente entre 0 a ${lacos} são:`);
// for(let i =0; i <= lacos;i+=2){
//   arrayDeNumeros.push(i);
// }
// for(let i=(arrayDeNumeros.length-1); i <= arrayDeNumeros.length && i > 0;i-=1){
//   console.log(arrayDeNumeros[i])
// }
//-------------------------------------------------------------------------------------------------------------
//            ex 8
// let operacao,saldo = 0;
// console.log(`Escolha umas das opções Operações abaixo: `)
// do{
//   let deposito,retirada;
//   operacao = parseInt(prompt(console.log(`---------------Seleção da Operação---------------- 
//   1 - Depósito
//   2 - Retirada
//   3 - Saldo
//   4 - Parar `)))
//   switch(operacao){
//     case 0: 
//       console.log("Operação inválida, tente novamente: ");
//       operacao = 0;
//       break;
//     case 1:
//       deposito = parseInt(prompt(console.log(`Seu saldo atual é de R$${saldo}, agora digite o valor que deseja depositar: R$`)));
//       if(deposito < 0){
//         console.log("Valor digitado inválido, tente novamente!!!");
//         deposito = 0;
//       }
//       else{
//         saldo += deposito;
//         console.log(`Seu novo saldo é de R$${saldo}`)
//       }
//       break;
//     case 2:
//       retirada =   parseInt(prompt(console.log(`Seu saldo atual é de R$${saldo}, agora digite o valor que deseja sacar: R$`)));
//       if(retirada < 0 || retirada > saldo){
//         console.log("Valor digitado inválido, tente novamente!!!");
//         retirada = 0;
//       }
//       else{
//         saldo -= retirada;
//         console.log(`Seu novo saldo é de R$${saldo}`)
//       }
//       break;
//     case 3:
//       console.log(`Seu saldo atual é de: R$${saldo}`)
//   }
// }while(operacao < 4);
//--------------------------------------------------------------------------------------------------------------
//          ex 13
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const nums = [];
// for(let i =1; i <= 10;i++){
//   let teste = random(0,100);
//   if(teste >= 50)nums.push(teste);
//   if(i === 10)console.log(`A quantidade de números sorteados maior que 50 foi de: ${nums.length}\ne os números foram: ${nums}`);
// }
//--------------------------------------------------------------------------------------------------------------
//          ex 12
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const nums = [];
// for(let i =0; i < 10; i++){
//   nums.push(random(0,100));
// }
// console.log("Original ",nums);
// const nums2 = nums.filter((n,indice) => indice < 4);
// console.log("A - ",nums2);
// const nums3 = []
// for(let i=1; i <= 5; i++){
//   nums3.push(nums[nums.length-i]);
// }
// console.log("B - ",nums3.reverse())
// const nums4 = nums.filter((n,indice) => indice % 2 === 0);
// console.log("C - ",nums4);
// const nums5 = nums.filter((n,indice) => indice % 2 === 1);
// console.log("D - ",nums5);
// const nums6 = nums.map(n => n)
// console.log("E - ",nums6.reverse());
// const nums7 = nums.filter((n,indice) => indice <= 4);
// console.log("F - ",nums7.reverse());
// const nums8 = nums3.map(n => n);
// console.log("G - ",nums8.reverse());
//-------------------------------------------------------------------------------------------------------
//        ex 14
// const random = function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const arr = []
// for(let i=0; i < 10;i++){
//   arr.push(random(0,100));
// }
// console.log("Os números sorteados foram: ",arr);
// arr.sort((a,b) => b-a);
// console.log(`Mostrando o maior número sorteado: ${arr[0]}\nE o menor foi: ${arr[arr.length-1]}`);
// for(let i=0,n=0; i < arr.length;i++){
//   n += arr[i];
//   if(i === arr.length-1)console.log(`Já média dos números sorteados é de: ${n/10}\nE o total da soma dos números sorteados é de: ${n}`);
// }
/*-------------------------------------------------------------------------------------------------------
          ex 15*/
// const aluno = [prompt(console.log("Digite o nome do aluno: ")),parseInt(prompt(console.log("Digite a idade do aluno: ")))];
// for(let i=1, aluno2 =[];i <= 3; i++){
//   aluno2.push(parseFloat(prompt(console.log(`Digite a ${i}° nota: `))));
//   if(i === 3){
//     let media = (aluno2[0]+aluno2[1]+aluno2[2])/3;
//     aluno2 = [...aluno,aluno2,((media).toFixed(2)),media >= 5 ? true : false];
//     console.log(aluno2);
//   }
// }
/*-------------------------------------------------------------------------------------------------------
          ex 16*/
// const aluno = [prompt(console.log("Digite o nome do aluno: ")),parseInt(prompt(console.log("Digite a idade do aluno: ")))];
// for(let i=1, aluno2 =[];i <= 4; i++){
//   aluno2.push(parseFloat(prompt(console.log(`Digite a ${i}° nota: `))));
//   if(i === 4){
//     let media = (aluno2[0]+aluno2[1]+aluno2[2]+aluno2[3])/4;
//     aluno2 = [...aluno,aluno2,((media).toFixed(2)),media >= 5 ? true : false];
//     console.log(`A média do aluno ${aluno2[0]} foi de: ${aluno2[3]} onde foi contabilizado as notas: ${aluno2[2]}`);
//   }
// }
/*-------------------------------------------------------------------------------------------------------
          ex 17*/
let cpf;
do{
  cpf = prompt(console.log("Digite um CPF válido sem pontos e traços: "));
}while(cpf === "11111111111");
const cpf2 = [];
for(let i=0; i < cpf.length; i++){
  cpf2.push(Number(cpf[i]));
}
for(let i=0, x=0,n=10; i < 9;i++,n--){
  x += cpf2[i]*n;
  if((x*10)%11 === cpf2[9] && i === 8){
    for(let y = 0, z = 11, w=0; y < 10; y++, z--){
      w += cpf[y]*z;
      if((w*10)%11 === cpf2[10] && y === 9){
        console.log(`O CPF ${cpf} é válido!!!`)
      }
      else if((w*10)%11 !== cpf2[10] && y === 9){
         console.log("CPF Inválido 2");
         break;
      }
    }   
  }
  else if(i === 8 && (x*10)%11 != cpf2[9]) {
    console.log("CPF Inválido");
    break;
  }
 
}