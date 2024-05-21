/* ======================================================================= */
// Aqui dois objetos simples 
// com 2 propriedades em comum
const scheme = {
    name: "Scheme",
    year: 1975,
    paradigm: "Functional"    
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "Functional"
};
console.log(scheme);
console.log(javascript);


/* ======================================================================= */
// Aqui criamos um terceiro objeto
// vamos ver como reaproveitar isso

const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    paradigm: "Functional"    
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    paradigm: "Functional"
};
console.log(functionalLanguage);
console.log(scheme);
console.log(javascript);

/* ======================================================================= */
// PROTÓTIPO - Porque a propriedade paradigm 
// não foi exibida dentro do objeto?
// O console.log só mostra as propriedades 
// dentro no próprio objeto.

const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};
console.log(functionalLanguage);
console.log(scheme);
console.log(javascript);

/* ======================================================================= */
// consultando a propriedade diretamente
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};
console.log(functionalLanguage);
console.log(scheme.paradigm);
console.log(javascript.paradigm);

// todo objeto em JS tem protótipo
let obj = {};
obj.

/* ======================================================================= */
// hasOwnProperty - determinar se uma 
// propriedade pertence ao objeto
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguage
};
const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
};
// aqui podemos verificar que paradigm
// faz parte o objeto
for (let key in scheme) {
    console.log(key);
}
// aqui podemos verificar que o 
// paradigm existe, mas esta em um dos seus
// protótipos 
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}


/* ======================================================================= */
// Object.setPrototypeOf - removemos __proto__
// Por questões de clareza no código 
// utilize Object.setPrototypeOf 
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = {
    name: "Scheme",
    year: 1975
};
Object.setPrototypeOf(scheme, functionalLanguage);
const javascript = {
    name: "JavaScript",
    year: 1995
};
Object.setPrototypeOf(javascript, functionalLanguage);
for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}


/* ======================================================================= */
// No Object.create já declaramos o protótipo
// na criação do objeto
const functionalLanguage = {
    paradigm: "Functional"
};
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

/* ======================================================================= */
// Cuidado com Object.create
// SE PASSAR NULL ACABA A CADEIA DE PROTÓTIPO
// remova o null e volte as chaves e vai funcionar
const functionalLanguage = Object.create(null); 
functionalLanguage.paradigm = "Functional";

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key));
}

/* ======================================================================= */
// Mesma propriedade no objeto e no protótipo
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";	// AQUI no protótipo

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";					// E AQUI na base

for (let key in javascript) {
    console.log(key, javascript[key]);
}// mostra base

/* ======================================================================= */
//Mesma propriedade no objeto e no protótipo
// getPrototypeOf
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";	// AQUI no protótipo

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;
javascript.paradigm = "OO";					// E AQUI na base

console.log(javascript); // mostra o objeto todo - BASE
console.log(javascript.paradigm);	// mostra paradigm - BASE
console.log(javascript.__proto__.paradigm);	// sobe um nível e acessa fL 
console.log(Object.getPrototypeOf(javascript).paradigm);
// pega o protótipo do objeto javascript e pega a propriedade paradigm


