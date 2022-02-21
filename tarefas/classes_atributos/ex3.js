class Retangulo{
    constructor(largura,altura){
       if(largura > 0 && isNaN(largura) === false && altura > 0 && isNaN(altura) === false){
            this.largura = largura;
            this.altura = altura;
       }
       else return console.log("Dados inválidos para criar o objeto")
    }
    calcArea = function (){
        const area = this.largura * this.altura;
        if(isNaN(area) === false)return area;
        else return "Não foi possível realizar o calculo"
    }
}

const retangulo1 = new Retangulo(10,20);
console.log(retangulo1.calcArea());