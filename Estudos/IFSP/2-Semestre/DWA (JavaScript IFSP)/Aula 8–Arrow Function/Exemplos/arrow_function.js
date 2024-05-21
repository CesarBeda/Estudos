// arrow function - Melhoram a legibilidade
// do código - Lembram desse exemplo de function?!
const sum = function(a, b) {
    return a + b;
};
const subtract = function(a, b) {
    return a - b;
};
const calculator = function(fn) {
    return function(a, b) {
        return fn(a, b);
    };
};
console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));


// removemos a palavra function e trocamos pelo
// simbolo de arrow
const sum = (a, b) => { 	//aqui
    return a + b;
};
const subtract = (a, b) => { //aqui
    return a - b;
};
const calculator = (fn) => { //aqui
    return (a, b) => {		 //aqui
        return fn(a, b);
    };
};
console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));
// ficou mais enxuto, mas não necessariamente
// mais legivel


// vamos melhorar removendo as chaves
// e o return (return é AUTOMÁTICO)
const sum = (a, b) => a + b;	
const subtract = (a, b) => a - b;
const calculator = (fn) => (a, b) => fn(a, b); 
// temos duas funções aninhadas aqui
// nem sempre é legivel
console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));


// Com dois ou mais parametros o parenteses é 
// obrigatório. Com um não, veja FN
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const calculator = fn => (a, b) => fn(a, b); 
console.log(calculator(sum)(2, 2));
console.log(calculator(subtract)(2, 2));


// As arrow functions não possuem as suas 
// próprias variáveis this e arguments
const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: function() {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person);
console.log(person.getAge());


// Não utilize arrow function com o 
// método this
const person = {
    name: "James Gosling",
    city: "Alberta",
    year: 1955,
    getAge: () => {
        return (new Date()).getFullYear() - this.year;
    }
};
console.log(person);
console.log(person.getAge());
// o this do objeto evocado(person) não funciona


// Da mesma maneira, o arguments não funciona
// vamos ver funcionando primeiro
const sum = function() {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));

// Quando colocamos a arrow function com arguments
// não funciona
const sum = () => {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument];
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));


// E se um objeto for retornado?
const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year
    };
};
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);

// Trocamos function pela arrow =>
// porém, as chaves do objeto são interpretadas como BLOCO :( erro
const createPerson = (name, city, year) => {name, city, year};
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);

// Para funcionar, basta colocar parentes entorno do objeto
const createPerson = (name, city, year) => ({name, city, year});
const person = createPerson("Alan Kay", "Springfield", 1940);
console.log(person);