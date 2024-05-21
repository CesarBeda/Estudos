// NEW 
const person = {
    name: "Linus Torvald",
    city: "Helsinki",
    year: 1969,
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
	// MÉTODO PARA CALCULAR A IDADE
};
console.log(person);
console.log(person.getAge());


// VAMOS CRIAR MAIS UMA PESSOA
const person1 = {
    name: "Linus Torvald",
    city: "Helsinki",
    year: 1969,
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};
const person2 = {
    name: "Bill Gates",
    city: "Seattle",
    year: 1955,
    getAge() {
        return ((new Date()).getFullYear() - this.year);
    }
};
console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
// REPARE QUE TODA ESTRUTURA DOS OBJETOS SÃO IGUAIS


// FUNÇÃO FÁBRICA
const createPerson = function(name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return ((new Date()).getFullYear() - this.year);
        }
    }
};
const person1 = createPerson("Linus Torvald", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
// Repare nos resultados que GET AGE está duplicado


// FUNÇÃO CONSTRUTORA
// COLOQUE SEMPRE EM MAISUCULA (por convenção)
const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year,
    this.getAge = function() {
        return ((new Date()).getFullYear() - this.year);
    }
};
const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);
// repare que elas são identicas, reuso de código
// Repare nos resultados que GET AGE ainda está duplicado

// PROTOTYPE
// Apenas as funções construtoras usam o prototype
const Person = function(name, city, year) {
    this.name = name,
    this.city = city,
    this.year = year
};
Person.prototype.getAge = function() {
    return ((new Date()).getFullYear() - this.year);
}; 
//Colocando todas as propriedades comuns 
// na função construtora (person) .prototype
//todos os objetos passam a compartilhar

const person1 = new Person("Linus Torvald", "Helsinki", 1969);
const person2 = new Person("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__);
// repare que elas são identicas
// Repare nos resultados que GET AGE NÃO está duplicado
