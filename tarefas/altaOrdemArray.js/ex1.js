const prompt = require("prompt-sync")({ sigint: true });
const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];

const email = prompt(console.log("Digite o e-mail: "));
const senha = prompt(console.log("Agora digite a senha: "));

const validarSenha = (email,senha) => {
    if( validarEmail(email)[0] === undefined)return "E-mail não encontrado!!!";
    else if(validarEmail(email)[0].senha === senha)return "E-mail e senha corretos!!!";
    else return "Senha incorreta!!!";
   
}
function validarEmail (email) {
       return usuarios.filter(obj => obj.email === email);
}
console.log(validarSenha(email,senha))