class Bola{
    constructor(cor = String,raio){
        if(raio > 0 && isNaN(raio) === false && cor.length > 0 && cor !== undefined){
            this.cor = cor;
            this.raio = raio;
        }
        else return console.log("Dados inválidos para criação do objeto");
        
    }
    calcArea = function(){
        if(this.raio > 0 || isNaN(this) === false)return (3.14159 * Math.pow(this.raio,2)).toFixed(2);
        else return "Não foi possível realizar o calculo";
    }
    calcVolume = function(){
        if(this.raio > 0 || isNaN(this) === false)return ((4/3) * 3.14159 * Math.pow(this.raio,3)).toFixed(2);
        else return "Não foi possível realizar o calculo";
        
    }
    get print_cor(){
        if(this.cor !== undefined && this.cor.length > 0)return this.cor;
        else return "Cor inválida ou vazia"
    }
    imprimirObj = function(){
        return console.log(this);
    }
}

const bola1 = new Bola("Black",20);
// console.log(bola1.print_cor);
// console.log(bola1.calcArea());
// console.log(bola1.calcVolume());
bola1.imprimirObj();

//-------------------------------------------------------------------------------------------
class Retangulo{
    constructor(largura,altura){
       if(largura > 0 && isNaN(largura) === false && altura > 0 && isNaN(altura) === false){
            this.largura = largura;
            this.altura = altura;
       }
       else return console.log("Dados inválidos para criar o objeto")
    }
    calcArea = function (){
        const area = this.largura * this.altura;
        if(isNaN(area) === false)return area;
        else return "Não foi possível realizar o calculo"
    }
    imprimirObj = function(){
        return console.log(this);
    }
}

const retangulo1 = new Retangulo(10,20);
//console.log(retangulo1.calcArea());
retangulo1.imprimirObj();

//-------------------------------------------------------------------------------------------
const prompt = require("prompt-sync")({ sigint: true });

class Funcionario{
    constructor(nome,email){
        this.nome = nome;
        this.email = email;
        this.horas_mes = {};
        this.salario_mes = {};
    }
    valorSalario = function (){ //metodo para printar salario mes
        for(let i=0; i < meses_ano.length;i++){
            console.log(`No mês de ${meses_ano[i]} o funcionario ${this.nome} recebeu: R$ ${this.salario_mes[meses_ano[i]]}`);
        }
    }
    imprimirObj = function(){
        return console.log(this);
    }
}
//criado um array com meses do ano para queo usuario não consiga repetir um mês no código, podendo somente inserir as horas mês
//const meses_ano = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const nome = prompt(console.log("Digite o nome do funcionário: "));
const email = prompt(console.log("Digite agora o e-mail: "));
//const valor_hora = parseFloat(prompt(console.log("Digite o valor em R$ para cada hora de trabalho: ")));
const func1 = new Funcionario(nome,email);
console.log(`\nFuncionário ${nome} cadastrado com sucesso.\n`);
// for(let i =0; i < 12;i++){ //laço para inserir horas mês
//     let horas;
//     do{ //do-while para verificar se o retorno de horas foi aceitavel
//         horas = parseFloat(prompt(console.log(`Digite um valor válido para as horas trabalhadas do mês de ${meses_ano[i]}`)));
//     }while(horas < 0 || isNaN(horas));
//     func1.horas_mes[meses_ano[i]] = horas;
//     func1.salario_mes[meses_ano[i]] = func1.horas_mes[meses_ano[i]]*valor_hora; //inserindo valor em salario_mes
// }
// func1.valorSalario();
func1.imprimirObj();

//-------------------------------------------------------------------------------------------

//const prompt = require("prompt-sync")({ sigint: true });

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
    imprimirObj = function(){
        return console.log(this);
    }
}
//const canais = []; //array para armazenar os canais listados e atribuir ao objeto
const fabricante = prompt(console.log("Digite o fabricante do Televisor")), modelo = prompt(console.log("Digite o modelo do Televisor"));
const tv1 = new Televisor(fabricante,modelo); //obj tv1 foi criado a partir da classe Televisor

// for(let validar = true; validar;){ //laço para validar opção deseja pelo usuário, sobre qual metodo invocar
//     let opcao;
//     //Todo Do While é para verificar se váriavel recebeu o tipo de valor desejado, para que não quebre o código
//     do{
//         opcao = parseInt(prompt(console.log("\nEscolha uma opção:\nMudar volume  [1]\nMudar Canal   [2]\nParar         [3]\n")));
//     }while(isNaN(opcao) || opcao < 0 || opcao > 3);
    
//     switch (opcao){ //case para executa somente a opção selecionada
//         case 1:
//             let volume;
//             do{
//                 volume = parseInt(prompt(console.log("\nDigite o novo volume (0 a 100): ")));
//             }while(isNaN(volume) || volume < 0 || volume > 100);
//             tv1.alterarVolume(volume);
//             break;
//         case 2:
//             let canal;
//             do{
//                 canal = parseInt(prompt(console.log("\nDigite o canal a sintonizar: ")));
//             }while(isNaN(canal) || canal < 0);
//             tv1.alterarCanal(canal);
//             break;
//         case 3:
//             validar = false;
//             break;

//     }
// }

// console.log(tv1);
tv1.imprimirObj();


/*OBS: ex6 era opciaonal, os comandos aqui presentes são os mesmo dos exc solicitados, porém foi comentados algumas linhas
pois não foi o proposito solicitado, mas caso queira pode retirar o sinal de comentado que código será o mesmo dos exec */