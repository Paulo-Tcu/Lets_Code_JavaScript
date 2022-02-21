const prompt = require("prompt-sync")({ sigint: true });

let nota = [];
for (let i =0; i < 3;){
    let vnota = parseFloat(prompt(console.log("Digite a nota: ")));
    if (vnota >= 0 && vnota <= 10){
        nota.push(vnota);
        i++;
    }
    else console.log("Valor inválido, valores permitidos somente entre 0 á 10");
}
//console.log(nota);

let media = ((nota[0] + nota[1] + nota[2])/3).toFixed(2);
if (media < 5)console.log("A media foi de "+media+" e o aluno foi reprovado!!!");
else if(media >= 5)console.log("A média foi de "+media+" e o aluno está aprovado!!!");