// undefined
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
console.log(book.publisher);
// undefined - Propriedade sequer existe
// null - Ausência de valor


/* ======================================================================= */
// Operador in (chave in objeto) – Pode ser 
// utilizado para consultar propriedade antes de usar 
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
console.log("title" in book);
console.log("author" in book);
console.log("pages" in book);
console.log("language" in book);
console.log("available" in book);
console.log("publisher" in book); 
// Neste caso não existe a propriedade publisher

/* ======================================================================= */

// Não atribua para undefined ou null com 
// intenção de apagar uma propriedade
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};

book.available = undefined; // muda apenas o valor

console.log(book);

console.log("available" in book);

// a propriedade continua existindo

// null, o mesmo resultado
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
book.available = null; // muda apenas o valor tbm

console.log(book);

console.log("available" in book);
// a propriedade continua existindo

/* ======================================================================= */

//delete
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
delete book.available;

console.log(book);

console.log("available" in book);

// Adicionar uma propriedade a um objeto
// A sintaxe é: object.property = value

// por referencia direta
book.publisher = 'Casa do código';

//computação de chaves por referencia
book['publisher'] = 'Casa do código';