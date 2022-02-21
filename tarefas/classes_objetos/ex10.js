const prompt = require("prompt-sync")({ sigint: true });

class Cliente{
    constructor(nome,idade,email){
        if(isNaN(idade) === false && idade > 1 && idade <= 100){
            this.nome = nome;
            this.idade = idade;
            this.email = email;
        }
        else throw console.log("Idade inválida");
    }
    imprimir = function () {
        console.log(`\nNome: ${this.nome}\n\nIdade: ${this.idade}\n\nE-mail: ${this.email}\n`);
    }
}

class ContaCliente extends Cliente{
    constructor(nome, idade, email,saldo = 0){
        super(nome,idade,email);
        this.saldo = saldo;
    }
    saque = function(valor,obj){
        if(valor <= obj.saldo && obj.saldo > 0){
            obj.saldo -= valor;
            console.log(`\nSeu novo saldo é de R$ ${obj.saldo}\n` );
        }
        else if(isNaN(valor) || valor < 1) console.log("Valor informado é inválido");
        else console.log(`\nOperação inválida, seu saldo é de R$ ${obj.saldo} e tentou retirar o valor de R$ ${valor}`);
    }
    deposito = function (valor){
        if(isNaN(valor) === false && valor > 0){
            this.saldo += valor;
            console.log(`\nSeu novo saldo é de R$ ${this.saldo}\n` );
        }
        else console.log("\nValor informado é inválido");
    }
    trasferencia = function (valor,obj,func){
        prompt(console.log("\nDigite a conta para qual deseja transferir"));
        func(valor,obj);
    }
    get versaldo (){
        console.log(`\nSeu saldo atual é de R$ ${this.saldo}`);
    }
}

const nome = prompt(console.log("Digite o nome do cliente: ")).toUpperCase();
const idade = parseInt(prompt(console.log("Digite a idade (deve ser de 1 a 100 anos): ")));
const email = prompt(console.log("Digite o e-mail do cliente: "));
const novaconta = new ContaCliente(nome, idade, email);

for(let validar = true; validar;){
    let opcao;
    do{
        opcao = parseInt(prompt(console.log("\nSelecione uma das opções\nDeposito      [1]\nSaque         [2]\nTransferência [3]\nVer saldo     [4]\nPara          [5]")));
    }while(isNaN(opcao) || opcao < 1 || opcao > 5);

    let valor;
    switch (opcao){
        case 1:
            valor = parseFloat(prompt(console.log("\nDigite o valor em R$ para efetuar a transação: ")));
            novaconta.deposito(valor);
            break;
        case 2:
            valor = parseFloat(prompt(console.log("\nDigite o valor em R$ para efetuar a transação: ")));
            novaconta.saque(valor,novaconta);
            break;
        case 3:
            valor = parseFloat(prompt(console.log("\nDigite o valor em R$ para efetuar a transação: ")));
            novaconta.trasferencia(valor,novaconta,novaconta.saque);
            break;
        case 4:
            novaconta.versaldo;
            break;
        case 5:
            validar = false;
            break;
    }
}

console.log(novaconta);