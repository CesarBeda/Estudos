// Operadores Aritméticos

umMaisUm  =  1  +  1;
//Adição + 

umMenosUm  =  1  -  1;
//Subtração -

//Multiplicação *
tresVezesDois  =  3  *  2;

//Divisão /
quatroDivididoPorDois  =  4  /  2;

//Módulo %
seisModuloCinco  =  6  %  5;


//concatenação de strings
var  s1  =  " Marcelo ";
var  s2  =  "  ";
var  s3  =  " Martins ";

var  s4  =  s1  +  s2  +  s3;

console.log(s4);

/* ======================================================================= */
// Operadores de atribuição

// Simples =
let  valor  =  1;
//  valor  =  1

// Incremental +=
valor  +=  2;
//  valor  =  3

// Decremental -=
valor   -=  1;
//  valor  =  2

// Multiplicativa *=
valor  *=  6;
//  valor  =  12

// Divisória /=
valor  /=  3;
//  valor  =  4

// Modular %=
valor  %=  3;
//  valor  =  1


/* ======================================================================= */
// Operadores de Incremento

let  valor2 =10;

// Incremento ++
valor2 ++;
//  valor  =  10  é mostrado pois o ++ é pos visualização 
valor2  // agora mostra 11


// Decremento --
valor2 --;
//  valor  =  10  é mostrado pois o -- é pos visualização 
valor2  // agora mostra 10


/* ======================================================================= */
// Operadores Relacionais
var  valor  =  2;
var  t  =  false ;

// Igualdade ==
t  =  ( valor  ==  2);       //  t  =  true

// Diferença !=
t  =  ( valor  !=  2);       //  t  =  false

// Menor <
t  =  ( valor  <  2);         //  t  =  false

// Menor ou igual <=
t  =  ( valor   <=  2);       //  t  =  true

// Maior >
t  =  ( valor  >  1);         //  t  =  true

// Maior ou igual >=
t  =  ( valor   >=  1);       //  t  =  true


/* ======================================================================= */
// Operadores Binários

// | (“OU”)
var  a  =  Math.random();
var  b  =  Math.random();
console.log(a);
console.log(b);

alert (a  >  0.2  ||  b  <  0.8) ;

// && (“AND”)
var  c  =  Math.random();
var  d  =  Math.random();
console.log(c);
console.log(d);

alert (c  >  0.2  &&  d  <  0.8) ;


// ^ ("XOR")
var nb = 5^9 // = 12
console.log(nb);


// ~ ("NOT")
var nb = ~2 // = -3
console.log(nb);
