// String API

"Análise".length; 		// Retorna o tamanho da String
"PHP".indexOf("P");		// Retorna a primeira posição encontrada do caractere passado por parâmetro
"PHP".lastIndexOf("P");	// Retorna a última posição encontrada do caractere passado por parâmetro
"cobol".toUpperCase();	// Retorna uma nova String convertendo as letras para maiúsculas
"PYTHON".toLowerCase();	// Retorna uma nova String convertendo as letras para minúsculas


"Análise".charAt(1);		//Retorna o caractere na posição passada por parâmetro 	
"Análise".charCodeAt(1);	//Retorna o código com base na posição passada por parâmetro
String.fromCharCode(97);	//Retorna um caractere com base no código passado por parâmetro


"JavaScript".includes("Java");	// Retorna verdadeiro se a String contém a String passada por parâmetro 
"Python".startsWith("P");		// Retorna verdadeiro se a String inicia com a String passada por parâmetro 
"Eduardo".endsWith("ardo");		// Retorna verdadeiro se a String termina com a String passada por parâmetro


"C++".localeCompare("Ruby");				// Retorna -1 se a String passada por parâmetro for maior	
"Python".localeCompare("Java");				//1 se for menor
"JavaScript".localeCompare("JavaScript");	// 0 se for igual

"C++".match(/\+/g);		//Retorna partes da String com base na RegExp passada por parâmetro 
// no caso acima precisamos escapar o sinal de + com uma barra
// o /g procura mis de uma vez
"CSS3".match(/S/g);		// Tente tbm com snúsculo

"Java".search(/a/);		//Retorna a primeira posição encontrada com base na RegExp passada por parâmetro
"JavaScript".replace("Java", "Ecma");
"JavaScript".replace(/a/g, 4);	//Retorna uma nova String resultante da substituição da String ou RegExp passada no primeiro parâmetro pelo segundo parâmetro

//Retorna uma parte da String que está invocando a função iniciando na posição passada no primeiro parâmetro até a posição final passada no segundo parâmetro
//ou da posição passada no primeiro parâmetro até o fim caso o segundo parâmetro não seja informado 
"JavaScript".slice(0, 4);
"JavaScript".slice(4);
"JavaScript".slice(0, -6);	// de trás para frente
"JavaScript".slice(-6);

// Retorna um array contendo o resultado da divisão da String original de acordo com o critério passado por parâmetro 
"C;Java;JavaScript;Ruby".split(";");

//Similar ao slice, não aceita valores negativos como parâmetro e permite a inversão dos parâmetros
"JavaScript".substring(0, 4);
"JavaScript".substring(4, 0);
"JavaScript".substring(4);

//Retorna uma nova String resultante da concatenação da que está invocando
// a função e da outra, passada por parâmetro   

"Java".concat("Script");
"Data".concat("Flex");

"Script".padStart(10, "Java");	// Completa a String com caracteres no fim 
"C".padEnd(3, "+");				// Completa a String com caracteres no fim na quantidade do primeiro paramentro 
"C".concat("+".repeat(2));		// Repete um caractere 
" Self ".trim();				// Elimina espaços em branco no início e no fim 
" Scheme ".trimLeft();			// Elimina espaços em branco no início 
" Perl ".trimRight();			// Elimina espaços em branco no fim





