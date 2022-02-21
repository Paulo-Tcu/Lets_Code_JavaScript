class Bola{
    constructor(cor = String,raio){
        if(raio > 0 && isNaN(raio) === false && cor.length > 0 && cor !== undefined){
            this.cor = cor;
            this.raio = raio;
        }
        else return console.log("Dados inválidos para criação do objeto");
        
    }
    calcArea = function(){
        if(this.raio > 0 || isNaN(this) === false)return (3.14159 * Math.pow(this.raio,2)).toFixed(2);
        else return "Não foi possível realizar o calculo";
    }
    calcVolume = function(){
        if(this.raio > 0 || isNaN(this) === false)return ((4/3) * 3.14159 * Math.pow(this.raio,3)).toFixed(2);
        else return "Não foi possível realizar o calculo";
        
    }
    get print_cor(){
        if(this.cor !== undefined && this.cor.length > 0)return this.cor;
        else return "Cor inválida ou vazia"
    };
}

const bola1 = new Bola("Black",20);
console.log(bola1.print_cor);
console.log(bola1.calcArea());
console.log(bola1.calcVolume());