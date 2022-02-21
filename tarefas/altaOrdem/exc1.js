const prompt = require("prompt-sync")({ sigint: true });

function createColaborador(arr = Array){ //Função para criar colaborador
    let id,nome,idade,cargo,salario,data_admissao;
    nome = prompt(console.log("Nome:  "));
    //Todo do-while é para verificação e validação se as váriaveis estão recebendo os valores esperados.
    do{
        idade = parseInt(prompt(console.log("Idade precisa ser entre 18 a 100 anos\nIdade:  "))); 
    }while((isNaN(idade) || idade > 100 || idade < 18));

    cargo = prompt(console.log("Cargo:  "));
    do{
        salario = parseFloat(prompt(console.log("O salário deve ser maior que R$0,01\nDigite o valor do salário mensal em R$: ")));
    }while(isNaN(salario) || salario < 0.01);
    data_admissao = prompt(console.log("Data de admissão: "));

    console.log("Colaborador cadastrado com sucesso!!!");
    //retorno da função, está retornando um objeto Colaborador
    return{
        /*Caso o arry esteja vazio, ele irá incluir o id = 1 para o indice 0, posteriormente irá buscar o valor de id
        do último indice dentro do array, e adicionar mais 1 para criar o id do próximo objeto*/
        id: arr[0] === undefined ? id = 1 : id = arr[arr.length-1].id + 1, 
        nome,
        idade,
        cargo,
        salario,
        data_admissao
    }
}
function deleteColaborador(arr =Array,id) { //Função para deletar colaborador.
    let deletar; //variavel que receberá o indice no qual o usuário deseja deletar.
    arr.filter((obj,indice) => {
        if(obj.id === id){
            deletar = indice;
        }
    });
    //caso o filter retornar undefined para a varivel deletar, significa que usuário não está cadastrado dentro do array.
    if(deletar === undefined)return console.log("Id inexistente !!!"); 
    else { //Caso contrário, código irá deletar usuário através do splice e printar o nome do usuário deletado.
        console.log(`O Colaborador ${arr[deletar].nome} com id: ${arr[deletar].id} foi removido com sucesso !!!`);
        arr.splice(deletar,1);
    }
}

