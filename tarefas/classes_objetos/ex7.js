class Pessoa {
    constructor(nome,idade,genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }
    imprimirObj = function(){
        return console.log(this);
    }
}

class Contato extends Pessoa {
    constructor(nome,idade,genero,telefone,email){
        super(nome,idade,genero);
        this.telefone = telefone;
        this.email = email;
    }
}

class Agenda{
    constructor(lista){
        this.lista = lista;
    }
    buscarContato = function(nome){
        const validar = contatos.filter(obj => {
            if(obj.nome === nome){
                return obj.imprimirObj();
            }
        });
        if(validar === undefined)return console.log("Usuário não encontrado");
    }
    
    removerContato = function(nome){
        const resultado = contatos.filter((obj,indice) => obj.nome === nome ? indice : undefined);
        if(resultado){
            console.log(`Contato ${nome} removido com sucesso`);
            contatos.splice(resultado,1);
            this.lista = [...contatos];
        }
        else if(resultado === undefined){
            console.log("Contato inexistente");
        }
    }
    addContato = function(nome,idade,genero,telefone,email){
        contatos.push(new Contato(nome,idade,genero,telefone,email));
        this.lista = [...contatos];

    }
    verLista = function(){
        return console.log(this.lista);
    }
}
const contatos = [];

const nova_agenda = new Agenda();
nova_agenda.addContato("Paulo",25,"M","12346789","paulo@paulo");
nova_agenda.addContato("teste",48,"M","12346789","paulo@paulo");
nova_agenda.addContato("teste2",65,"M","12346789","paulo@paulo");
nova_agenda.buscarContato("teste");
console.log("-------------------------------------------------------");
nova_agenda.verLista();
nova_agenda.removerContato("Paulo");
console.log("-------------------------------------------------------");
nova_agenda.verLista();

