const prompt = require("prompt-sync")({ sigint: true });

let number = 0;
while(number <= 10){
    console.log("5 X "+number+" = ",5*number);
    number ++;
}