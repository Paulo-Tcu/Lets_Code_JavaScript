class Retangulo{
    constructor(largura,altura){
       if(largura > 0 && isNaN(largura) === false && altura > 0 && isNaN(altura) === false){
            this.largura = largura;
            this.altura = altura;
       }
       else throw "Dados inválidos para criar o objeto"
    }
    calcArea = function (){
        const area = this.largura * this.altura;
        if(isNaN(area) === false)return area;
        else return "Não foi possível realizar o calculo"
    }
}

class Quadrado extends Retangulo{
    constructor(altura, largura = altura){
        super(largura,altura);
    }
}

const quadrado1 = new Quadrado(20);
console.log(quadrado1.calcArea());