
// A primeira forma é através dos colchetes
const languages = [];
console.log(languages);

// É considerado um objeto
console.log(typeof languages);

// Vamos criar e inicializar o array
const languages = ["Python", "Javascript", "R"];
console.log(languages);

// Podemos criar pela função construtora 
const languages = new Array ();
console.log(languages);

// Vamos criar e inicializar pela função construtora 
const languages = new Array ("Python", "Javascript", "R");
console.log(languages);
// atente a mudança de colchetes para parenteses 

// Cuidado ao passa Numbers para o Array
const numeros = new Array (1, 2, 3);
console.log(numeros);
// Com vários numeros tudo certo

// Veja o detalhe
const numeros = new Array (10);
console.log(numeros);
// é criado um array com 10 posicções vazias.

// Vamos criar o array sem inicializar o mesmo
const timeUnits = [];
// Vamos inicializar por seus indíces
		timeUnits[0] = "minute";
		timeUnits[1] = "hour";
		timeUnits[2] = "day";
console.log(timeUnits);

// Lenght - Mostra a quantidade de elementos 
const timeUnits = [];
	timeUnits[0] = "minute";
	timeUnits[1] = "hour";
	timeUnits[2] = "day";
console.log(timeUnits.length);

// Cuidado! Os elementos vazios dentro 
// do Array não são considerado no length
// o delete não é indicado
const timeUnits = [];
	timeUnits[0] = "minute";
	timeUnits[1] = "hour";
	timeUnits[2] = "day";
	console.log(timeUnits);
	console.log(timeUnits.length);
	delete timeUnits[1]; 
	console.log(timeUnits);
	console.log(timeUnits.length);

// Questão para Certificação JS
// indices com elementos espaçados
const languages = []; 
languages[0] = "Python"; 
languages[10] = "Javascript"; 
languages[20] = "R"; 

console.log(languages); 
console.log(languages.length);
// Existem 3 elementos dentro mas em um For
// não funcionaria
