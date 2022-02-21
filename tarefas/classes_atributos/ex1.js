class Cliente{
    constructor(nome,idade,email){
        if(isNaN(idade) || idade < 1)return console.log("Idade inválida");
        else{
            this.nome = nome;
            this.idade = idade;
            this.email = email;
        }
    }
    imprimir = function () {
        if(this.idade !== undefined)console.log(`\nNome: ${this.nome}\n\nIdade: ${this.idade}\n\nE-mail: ${this.email}\n`);
    }
}

const cliente1 = new Cliente("Paulo",25,"paulo@email.com");
cliente1.imprimir();
//console.log(cliente1);