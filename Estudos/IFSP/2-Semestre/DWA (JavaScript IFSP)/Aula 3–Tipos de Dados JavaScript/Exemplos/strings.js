// strings

'ADS'; // aspas simples
"ADS"; // aspas duplas
`ADS`; // acento grave

/* ======================================================================= */
// Comparação é tudo igual as 3 formas
 
'ADS' === "ADS";
'ADS' === `ADS`;
"ADS" === `ADS`;

/* ======================================================================= */
// Através de uma função construtora
// agora temos um objeto do tipo string
// que tem um primitivo dentro 
 
new String('ADS');
new String("ADS");
new String(`ADS`); 

// em volumes altos 
//Função construtora é mais lenta pode prejudicar a performance
/* ======================================================================= */
// comparação - Performance com objeto string

//apenas string primitivo
let counter = 0;
console.time("performance");
while (counter < 100000) {
    "ADS";						 
    counter++;
}
console.timeEnd("performance");

// utilizando new String (objeto)
let counter = 0;
console.time("performance");
while (counter < 100000) {
    new String("ADS");
    counter++;
}
console.timeEnd("performance");
// na prática se utiliza os primitivos

/* ======================================================================= */
// scape

console.log("Se você precisar colocar uma palavra com aspas \"prototype\" precisamos escapar.");
// as aspas fecham a cadeia de string, cuidado
console.log('An object\'s prototype chain should have finite length.');
// aspas simples tbm
console.log(`Aqui estamos imprimindo o barra N \\n`);
// Aqui vamos imprimir o \n
// por isso 2 barras, coloque apenas uma e verás uma quebra de linha

// Domingo é 0, atenção
let daysOfWeek = "0 - Sun\n1 - Mon\n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat";
console.log(daysOfWeek);

// Em codepoints - unicode
let daysOfWeekInCodePoints = "\u0030 \u002d \u0053\u0075\u006e\u000A\u0031 \u002d \u004d\u006f\u006e\u000A\u0032 \u002d \u0054\u0075\u0065\u000A\u0033 \u002d \u0057\u0065\u0064\u000A\u0034 \u002d \u0054\u0068\u0075\u000A\u0035 \u002d \u0046\u0072\u0069\u000A\u0036 \u002d \u0053\u0061\u0074";
console.log(daysOfWeekInCodePoints);
