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

class ContaCorrente{
    constructor(cliente =Object, saldo = 0){
        this.cliente = cliente;
        this.saldo = saldo;
    }
    saque = function(valor,obj){
        if(valor <= obj.saldo && obj.saldo > 0 && isNaN(valor) === false){
            obj.saldo -= valor;
            console.log(`\n${this.cliente.nome} seu novo saldo é de R$ ${obj.saldo}\n` );
        }
        else if(isNaN(valor) || valor < 1) console.log("Valor informado é inválido");
        else console.log(`\nOperação inválida, seu saldo é de R$ ${obj.saldo} e tentou retirar o valor de R$ ${valor}`);
    }
    deposito = function (valor){
        if(isNaN(valor) === false && valor > 0){
            this.saldo += valor;
            console.log(`\n${this.cliente.nome} seu novo saldo é de R$ ${this.saldo}\n` );
        }
        else console.log("\nValor informado é inválido");
    }
    trasferencia = function (valor,obj,func){
        prompt(console.log("\nDigite a conta para qual deseja transferir"));
        func(valor,obj);
    }
    get versaldo (){
        console.log(`\n${this.cliente.nome} seu saldo atual é de R$ ${this.saldo}`);
    }
}

class ContaCorrenteVip extends ContaCorrente{
    constructor(cliente = Object,saldo,cheque_especial){
        super(cliente,saldo);
        this.cheque_especial = cheque_especial;
    }
    saqueChequeEspecial = function(valor){
        if(valor <= this.cheque_especial && isNaN(valor) === false && valor > 0){
            this.cheque_especial -= valor;
            console.log(`\n${this.cliente.nome} seu novo limite de cheque especial é de R$${this.cheque_especial}`);
        }
        else if(isNaN(valor)) console.log("\nValor inválido")
        else console.log(`\nOperação inválida, seu saldo é de R$ ${this.cheque_especial} e tentou utilizar o valor de R$ ${valor}`);
    }
    vercheque_especial = function(){
        return console.log(`${this.cliente.nome} seu limite disponivel para cheque especial é de: R$${this.cheque_especial}`);
    }
}

const nome = prompt(console.log("Digite o nome do cliente: ")).toUpperCase();
const idade = parseInt(prompt(console.log("Digite a idade (deve ser de 1 a 100 anos): ")));
const email = prompt(console.log("Digite o e-mail do cliente: "));
const cliente1 = new Cliente(nome, idade, email);
const novaconta = new ContaCorrenteVip(cliente1,0,5780.50);

for(let validar = true; validar;){
    let opcao;
    do{
        opcao = parseInt(prompt(console.log("\nSelecione uma das opções\nDeposito        [1]\nSaque           [2]\nTransferência   [3]\nVer saldo       [4]\nCheque especial [5]\nPara            [6]")));
    }while(isNaN(opcao) || opcao < 1 || opcao > 6);

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
            let opcao_cespecial;
            do{
                opcao_cespecial = parseInt(prompt(console.log("Selecione a opção para cheque especial\nVer limite       [1]\nUtilizar limite  [2]")));
            }while(opcao_cespecial < 0 || opcao_cespecial > 2 || isNaN(opcao_cespecial));
            switch(opcao_cespecial){
                case 1:
                    novaconta.vercheque_especial();
                    break;
                case 2:
                    valor = parseFloat(prompt(console.log("\nDigite o valor em R$ para efetuar a transação: ")));
                    novaconta.saqueChequeEspecial(valor);
                    break;
            }
            break;
        case 6:
            validar = false;
            break;
    }
}

console.log(novaconta);

//osmetodos já criados para classe pai não precisam ser recriados