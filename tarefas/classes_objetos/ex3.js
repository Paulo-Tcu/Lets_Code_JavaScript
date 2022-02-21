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
}
//criado um array com meses do ano para queo usuario não consiga repetir um mês no código, podendo somente inserir as horas mês
const meses_ano = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const nome = prompt(console.log("Digite o nome do funcionário: "));
const email = prompt(console.log("Digite agora o e-mail: "));
const valor_hora = parseFloat(prompt(console.log("Digite o valor em R$ para cada hora de trabalho: ")));
const func1 = new Funcionario(nome,email);
console.log(`\nFuncionário ${nome} cadastrado com sucesso.\n`);
for(let i =0; i < 12;i++){ //laço para inserir horas mês
    let horas;
    do{ //do-while para verificar se o retorno de horas foi aceitavel
        horas = parseFloat(prompt(console.log(`Digite um valor válido para as horas trabalhadas do mês de ${meses_ano[i]}`)));
    }while(horas < 0 || isNaN(horas));
    func1.horas_mes[meses_ano[i]] = horas;
    func1.salario_mes[meses_ano[i]] = func1.horas_mes[meses_ano[i]]*valor_hora; //inserindo valor em salario_mes
}
func1.valorSalario();