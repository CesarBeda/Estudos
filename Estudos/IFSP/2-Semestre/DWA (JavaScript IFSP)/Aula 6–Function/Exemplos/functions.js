
function functionName(parameters) { 
	// function body // ... 
}

// CHAMANDO UMA FUNÇÃO
function showMessage() {
  alert( 'Hi Developers!' );
}
showMessage();
showMessage(); 
// podemos evocar uma função muitas vezes

// VARIAVEIS EXTERNAS
let userName = 'Eduardo';
function showMessage() {
  let message = 'Oi, ' + userName;
  alert(message);
}
showMessage();
// A função tem acesso total à variável externa. 
// Ele também pode modificá-lo.


// ALTERANDO OS VALORES VRIAVEL EXTERNA
let userName = 'Eduardo';
function showMessage() {
  userName = "Carlinhos"; // Alterando a variável externa

  let message = 'Oi, ' + userName;
  alert(message);
}
alert(userName); 	// Eduardo é mostrado
showMessage();		// Carlinhos é mostrado	
alert(userName); 	// Carlinhos é mostrado novamente

// RETORNANDO VALORES
function say(message) { 
	console.log(message); 
} 
let result = say('Olá');
console.log('Resultado:', result); // Apenas undefined

console.log(message); // mostra Olá mas continua sem definição
say('Olá');

// VALORES PADRÃO
function showMessage(from, text = "nenhum texto fornecido") {
  alert( from + ": " + text );
}
showMessage("Ana"); // Ana: nenhum texto fornecido
//  "nenhum texto fornecido" é uma string, mas pode ser uma expressão mais complexa
// que só é avaliada e atribuída se o parâmetro estiver ausente


// PARÂMETROS PADRÃO ALTERNATIVOS
function showMessage(text) {
  // ...
  if (text === undefined) { // se o parâmetro estiver faltando
    text = 'mensagem vazia';
  }
  alert(text);
}
showMessage(); // mensagem vazia


// PASSANDO PARÂMETROS COM RETURN
function sum(a, b) {
    return a + b;
}
// Sem passar os parametros
// JS retorna o tipo [Function]
sum;

// passando parametros
sum(2, 2);

// VALORES PADRÃO NA PASSAGEM DE PARAMETRO
function sum(a = 1, b = 1) {
    return a + b;
}
sum(2, 2);
sum(5);
sum();



// FUNCTION DECLARATION
sum(2, 2);	// inverter a chamada funciona?
function sum(a, b) {
    return a + b;
}

// FUNCTION EXPRESSION
sum(3, 3); // NÃO funciona!
const sum = function(x, y) {
    return x + y;
}

// FUNÇÃO QUE CHAMA FUNÇÃO
let soma = function(a, b) {
    return a + b;
}; 
let subtrai = function(a, b) {
    return a - b;
};
let calculator = function(fn) {
    return function(a, b) { // essa função retorna outra função
        return fn(a, b);
    }
}; // atente pelos pontos e virgulas
console.log(calculator(soma)(2, 2));
console.log(calculator(subtrai)(2, 2));

// ARGUMENTS
const sum = function() {
		console.log(arguments);
}
sum(1,2,3,4,5,6,7,8,9);
// arguments não tem as propriedades do array


let sum = function() {
    let total = 0;
    for(let argument in arguments) {
        total += arguments[argument]; // aqui percorro os argumentos
    }
    return total;
};
sum(1,2,3,4,5,6,7,8,9);
// mude argument para banana


// REST PARAMETER
let sum = function(...meusnumeros) {
    let total = 0;
    for(let numeros of meusnumeros) { //A diferença está no OFF (Array)
        total += numeros; // Aqui já somo os itens do array
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));


// REST sempre como último da lista
let sum = function(a, b, c, ...numbers) {
    let total = a + b + c;
	//console.log(numbers);		// veja as posições do rest
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));
//inverta para gerar o erro


