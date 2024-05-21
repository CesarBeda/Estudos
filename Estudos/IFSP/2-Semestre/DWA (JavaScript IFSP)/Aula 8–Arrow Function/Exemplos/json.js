// stringfy nos Tipos de dados
JSON.stringify(10);	// number - saida uma string
JSON.stringify("JavaScript"); // ? saida uma string com aspas
JSON.stringify(true);	// boolean - similar ao number
JSON.stringify(false);
JSON.stringify({name: "Self", paradigm: "OO"}); // string contendo objeto com chaves e valores entre aspas
JSON.stringify([1,2,3,4,5,6,7,8,9]); // saida uma string
JSON.stringify(null); // - similar ao number
// ele diferencia os tipos de dados através da saida

// parse - faz o inverso
JSON.parse('10'); 
JSON.parse('"JavaScript"');
JSON.parse('true');
JSON.parse('false');
JSON.parse('{"name": "Self","paradigm": "OO"}');
JSON.parse('[1,2,3,4,5,6,7,8,9]');
JSON.parse('null');

// Deu shit
JSON.parse('Eduardo');


// Formas de comparar objeto
// stringfy!!!!!!
// formato de intercâmbio de dados
const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
console.log(book1 === book2); // false
console.log(JSON.stringify(book1) === JSON.stringify(book2)); 
// true

// Clonar objeto, duplicar
const book1 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book2 = {
    name: "Refactoring",
    author: "Martin Fowler"
};
const book3 = JSON.parse(JSON.stringify(book2));
console.log(book2 === book3);
console.log(book3);