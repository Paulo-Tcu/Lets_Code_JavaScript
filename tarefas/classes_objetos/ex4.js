const prompt = require("prompt-sync")({ sigint: true });

class Televisor{            //Criação da classe Televisor
    constructor(fabricante = String, modelo = String, canal_atual,lista_canais,volume = 0){
        if(fabricante.length > 0 && modelo.length > 0){
            this.fabricante = fabricante;
            this.modelo = modelo;
            this.lista_canais = lista_canais;
            this.canal_atual = canal_atual;
            this.volume = volume;
        }
    //caso requisitos para criar obj não seja atendido, função throw é executada parando o código para que não seja quebrado
        else throw console.log("Dados inválidos para criação do obj");
    }
    alterarVolume = function (novo_volume){    //Metodo para alterar volume do obj
        if(isNaN(novo_volume) !== true && novo_volume >= 0 && novo_volume <= 100){
            if(this.volume > novo_volume) {
                console.log(`\nVolume foi reduzido de ${this.volume} para ${novo_volume}\n`);
            }
            else {
                console.log(`\nVolume foi aumentado de ${this.volume} para ${novo_volume}\n`);
            }
            this.volume = novo_volume;
            
        }
    }
    
    alterarCanal = function (canal){        //metodo para altera e/ou adicionar novo canal
        if(canais.indexOf(canal) !== -1 && isNaN(canal) !== true && canal > 0){
            console.log(`\nTelevisor alterou do canal ${this.canal_atual} para sintonizar no canal ${canal}\n`);
        }
        else if(canais.indexOf(canal) === -1 && isNaN(canal) !== true && canal > 0){
            canais.push(canal);
            console.log(`\nNovo canal adicionado a sua lista de canais, agora seu Televisor está sintonizado no canal ${canal}\n`);
        }
        else return console.log("\nValor inválido para Canal\n");
        this.lista_canais = [...canais];
        this.canal_atual = canal;
    }
}
const canais = []; //array para armazenar os canais listados e atribuir ao objeto
const fabricante = prompt(console.log("Digite o fabricante do Televisor")), modelo = prompt(console.log("Digite o modelo do Televisor"));
const tv1 = new Televisor(fabricante,modelo); //obj tv1 foi criado a partir da classe Televisor

for(let validar = true; validar;){ //laço para validar opção deseja pelo usuário, sobre qual metodo invocar
    let opcao;
    //Todo Do While é para verificar se váriavel recebeu o tipo de valor desejado, para que não quebre o código
    do{
        opcao = parseInt(prompt(console.log("\nEscolha uma opção:\nMudar volume  [1]\nMudar Canal   [2]\nParar         [3]\n")));
    }while(isNaN(opcao) || opcao < 0 || opcao > 3);
    
    switch (opcao){ //case para executa somente a opção selecionada
        case 1:
            let volume;
            do{
                volume = parseInt(prompt(console.log("\nDigite o novo volume (0 a 100): ")));
            }while(isNaN(volume) || volume < 0 || volume > 100);
            tv1.alterarVolume(volume);
            break;
        case 2:
            let canal;
            do{
                canal = parseInt(prompt(console.log("\nDigite o canal a sintonizar: ")));
            }while(isNaN(canal) || canal < 0);
            tv1.alterarCanal(canal);
            break;
        case 3:
            validar = false;
            break;

    }
}

console.log(tv1);