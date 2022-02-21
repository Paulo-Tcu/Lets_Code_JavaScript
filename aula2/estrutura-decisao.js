const a = 1;
const b = 2;

const igualdade = a == b;
const diferenca = a != b;
const maior = a > b;
const maiorIgual = a >= b;
const menor = a < b;
const menorIgual = a <= b;

const and = igualdade && diferenca;
const or = igualdade || diferenca;

const not = !igualdade;

const igualdadeRestrita = a === b; //verificar igualdade de tipos de estrutura
const diferencaRestrita = a !== b;

// 0, null, undefined, NaN, '', false
const serDev = true;
if (serDev){
    console.log("Estou aqui");
}
else{
    console.log("Deu ruim");
}

let serTech = serDev ? "Bora ser Tech" : "Não quero";
console.log(serTech)