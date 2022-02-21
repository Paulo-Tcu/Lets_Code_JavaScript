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

const idadeMin = parseInt(prompt(console.log("Digite idade minima: ")));
const idadeMax = parseInt(prompt(console.log("Digite idade maxima: ")));

const mostrarEntre = (min,max) => {
    const mostrar = usuarios.filter(obj => obj.idade >= min && obj.idade <= max);
    if(mostrar[0]===undefined)return console.log("Não encontrado na base");
    else return mostrar.forEach(obj=> console.log(obj.nome));
    
}
mostrarEntre(idadeMin,idadeMax);
