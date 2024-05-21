
// Object.assign faz a cópia das propriedades  
//  pega tudo de source e coloca em target
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// output: Object { a: 1, b: 4, c: 5 }

/* ======================================================================= */
// Object.keys() retorna as chaves em um array
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.keys(javascript));

/* ======================================================================= */
// Object.values Retorna os valores em um array
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.values(javascript));
/* ======================================================================= */
// Object.entries Retorna pares chave valor
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.entries(javascript));
/* ======================================================================= */
// Object.is compara objetos
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript, javascript));

/* ======================================================================= */
// em objetos FALSE - objetos são diferentes
const javascript1 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
const javascript2 = {
    name: "JavaScript",
    year: 1995,
    paradigm: "OO and Functional"
};
console.log(Object.is(javascript1, javascript2));

