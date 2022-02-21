class Data{
    constructor(dia, mes, ano){
        if(isNaN(dia) === false && dia > 0 && dia <= 31 && isNaN(mes) === false && mes > 0 && mes <= 12 && isNaN(ano) === false && ano <= 2022){
            this.dia = dia;
            this.mes = mes;
            this.ano = ano
        }
        else throw "Valor inválido";
    }
    imprimirObj = function () {
        return console.log(this);
    }
    imprimirObjFormatado = function(){
        return console.log(`A data formatada armazenada nesse objeto é: ${this.dia}/${this.mes}/${this.ano}`);
    }
    igualdade = function(obj){
        if(this.dia === obj.dia && this.mes === obj.mes && this.ano === obj.ano) return true;
        else return false;
    }
    diferenca = function(obj){
        if(this.dia !== obj.dia || this.mes !== obj.mes || this.ano !== obj.ano) return true;
        else return false;
    }
    menorIgual = function(obj){
        if(this.ano <= obj.ano){ //validando se ano de this é menos igual o obj para comparar, caso não return é falso
            if(this.ano === obj.ano){ // se ano for igual, comparação deve continuar para o mês
                if(this.mes <= obj.mes){ // verificar se mes de this é menos igual, se this.mes maior, return é false
                    if(this.mes === obj.mes){ // se mes this.mes igual obj, deve continuar para comparar dia, caso contrário return é true
                        if(this.dia <= obj.dia)return true; //se this.dia menor igual, return true, caso contrário return false
                        else return false;
                    }
                    else return true;
                }
                else return false;
            }
            else return true;
        }
        else return false;
    }
    menor = function(obj){
        if(this.ano < obj.ano) return true;
        else if(this.mes < obj.mes) return true;
        else if(this.dia < obj.dia) return true;
        else return false;
    }
    maiorIgual = function(obj){  //os memos critérios vale para este método comparado com menor igual, mudando a comparação para maior igual
        if(this.ano >= obj.ano){ 
            if(this.ano === obj.ano){ 
                if(this.mes >= obj.mes){ 
                    if(this.mes === obj.mes){ 
                        if(this.dia >= obj.dia)return true;
                        else return false;
                    }
                    else return true;
                }
                else return false;
            }
            else return true;
        }
        else return false;
    }
    maior = function(obj){
        if(this.ano > obj.ano) return true;
        else if(this.mes > obj.mes) return true;
        else if(this.dia > obj.dia) return true;
        else return false;
    }
}
const novadata = new Data(03,04,2020);
novadata.imprimirObj();
novadata.imprimirObjFormatado();
const novadata2 = new Data(03,04,2021);
console.log(novadata.menorIgual(novadata2));
console.log(novadata.menor(novadata2));
console.log(novadata.maiorIgual(novadata2));
console.log(novadata.maior(novadata2));