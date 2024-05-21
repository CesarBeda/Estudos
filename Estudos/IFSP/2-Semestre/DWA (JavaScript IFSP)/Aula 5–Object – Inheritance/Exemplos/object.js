// MANEIRAS DE CRIAR OBJETOS

{}; //Maneira mais usual de criar objetos

new Object(); // Através da Função Construtora

Object.create(null);  	// Através da Object API 
						// Protótipos (vamos ver em aula futura)
						
						
// MANEIRA LITERAL

const book = {};	// primeiro passo

const book = {
	title: "Javascript Assertivo",	
	author: "Gabriel Ramos",
	pages: 386,
	language: "Portugues",
	available: true
}; 

// atente ao detalhe, virgulas entre chave-valor
// A última linha não tem virgula
// sempre feche com ponto-virgula
// Nesse caso as chaves poder ser de qulquer tipo de dados

console.log(book);	// Mostre o objeto criado


// SHORTHAND NOTATION - ES6:
// Passando variaveis para o Objeto
const title = "Javascript Assertivo";	
const author = "Gabriel Ramos";
const pages = 386;
const language = "Portugues";
const available = true;

const book = {
    title,
    author,
    pages,
    language,
    available
};
console.log(book);


// Respeite os nomes das chaves
// como se fossem variáveis  
const book = {
	title: "Javascript Assertivo",	
	author: "Gabriel Ramos",
	number-of-pages: 386,	// NÃO FUNCIONA
	"number-of-pages": 386,	// MANEIRA CORRETA
	language: "Portugues",
	available: true
}; 
console.log(book);

// exceções
const excecao = {
	10: "Aceita",
	0xff: "Óia",
	dwa: "Javascript"
};
console.log(excecao);

// COMPUTANDO CHAVES
// Proporciona outras possibilidades
const chave1 = "title"; 	
const chave2 = "author";
const chave3 = "pages";
const chave4 = "language";
const chave5 = "available";

const bookc = {
    [chave1]: "Javascript Assertivo",
    [chave2]: "Gabriel Ramos",
    [chave3]: 386,
    [chave4]: "Portugues",
    [chave5]: true
};
console.log(bookc);


// Atribuição por meio de referencia
const book = {};
book.title = "Javascript Assertivo";
book.author = "Gabriel Ramos";
book.pages = 386;
book.language = "Portugues";
book.available = true;
console.log(book);

// Funciona com função construtora e Object API
const book = new Object()
const book = Object.create(null);


// computar chaves por referência
const key1 = "title";
const key2 = "author";
const key3 = "pages";
const key4 = "language";
const key5 = "available";
const book = {};
book[key1] = "Javascript Assertivo",
book[key2] = "Gabriel Ramos",
book[key3] = 386,
book[key4] = "Portugues",
book[key5] = true

console.log(book);

// propriedades consultadas por 
// referência de forma direta
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);
console.log(book.available);

// propriedades consultadas por 
// computação das chaves
const book = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
for (let key in book) {
	console.log(key);			// propriedades 
	//console.log(book[key]);	//valores 

}

// copiando valores e propriedades
// book1 para book2
const book1 = {
    title: "Javascript Assertivo",
    author: "Gabriel Ramos",
    pages: 386,
    language: "Portugues",
    available: true
};
const book2 = {};
for (let key in book1) {
    book2[key] = book1[key];
}
console.log(book2);