function buscarColaborador (arr = Array,tipo, valor){ //Função para localizar colaboradores cadastrados dentro do array.
    let validador = false; //váriavel para verificar se função caiu dentro da condição esperada.
    if(arr[0] === undefined)console.log("Nenhum usuário cadastrado !!!"); //Caso verdadeiro, array está vazio
    else{
        arr.forEach((obj,indice) => { //ForEach para somente print o resultado do colaborador localizado.
            if(obj[tipo] === valor){
                console.log(`\nID: ${obj.id}\nNome: ${obj.nome}\nIdade: ${obj.idade} anos\nSalario: R$ ${obj.salario}\nCargo: ${obj.cargo}\nData Admissão: ${obj.data_admissao}`);
                validador = true;

                if(tipo === "id"){
                //Como proposto no código, somente por busca id poderá alterar dados do objeto, essa váriavel é para verificar se deseja alterar
                    let alterar;
                    //Novamente todos o do-while são para validação do valores esperados do input
                    do{
                        alterar = parseInt(prompt(console.log("\nDeseja editar dados do colaborador?\nSim  [1]\nNão  [2]")));
                        if(alterar === 1){ //Se condição de edição for aceita
                            let novo_valor; //variavel que verifica qual valor deseja alterar dentro do objeto selecionado
                            do{
                                novo_valor = parseInt(prompt(console.log("\nDeseja alterar\nNome           [1]\nIdade          [2]\nCargo          [3]\nSalário        [4]\nData admissão  [5]\nTodos os dados [6]")));
                            }while(novo_valor < 1 || novo_valor > 6 || isNaN(novo_valor));
                            switch(novo_valor){ //switch case para verificar qual o valor a ser alterado
                            
                            /*OBS --- Nesse caso em especifico não foi feito a questão de imutabilidade pois no exec solicitou 
                            que obj fosse alterado dentro do array*/
                                case 1:
                                    obj.nome = prompt(console.log("Altere ou insira novo nome: "));
                                    console.log("\nNome Alterado");
                                    break;
                                case 2:
                                    obj.idade = parseInt(prompt(console.log("Insira nova idade: ")));
                                    console.log("\nIdade Alterado");
                                    break;
                                case 3:
                                    obj.cargo = prompt(console.log("Altere ou insira novo cargo: "));
                                    console.log("\nCargo Alterado");
                                    break;
                                case 4:
                                    obj.salario = parseFloat(prompt(console.log("Altere ou insira novo salário: ")));
                                    console.log("\nSalário Alterado");
                                    break;
                                case 5:
                                    obj.data_admissao = prompt(console.log("Altere ou insira nova data de admissão: "));
                                    console.log("\nData de admissão Alterada");
                                    break;
                                case 6:
                                    obj.nome = prompt(console.log("Altere ou insira novo nome: "));
                                    obj.idade = parseInt(prompt(console.log("Insira nova idade: ")));
                                    obj.cargo = prompt(console.log("Altere ou insira novo cargo: "));
                                    obj.salario = parseFloat(prompt(console.log("Altere ou insira novo salário: ")));
                                    obj.data_admissao = prompt(console.log("Altere ou insira nova data de admissão: "));
                                    console.log("\nDados alterados com sucesso.");
                                    break;
                            }
                        }
                    }while(alterar !== 1 && alterar !== 2);
                }
            }
            else if(indice === arr.length-1 && validador === false)console.log("Aluno não cadastrado!!!"); //Caso array esteja vazio
        });
    }
}
const colaboradores = []; //Array para armazenar colaboradores
for(let validar = true; validar;){ //Laço para verificar quando parar o código
    
    //Seleção de qual opção executar no código
    let opcao = parseInt(prompt(console.log("\nSelecione dentre essas opções:\n\nAdicionar Colaborador  [1]\nRemover Colaborador    [2]\nColaboradores e info   [3]\nParar Código           [4]\nBusca avançada         [5]")));
    switch(opcao){ //Case para executar opção escolhida
        case 1:
            colaboradores.push(createColaborador(colaboradores));
            break;
        case 2:
            //Novamente todos o do-while são para validação do valores esperados do input
            let id;
            do{
                id = parseInt(prompt(console.log("Digite um Id válido: ")));
                deleteColaborador(colaboradores,id);
            }while(isNaN(id) || id < 1);
            break;
        case 3:
            if(colaboradores[0] === undefined)console.log("Nenhum usuário cadastrado!!!");
            else{
                console.log("Para mais detalhes do colaborador, realize a pesquisa por Id, nome ou cargo.\n");
                let salario=0, idade=0;
                colaboradores.forEach(obj => {
                    console.log(`Id: ${obj.id}\nNome: ${obj.nome}\n`);
                    salario += obj.salario;
                    idade += obj.idade;
                });
                console.log(`Total de colaboradores: ${colaboradores.length}\nMédia de idade: ${(idade/colaboradores.length).toFixed(2)}\nTotal salário mensal: R$ ${salario.toFixed(2)}, com uma média de: R$ ${(salario/colaboradores.length).toFixed(2)}`);
            }
            break;
        case 4:
            console.log("Código parado, segue arry de objetos: ",colaboradores);
            validar = false;
            break;
        case 5:
            let tipo_busca,valor_busca;
            console.log("--------OBS: A opção de alterar dados do colaborador esta disponível somente para tipo de pesquisa por ID!!!--------");
            do{
                tipo_busca =  parseInt(prompt(console.log("Defina o tipo de busca do(s) colaborador(s)\nID         [1]\nNome       [2]\nIdade      [3]\nCargo      [4]\n")));
            }while(tipo_busca < 1 || tipo_busca > 4 || isNaN(tipo_busca));
            switch(tipo_busca){  //switch case para definir tipo de pesquisa dos colaboradores
                case 1:
                    tipo_busca = "id";
                    do{
                        valor_busca = parseInt(prompt(console.log("Digite um ID válido de um aluno: ")));
                    }while( valor_busca < 1 || isNaN(valor_busca));
                    buscarColaborador(colaboradores,tipo_busca,valor_busca);
                    break;
                case 2:
                    tipo_busca = "nome";
                    valor_busca = prompt(console.log("Digite o nome EXATO do colaborador: "));
                    buscarColaborador(colaboradores,tipo_busca,valor_busca);
                    break;
                case 3:
                    tipo_busca = "idade";
                    do{
                        valor_busca = parseInt(prompt(console.log("Digite a idade do(s) colaborador(s): ")));
                    }while(valor_busca < 1 || isNaN(valor_busca));
                    buscarColaborador(colaboradores,tipo_busca,valor_busca);
                    break;
                case 4:
                    tipo_busca = "cargo";
                    valor_busca = prompt(console.log("Digite o cargo EXATO cadastrado: "));
                    buscarColaborador(colaboradores,tipo_busca,valor_busca);
                    break;
            }
            break;
        default:
            opcao = parseInt(prompt(console.log("\nSelecione dentre essas opções:\n\nAdicionar Colaborador  [1]\nRemover Colaborador    [2]\nColaboradores e info   [3]\nParar Código           [4]\nBusca avançada         [5]")));
            break;
    }
}