// THIS - variavel implicita
const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() { // crie um método para calcular
        return this.x * this.y; // se rodar apenas com x e Y - ERRO
    }
};
console.log(rectangle.calculateArea());
// this se refere a rectangle nesse caso




// SIMPLIFICANDO COM ESSA SINTAXE (ES6)
const rectangle = {
    x: 10,
    y: 2,
    calculateArea() {	// ISSO É UMA FUNÇÃO
        return this.x * this.y;
    }
};
console.log(rectangle.calculateArea());
//  o interpretador entende que é uma função




// Passando calculateArea por REFERENCIA
const calculateArea = function() {
    return this.x * this.y;
};

const rectangle = {
    x: 10,
    y: 2,
    calculateArea
};

console.log(rectangle.calculateArea());
// o THIS  se refere ao objeto que
// está evocando a função(rectangle)

