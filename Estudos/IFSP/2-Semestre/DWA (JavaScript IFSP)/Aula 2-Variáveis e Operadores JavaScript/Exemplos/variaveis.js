//VAR
var precoDoProduto = 29.72;

var nomeDoProfessor = "Eduardo Henrique";

var acessoLiberado = true;


var idadeDoEdu = 30;; // primeiro declare a variável atribua 
console.log(idadeDoEdu); // com console.log sempre vai dar undefined

var idadeDoEdu; // redeclaração 
idadeDoEdu = 50; // reatribuição 

if (true) {
	var banana = 12;
}
console.log(banana); // com var é permitido 

/* ======================================================================= */

//LET

let precoDoCarro = 89000;
console.log(precoDoCarro);

precoDoCarro = 10000; // reatribuição  permitida
let precoDoCarro; // redeclaração não permitida

console.clear();

if (true) {
	let abacaxi = 44;
	console.log(abacaxi) // com let dentro do bloco funciona
}
console.log(abacaxi); // com let não é permitido  

/* ======================================================================= */

//CONST

const precoDaPrancha = 111111;
console.log(precoDaPrancha);

precoDaPrancha = 10000; // reatribuição não permitida

const precoDaPrancha; // redeclaração não permitida


/* ======================================================================= */
//Nunca declare variáveis sem VAR, LET ou CONST.
//Evite VAR sempre que puder.

function func1(a) {
	var kiwi = arguments[0];
    console.log(kiwi);
	pera = 3456;
}
func1(344);

console.log(pera); //se não declarar pelo menos var, vai pra global


/* ======================================================================= */
// nomes de identificadores
let codigo;
let Codigo;
let _codigo;
let $codigo;

let codigo123;
let Codigo123;
let _codigo123;
let $codigo123;

let 123codigo;  // não aceitos
let @Codigo; // não aceitos