//map -- percorre array e retorna em um novo array
//const nums = [1,2,3];
//const dobro = nums.map(num => num * 2);

//sempre preenche o novo array com return
// const dobro = nums.map(num => 'Laranja');
// console.log(nums+"\n"+dobro);

// const aplicarDesconto = preco => Math.round((preco= preco-(preco*0.1)));


// const carrinho = [9.56, 10.0, 25.90, 12.35];

// const carrinhoComDesconto = carrinho.map(aplicarDesconto);

// console.log(carrinhoComDesconto);

//filter -- passa item a item e se retorno for true ele adicionar ao novo array, se for false não adiciona
// const nums = [1,2,3,4,5,6,7,7,8,9,10];
// const pares = nums.filter( num => num % 2 === 0);
// console.log(pares);

// const arr = [null, undefined, false,0,"",, true, "a", 1];

// const resultado = arr.filter(item => item);
// console.log(resultado);

//reduce -- reduzir o array a um item só
const nums = [1,2,3,4,5,6,7,8,9,10];
const soma = nums.reduce((somatoria, num) =>( //somatoria recebeu o valor inicial de 0 e num é o item no qual ele percorre
    somatoria + num
),0);
console.log(soma);