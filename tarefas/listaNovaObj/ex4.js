class Televisor{
    constructor(marca,modelo,fabricante,cor){
        this.marca = marca;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.cor = cor;
        this.canais = [];
    }
    listaCanais(){
        

    }
}

const tv1 = new Televisor('teste','abc','que eu quero','preto');
console.log(tv1);