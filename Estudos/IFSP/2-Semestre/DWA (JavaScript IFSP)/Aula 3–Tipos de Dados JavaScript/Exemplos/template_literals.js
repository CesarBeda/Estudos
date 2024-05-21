// Template literals

// Aqui da maneira que costumamos ver
let host = "localhost";
let port = "3128";
let resource = "afirma";


let url = "https://" + host + ":" + port + "/" + resource;
console.log(url);

// Aqui com template literals - ATENTE AO DETALHE `
let url2 = `https://${host}:${port}/${resource}`; 
console.log(url2);

// Qual a diferença aqui? 
let url3 = "https://${host2}:${port2}/${resource2}"; 
console.log(url3);

/* ======================================================================= */
// Comparações - Vantagens

// sem quebra de linhas em string
let monthsOfYear = "0 - Jan" + 
"1 - Feb" + 
"2 - Mar" + 
"3 - Apr" + 
"4 - May" + 
"5 - Jun" +
"6 - Jul" +
"7 - Aug" +
"8 - Sep" +
"9 - Oct" + 
"10 - Nov" +
"11 - Dec"
console.log(monthsOfYear);

// sem quebra de linhas em string utilizando barra
let monthsOfYear = "0 - Jan\
1 - Feb\
2 - Mar\
3 - Apr\
4 - May\
5 - Jun\
6 - Jul\
7 - Aug\
8 - Sep\
9 - Oct\
10 - Nov\
11 - Dec";
console.log(monthsOfYear);

// quebrando linhas  utilizando barra N
let monthsOfYear = "0 - Jan\n\
1 - Feb\n\
2 - Mar\n\
3 - Apr\n\
4 - May\n\
5 - Jun\n\
6 - Jul\n\
7 - Aug\n\
8 - Sep\n\
9 - Oct\n\
10 - Nov\n\
11 - Dec";
console.log(monthsOfYear);

//Qual a vantagem? Usando o template literal, acento agudo
// ele leva em conta a quebra de linha
let monthsOfYear = `0 - Jan
1 - Feb
2 - Mar
3 - Apr
4 - May
5 - Jun
6 - Jul
7 - Aug
8 - Sep
9 - Oct
10 - Nov
11 - Dec`;
console.log(monthsOfYear);




