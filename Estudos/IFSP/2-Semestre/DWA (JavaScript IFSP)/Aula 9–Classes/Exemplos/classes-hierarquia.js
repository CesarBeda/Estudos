//  Hierarquia de classes com extends
//  Aqui as classes são bem vindas
//  Dificil implementação com função construtora

// 1ª Classe - Shape - Super Class
class Shape {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

// 2ª Classe - Square
class Square extends Shape {
    constructor(side) {
        super();  
		// necessário invocar o construtor da superclass 
		// através de super() antes de utilizar a referência this
        this.side = side;
    }
    
    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}
const square = Square.fromArea(16);
console.log(square.toString());


// 3ª Classe - Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.ceil(Math.sqrt(area / Math.PI)));
    }
}
const circle = Circle.fromArea(314.159265);
console.log(circle.toString());



