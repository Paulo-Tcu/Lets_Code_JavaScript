const prompt = require("prompt-sync")({ sigint: true });

function createAluno(nome,idade,prof,acesso,mensalidade){
    nome = prompt(console.log("Nome:  "));
    for(let validar = true; validar;){
        idade = parseInt(prompt(console.log("Idade:  ")));
        let v_acesso = parseInt(prompt(console.log("Acesso Liberado ?\nSim [1]\nNão [2]")));
        mensalidade = parseFloat(prompt(console.log("Digite o valor da mensalidade em R$: ")));
        const v_prof = parseInt(prompt(console.log("Selecione o Professor:\nPaulo [1]\nAndre [2]\n João [3]")));
        switch(v_prof){
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
        if(isNaN(idade) || idade > 100 || idade < 10 || mensalidade < 0.01 || isNaN(mensalidade) || isNaN(v_acesso) || v_acesso > 2 || v_acesso < 1){
            console.log("Existe campos Inválidos");
            if(v_acesso > 2 || v_acesso <1)console.log("Campo acesso inválido!!!");
            else if(isNaN(idade) || idade > 100 || idade < 10)console.log("Campo idade inválido, precisa ser um valor numérico entre 10 a 100 anos");
            else if(isNaN(mensalidade) || mensalidade < 0.01)console.log("Campo mensalidade inválido, precisa ser um valor númerico e maior que R$0");
            validar = true;
        }
        v_acesso === 1 ? acesso = true : acesso = false;
    }
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
alunos.push(createAluno());
console.log(alunos);
alunos.push(createAluno());
console.log(alunos);