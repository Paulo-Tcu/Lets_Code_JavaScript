const prompt = require("prompt-sync")({ sigint: true });

function createAluno(nome,idade,prof,acesso,mensalidade){ //Função para criar obj aluno
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
function totalMensalidade(){
    alunos.filter(obj => {
        if(obj.mensalidade)mensalidadeAlunos.push(obj.mensalidade);
        })
    let total = mensalidadeAlunos.reduce((somatoria,valor) => somatoria + valor);
    return total;
    }
function mediaIdade(){
    alunos.filter(obj => {
        if(obj.idade)idade.push(obj.idade);
    })
    let total = idade.reduce((somatoria,valor) => somatoria + valor);
    return (total / idade.length).toFixed(2);
}
function buscarAluno (tipo, valor){
    let validador = false;
    if(alunos[0] === undefined)console.log("Nenhum usuário cadastrado !!!");
    alunos.forEach((obj,indice) => {
        if(obj[tipo] === valor){
            console.log(`ID: ${obj.id}\nNome: ${obj.nome}\nMensalidade: R$ ${obj.mensalidade}\nIdade: ${obj.idade} anos\nExercício adaptado: ${obj.ex_ad === true ? "Sim" : "Não"}\nAcesso: ${obj.acesso === true ? "Liberado" : "Bloqueado"} `);
            validador = true;
            let acesso;
            if(tipo === "id"){
                do{
                    acesso = parseInt(prompt(console.log("Deseja alterar acesso do aluno ?\nSim [1]\nNão [2]")));
                    if(acesso === 1){
                        switch(obj.acesso){
                            case true:
                                obj.acesso = false;
                                console.log(`Agora o aluno ${obj.nome} está com acesso Bloqueado!!!`)
                                break;
                            case false:
                                obj.acesso = true
                                console.log(`Agora o aluno ${obj.nome} está com acesso Liberado!!!`)
                                break;
                        }
                    }
                }while(acesso < 1 || acesso > 2 || isNaN(acesso));
            }
        }
        else if(indice === alunos.length-1 && validador === false)console.log("Aluno não cadastrado!!!");
    });
}
const alunos = []; //array para armazenar objs de alunos
const mensalidadeAlunos =[] //array para armazenar mensalidades para posteriormente realizar cálculos e printar. A cada ciclo de busca código deleta dados do array e adiciona novamente, para caso algum aluno seja add ou removido
const idade = []; // o mesmo que array acima, porém agora para idade
for(let validar = true; validar;){
    let continuar = parseInt(prompt(console.log("\nEscolha a operação\nCadastrar novo aluno [1]\nDeletar um aluno     [2]\nParar código         [3]\nVer alunos           [4]\nTotal mensalidades   [5]\nBuscar Aluno         [6]")));
    while(continuar > 7 || continuar < 1){
        console.log("Valor inválido, tente novamente!!!");
        continuar = parseInt(prompt(console.log("\nEscolha a operação\nCadastrar novo aluno [1]\nDeletar um aluno     [2]\nParar código         [3]\nVer alunos           [4]\nTotal mensalidades   [5]\nBuscar Aluno         [6]")));
    }
    switch (continuar){ // switch case para definir qual operação relizar dentro do sistema
        case 1:
            alunos.push(createAluno());
            break;
        case 2:
            let id = parseInt(prompt(console.log("Digite o ID do aluno que deseja deletar: ")));    
            deleteAlunos(id);
            break;
        case 3:
            console.log("Código parado, segue array de objtos criado:  !!!\n",alunos);
            validar = false;
            break;
        case 4:
            if(alunos[0] === undefined)console.log("Nenhum aluno cadastrado!!!");
            else{
                console.log("Os alunos cadastrados são: ");
                alunos.forEach(alunos => console.log(`ID: ${alunos.id} -- Nome: ${alunos.nome} -- Idade: ${alunos.idade} anos`));
                console.log(`Totalizando um total de ${alunos.length} alunos e com uma média de idade de: ${mediaIdade()} anos`);
                idade.splice(0);
            }
            break;
        case 5:
            if(alunos[0] === undefined)console.log("Nenhum aluno cadastrado!!!")
            else{
                console.log(`O total geral de mensalidade(s) é de: R$ ${(totalMensalidade()).toFixed(2)}, com uma média de mensalidade de: R$${(totalMensalidade() / mensalidadeAlunos.length).toFixed(2)}`);
                mensalidadeAlunos.splice(0);
            }
            break;
        case 6:
            let tipo_busca,valor_busca;
            console.log("--------OBS: A opção de alterar acesso de aluno esta disponível somente para tipo de pesquisa por ID!!!--------");
            do{
                tipo_busca =  parseInt(prompt(console.log("Defina o tipo de busca do(s) aluno(s)\nID         [1]\nNome       [2]\nIdade      [3]\nProfessor  [4]\n")));
            }while(tipo_busca < 1 || tipo_busca > 4 || isNaN(tipo_busca));
            switch(tipo_busca){  //switch case para definir tipo de pesquisa dos alunos
                case 1:
                    tipo_busca = "id";
                    do{
                        valor_busca = parseInt(prompt(console.log("Digite um ID válido de um aluno: ")));
                    }while( valor_busca < 1 || isNaN(valor_busca));
                    buscarAluno(tipo_busca,valor_busca);
                    break;
                case 2:
                    tipo_busca = "nome";
                    valor_busca = prompt(console.log("Digite o nome EXATO do aluno: "));
                    buscarAluno(tipo_busca, valor_busca);
                    break;
                case 3:
                    tipo_busca = "idade";
                    valor_busca = parseInt(prompt(console.log("Digite a idade do(s) aluno(s): ")));
                    buscarAluno(tipo_busca, valor_busca);
                    break;
                case 4:
                    tipo_busca = "prof";
                    valor_busca = prompt(console.log("Digite o nome EXATO do professor: "));
                    buscarAluno(tipo_busca, valor_busca);
                    break;
            }
            
    }
}
