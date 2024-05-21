//TIPOS DE DADOS


/* ======================================================================= */

//TIPOS DE DADOS
typeof "String"; //string
typeof Date(2011,01,01); //string

typeof 42; //numbers

typeof true;  //boolean

var var1; typeof var1;	//undefined

typeof Symbol();	//symbol

typeof function(){};	//function

typeof {};	//object
typeof [];	//object
typeof null;	//object
typeof /aaa/;	//object
typeof Error();	//object

/* ======================================================================= */
// NUMBERS
10
9.9	//decimal

0xFF	//hexadecimal

0b11	//binário

0o10	//octal

/* ======================================================================= */

// VAMOS EXPLORAR ALGUMAS OPERAÇÕES
let d = new Number(10);
d.

//toExponential - COLOCA 10 CASAS APÓS A VIRGULA E LEVA O PONTO
var num1 = 798.4;
num1.toExponential(10);

//toFixed - CASAS APÓS A VIRGULA - BOLETOS, CONTA CORRENTE
var num2 = 798.4;
num2.toFixed(2)

//toPrecision - NUMERO TOTAL É COMPLETADO COM CASAS
var num3 = 798.4;
num2.toPrecision(10);

