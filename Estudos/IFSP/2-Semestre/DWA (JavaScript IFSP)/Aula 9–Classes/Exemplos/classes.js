// Douglas Crockford acha desnecessário uso de 
// classe em Javascript, pois já possui funções
// tem herança baseada em protótipo

//Class declaration - Maiúsculo em Classes
class Square {
}
console.log(Square);


// Outra forma de criar classes é por meio de 
// Class expression
const Square = class {
}
console.log(Square);


// Classe, nada mais é que uma função
const Square = class {
}
console.log(typeof Square);



// Método Construtor
class Square {
    constructor() {
    }
}
const square = new Square(); 
console.log(square);
// Quando instanciar o construtor será evocado
// todos os parâmetros passados serão recebidos pelo Construtor 



// Vamos passar o lado do quadrado (4) 
// É muito similar a função construtora
class Square {
    constructor(side) {
        this.side = side;
    }
}
const square = new Square(4);
console.log(square);
// ele retorna um objeto que tem a propriedade
// de chave side com valor 4


// Prototype methods
class Square {
    constructor(side) {
        this.side = side;
    }
    
    toString() {  // método toString está no protótipo
        return `side: ${this.side}`; // return de template literals 
    }
}
const square = new Square(4); 
// to string não está lá pois é um ptototype method (prototypo)
// Se evocado aparece
console.log(square.toString());


// Vamos criar calculetaArea para calcular o quadrado
// outro prototype method
class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2); //lados elevados a potencia 2
    }
    
    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`; // calculo da area
    }
}
const square = new Square(4);
console.log(square.toString());


// static methods
class Square {
    constructor(side) {
        this.side = side;
    }
    
    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }

    static fromArea(area) { 
	// não pertence a instancia, pertence a classe
        return new Square(Math.sqrt(area));
    }
}
const square = Square.fromArea(16); 
// Não vamos usar new Square, Vamos criar fromArea como static  
console.log(square.toString());
console.log(square.calculateArea());


// Similaridade entre classes e funções construtoras
// O mesmo com função construtora
function Square(side) {
    this.side = side;
}
Square.prototype.calculateArea = function() {
    return Math.pow(this.side, 2);
}
Square.prototype.toString = function() {
    return `side: ${this.side} area: ${this.calculateArea()}`;
}
Square.fromArea = function(area) {
    return new Square(Math.sqrt(area));
}
const square = Square.fromArea(16);
console.log(square.toString());