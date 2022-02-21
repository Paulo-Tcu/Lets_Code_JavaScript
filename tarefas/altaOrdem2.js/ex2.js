const prompt = require("prompt-sync")({ sigint: true });

function createAluno(nome,idade,prof,acesso,mensalidade){
    nome = prompt(console.log("Nome:  "));
    do{
        idade = parseInt(prompt(console.log("Idade precisa ser entre 10 a 100 anos\nIdade:  ")));
    }while((isNaN(idade) || idade > 100 || idade < 10));
    do{
        acesso = parseInt(prompt(console.log("Escolha opção de Acesso, Liberado ?\nSim [1]\nNão [2]")));
        switch(acesso){
            case 1:
                acesso = true;
                break;
            case 2:
                acesso = false;
                break;
            default:
                console.log("Opção inválida!!!");
                break;
        }
    }while(acesso !== true && acesso !== false);
    do{
        mensalidade = parseFloat(prompt(console.log("Mensalidade deve ser maior que R$0,01\nDigite o valor da mensalidade em R$: ")));
    }while(isNaN(mensalidade) || mensalidade < 0.01);
    do{
        prof = parseInt(prompt(console.log("Selecione o Professor:\nPaulo [1]\nAndre [2]\n João [3]")));
        switch(prof){
            case 1:
                prof = "Paulo";
                validar =false;
                break;
            case 2:
                prof = "Andre";
                validar =false;
                break;
            case 3:
                prof = "João";
                validar =false;
                break;
            default:
                console.log("Opção de Professor inválida, tente novamente");
                break;
        }
    }while(prof > 3 || prof < 1);
    idade >= 60 ? ex_ad=true : ex_ad = false;

    return {
        id: alunos[0] === undefined ? id = 1 :alunos[alunos.length-1].id +1,
        nome,
        idade,
        ex_ad,
        prof,
        acesso,
        mensalidade
    }

}

const alunos = [];
for(let validar = true; validar;){
    console.log("---------------------------------");
    let continuar = parseInt(prompt(console.log("Escolha a operação\nCadastrar novo aluno [1]\nDeletar um aluno     [2]\nParar código         [3]\nVer alunos           [4]")));
    console.log("---------------------------------");
    while(continuar > 4 || continuar < 1){
        console.log("Valor inválido, tente novamente!!!");
        console.log("---------------------------------");
        continuar = parseInt(prompt(console.log("Escolha a operação\nCadastrar novo aluno [1]\nDeletar um aluno     [2]\nParar código         [3]\nVer alunos           [4]")));
        console.log("---------------------------------");
    }
    switch (continuar){
        case 1:
            alunos.push(createAluno());
            break;
        case 2:
            let id = parseInt(prompt(console.log("Digite o ID do aluno que deseja deletar: ")));    
            deleteAlunos(id);
            break;
        case 3:
            validar = false;
            break;
        case 4:
            console.log("Os alunos cadastrados são:\n",alunos);
            break;
    }
}
console.log(alunos);
function deleteAlunos(id) {
    let deletar;
    alunos.filter((obj,indice) => {
        if(obj.id === id){
            deletar = indice;
        }
    });
    if(deletar === undefined)return console.log("Id inexistente !!!");
    else {
        console.log(`O aluno ${alunos[deletar].nome} com id: ${alunos[deletar].id} foi removido com sucesso !!!`)
        alunos.splice(deletar,1);
    }
}