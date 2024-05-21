// CONTROLE FLUXO

/* ======================================================================= */
// IF .. ELSE

if( condition ) {
   // statements
}

let year = prompt('Em que ano a especificação ECMAScript-2015 foi publicada?', ''); 

if (year == 2015) { 
alert('Temos um Xeroque Rolmes aqui!' ); 
}

let x = 25;
if( x > 10 )
    console.log('x É MAIOR QUE 10');

 // undefined - false, porém não existe tratamentpo
let x2 = 9;
if( x2 > 10 )
    console.log('x2 É MAIOR QUE 10');


/* ======================================================================= */
// ELSE
	

if( condition ) {
  // statement
} else { 
  // statement (when condition evaluates to false)
}

let x = 5;
if (x > 10) {
    console.log('x É MAIOR QUE 10');
} else {
    console.log('x É MENOR OU IGUAL A 10');
}

// ELSE IF

if (condition_1) {
   // statments
} else if (condition_2) {
  // statments
} else {
   // statments
}

//Compara dois números a e b
// se a for maior, menor ou igual a b

let a = 10, 
    b = 20;
if (a > b) {
    console.log('a é MAIOR que b');
} else if (a < b) {
    console.log('a é MENOR que b');
} else {
    console.log('a é IGUAL a b');
}

/* ======================================================================= */
// TERNÁRIO ? :
let nota = 0.3;
nota >= 0.5 ? "aprovado" : "reprovado"


// VEJA AS DIFERENÇAS
var animal = 'kitty';
var result = (animal === 'kitty') ? 'fofo' : 'ainda bom';
console.log(result)

var animal = 'kitty';
var result = '';
if (animal === 'kitty') {
    result = 'fofo';
} else {
    result = 'ainda bom';
}
console.log(result)

//Multiplos

let age = prompt('idade?', 18);

let message = (age < 3) ? 'Hi, bebê!' :
  (age < 18) ? 'Fala Xovem!' :
  (age < 100) ? 'Saudações vovô!' :
  'Que idade incomum!';
alert( message );


/* ======================================================================= */
// SWITCH

switch (expression) {
    case value_1:
        statement_1;
        break;
    case value_2:
        statement_2;
        break;
    case value_3:
        statement_3;
        break;
    default:
        default_statement;
}

//
var tipofruta="Banana";

switch (tipofruta) {
   case "Laranja":
      console.log("O quilo da laranja está R$0,59.");
      break;
   case "Maçã":
      console.log("O quilo da maçã está R$0,32.");
      break;
   case "Banana":
      console.log("O quilo da banana está R$0,48.");
      break;
   case "Cereja":
      console.log("O quilo da cereja está R$3,00.");
      break;
   case "Manga":
      console.log("O quilo da manga está R$0,56.");
       break;
   case "Mamão":
      console.log("O quilo do mamão está R$2,23.");
      break;
   default:
      console.log("Desculpe, não temos " + tipofruta + ".");
}
console.log("Gostaria de mais alguma coisa?");