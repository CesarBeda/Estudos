// Recurso que veio com o ES6 e trouxe flexibilidade para a linguagem
const language = "C;Dennis Ritchie;1972".split(";");
const name = language[0];
const author = language[1];
const year = language[2];
console.log(name, author, year);


// Vamos extrair os dados com Destructuring
// aqui todos os elementos
const language = "C;Dennis Ritchie;1972".split(";");
const [name, author, year] = language;
console.log(name, author, year);


// aqui 2 elementos, repare na virgula
const [, author, year] ="C;Dennis Ritchie;1972".split(";");
console.log(author, year);


// Valores padrão como nas funções
const language = "C;Dennis Ritchie;1972".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);
// com todos elementos não aparece

// tirando elementos
const language = "C;Dennis Ritchie".split(";");
const [name = "-", author = "-", year = "-"] = language;
console.log(name, author, year);


// extrair valores de objetos
// forma direta
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
const name = language.name;
const author = language.author;
const year = language.year;
console.log(name, author, year);


// extrair valores de objetos
// aplicando destructuring
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
const {name, author, year} = language; 
//use chaves não colchetes  em objetos
console.log(name, author, year);


// Definir nomes diferentes para as variáveis 
// em relação as chaves das propriedades do objeto
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972
};
const {name: n, author: a, year: y} = language;
console.log(n, a, y);


// referenciar as propriedades de objetos 
// que estão dentro de outros objetos
// É complexo, cuidado, as vezes é preferivel criar as variaveis
const language = {
    name: "C",
    author: "Dennis Ritchie",
    year: 1972,
    company: {
        name: "Bell Labs"
    }
};
const {name: n, author: a, year: y, company: {name: c}} = language;
console.log(n, a, y, c);


//  Uma função normal
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));

// destructuring
// Vamos passa os parametros dentro de um array
// Só que ao receber na função, restaurar como variaveis
function sum([a, b]) {
    return a + b;
}
console.log(sum([2, 2]));


// destructuring 
// Vamos passar um objeto
// e restaurar como variaveis
function sum({a, b}) {
    return a + b;
}
console.log(sum({a: 2, b: 2}));