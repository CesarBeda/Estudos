// CONTROLE FLUXO

/* ======================================================================= */
// WHILE

while (expression) {
    // statement
}

// while é conhecido como loop de pré-teste
// é possível que seja executado
let i = 0;
while (i < 3) { // mostra 0, 1 e 2
  alert( i );
  i++;
}

// Cuidado! veja o alert e o console.log
// No console é mostrado o valor da variavel ao final
let count = 1;
while (count < 10) {
    alert('contador é: ' + count);
    count +=2;
}

// EVITE LAÇOS INFINITOS
// EXECUTE ESSE CÓDIGO POR RISCO 
// E CONTA PRÓPRIA!!!!
while (true) {
  console.log("Olá, mundo");
}

// DECREMENTANDO NO WHILE
// Lembrado que o console.log mostra
// o valor final da variavel
var i = 100;
while (i > 0) {	
    console.log(i);
    i--; 
	/* equivalente a i=i-1 */
}


//LABEL
var x = 0;
var z = 0

labelCancelaLaco: 
while (true) {
  console.log("Laço exterior: ------- " + x);
  x += 1;
  z = 1;
  
  while (true) {
    console.log("Laço interior: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelaLaco;
    } else if (z === 10) {
      break;
    }
  }
}

/* ======================================================================= */
// DO..WHILE

do {
  statement(s);
} while(expression);




// aqui é mostrado o número 11
// pois o teste é feito depois
let count2 = 1;
do {
    count2+=2;
    alert('contador é: ' + count2);
} while (count2 < 10);




// No exemplo abaixo o do..while é executado 
// até que o número secreto seja advinhado

// gera número secreto aleatório entre 1 e 12
const MIN = 1;
const MAX = 12;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0; // armazena o número de palpites
let hint = ''; // para armazenar dica
let number = 0;
do {
    // obtem a entrada do usuário
    let input = prompt(`Por favor insira um número entre ${MIN} e ${MAX}` + hint);
    // pegue o inteiro
    number = parseInt(input);
    // aumentar o número de palpites
    guesses++;
    // verifique o número de entrada com o número secreto
    // dê uma dica se necessário
    if (number > secretNumber) {
        hint = ', e menor que ' + number;
    } else if (number < secretNumber) {
        hint = ', e maior que ' + number;
    } else if(number == secretNumber) {
        alert(`Bravo! você está correto depois ${guesses} palpite(s).`);
    }
} while (number != secretNumber);


/* ======================================================================= */
// CONTINUE

do{
    if (condition) {
        continue; // pula para expression
    }
    // mais instruções aqui
    // ...
} while(expression); // continue pula para cá


// CONTINUE
let s = 'Esta é uma demonstração de declaração de continue em JavaScript';
let counter = 0;
i=0;
do{
    i++;
	if (s.charAt(i) != 's') {
        continue; // pula para expression
    }
    counter++;
} while (i < s.length); // continue pula para cá

console.log('O número de S encontrados na string é ' + counter);


/* ======================================================================= */
// for..of

for (variavel of objeto) {
  declaracoes
}

const numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 1, 2, 3, 4, 5



// for..in

for (variavel in objeto) {
  declaracoes
}

const numeros = [1,2,3,4,5];
for(let numero in numeros) {
  console.log(numero);
}
// resultado: 0, 1, 2, 3, 4


// VEJA A DIFERENÇA
// vamos iterar o objeto Casa que possui 3 propriedades:
// área, altura, andares

const Casa = {
  area: 1000,
  altura: 7,
  andares: 2
}

for(let prop in Casa) {
  console.log(prop);
}
// area
// altura
// andares


// MUDANDO DE IN PARA OF
// PARA MOSTRAR OS VALORES
const Casa = {
  area: 1000,
  altura: 7,
  andares: 2,
  [Symbol.iterator]: function* (){ //for…of procura pela propriedade [Symbol.iterator] do objeto
	yield this.area;
	yield this.altura;
	yield this.andares;
  }
}

for(let prop of Casa) {
  console.log(prop);
}
// 1000, 7, 2


