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
class Sistema{
    constructor(cadastro = Array){
        this.cadastro = cadastro;
    }
    cadastrarCliente = function (nome,idade,email){
        if(this.cadastro[0] === undefined)this.cadastro = [new Cliente(nome,idade,email)];
        else if(this.cadastro[0] !== undefined) this.cadastro.push(new Cliente(nome,idade,email));
    }
    buscarCliente = function(nome,obj){
        let resultado;
        if(obj.cadastro[0] !== undefined){
            for(let i=0; obj.cadastro[i] !== undefined; i++){
                if(obj.cadastro[i].nome === nome) {
                   return resultado = i;
                }
                else resultado = undefined;
            } 
        }
        else if(obj.cadastro[0] === undefined){
            console.log("\nNenhum cliente cadastrado");
            return false;
        }
        if(resultado === undefined){
            console.log("\nUsuário não cadastrado");
            return undefined;
        }
    }
    imprimirCliente = function(nome,func){
        const obj = this;
        const resultado = func(nome,obj);
        if(resultado !== undefined && resultado !== false){
            return obj.cadastro[resultado].imprimir();
        }
        else return console.log("Não foi possível prosseguir, verifique os dados e tente novamente");
        

    }
    alterarDadosCliente = function(nome,alterar,func){
        const obj = this;
        let novo_nome,novo_email,nova_idade;
        const resultado = func(nome,obj);
        if(resultado === false || resultado === undefined) return console.log("Não foi possível alterar, verifique os dados e tente novamente");
        switch(alterar){
            case 1:
                do{
                    console.log("\nNovo Nome não pode ser nulo");
                    novo_nome = prompt(console.log("Digite o novo nome: ")).toUpperCase();
                }while(novo_nome.length === 0);
                this.cadastro[resultado].nome = novo_nome;
                break;
            case 2:
                do{
                    console.log("\nNova idade precisa ser 1 a 100 anos");
                    nova_idade = parseInt(prompt(console.log(`Digite a nova idade para ${obj.cadastro[resultado].nome}:` )));
                }while(nova_idade < 0 || isNaN(nova_idade));
                this.cadastro[resultado].idade = nova_idade;
                break;
            case 3:
                do{
                    console.log("\nNovo E-mail não pode ser nulo");
                    novo_email = prompt(console.log(`Digite o nome e-mail para ${obj.cadastro[resultado].nome}: `));
                }while(novo_email.length === 0)
                this.cadastro[resultado].email = novo_email;
                break;
            case 4:
                do{
                    console.log("\nNome e E-mail não podem ser nulos e idade ser de 1 a 100 anos");
                    novo_nome = prompt(console.log("Digite o novo nome: ")).toUpperCase();
                    nova_idade = parseInt(prompt(console.log("Digite a nova idade: ")));
                    novo_email = prompt(console.log(`Digite o nome e-mail: `));
                }while(novo_nome.length === 0 || novo_email.length === 0 || isNaN(nova_idade) || nova_idade < 1 || nova_idade > 100);
                this.cadastro[resultado].nome = novo_nome;
                this.cadastro[resultado].idade = nova_idade;
                this.cadastro[resultado].email = novo_email;
                break;

        }

    }
}

const sistema1 = new Sistema();

for(let validar = true; validar;){
    let opcao;
    do{
        opcao = parseInt(prompt(console.log("\nEscolha uma opção válida:\nCadastrar Cliente  [1]\nBuscarCliente      [2]\nAlterar Cliente    [3]\nParar              [4]")));
    }while(isNaN(opcao) || opcao < 1 || opcao > 4);

    let nome,idade,email;

    switch(opcao){
        case 1:
            do{
                console.log("\nNome e E-mail não podem ser nulos e idade ser de 1 a 100 anos");
                nome = prompt(console.log("Digite o nome: ")).toUpperCase();
                idade = parseInt(prompt(console.log("Digite a idade do cliente: ")));
                email = prompt(console.log("Digite o e-mail: "));
            }while(nome.length === 0 || email.length === 0 || isNaN(idade) || idade < 1 || idade > 100);
            sistema1.cadastrarCliente(nome,idade,email);
            break;
        case 2:
            do{
                nome = prompt(console.log("\nDigite o exato nome para buscar: ")).toUpperCase();
            }while(nome.length === 0);
            sistema1.imprimirCliente(nome,sistema1.buscarCliente);
            break;
        case 3:
            let tipo_alteracao;
            do{
                nome = prompt(console.log("\nDigite o nome para alterar dados (deve ser exatamento como cadastro): ")).toUpperCase();
                tipo_alteracao = parseInt(prompt(console.log("\nEscolha a opção para alterar\nNome           [1]\nIdade          [2]\nE-mail         [3]\nTodos os dados [4]\n")))
            }while(isNaN(tipo_alteracao) || tipo_alteracao < 1 || tipo_alteracao > 4 || nome.length === 0);
            sistema1.alterarDadosCliente(nome,tipo_alteracao,sistema1.buscarCliente);
            break;
        case 4:
            validar = false;
            break;
    }
}

console.log(sistema1);

/*Esse foi o código, se observar no exec 4 do Televisor, irá notar que utilizei um Array
para armazenar os canais e passa-los como um atributo, já nesse fiz tudo por métodos e 
passei os atributos, teve momentos que não conseguia utilizar como por exemplo sistema1.cadastro.indexOf(),
o código não o reconhecia como um array e por isso há momentos que tive de utilizar o for, então fica
aqui meu questionamento, se possível gostaria que o professor passe um feddback (pode ser no class mesmo)
sobre qual melhor utilizar, caso nenhum do dois que me possa passar criticas construtivas e como poderia 
realizar ou melhorar meu código.
Desde já agradeço Cristian, abçs e att */
/*OBS: no enunciado entendi que a nova classe deveria receber Cliente como parametro e não herança, por isso
código ficou desta forma, caso esteja errado pode me passar como feedback também */