// Curso de JavaScript - CFB Cursos aula 12 - Operadores de Spread (...)
 
// Exemplo 1 concatenado arrays

/* let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [n1, n2];

console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);
console.log("tipo de n3: " + typeof(n3)); */ //n3 é um array dentro de outro array
////////////////////////////////////////////////////////////////////////////////////////

// Exemplo 2A concatenado objetos

// const player1 = { nome: "Cesar", energia: 100, vidas: 3 };
// const player2 = { nome: "John", energia: 100, vidas: 5 };
// const player3 = { ...player1, ...player2 }; //pega as propriedades dos segundo pois são as mesmas

// console.log(player3);

// Exemplo 2B concatenado objetos e suas diferentes propriedades

// const player1 = { nome: "Cesar", energia: 100, vidas: 3, magia: 150 };
// const player2 = { nome: "Steve", energia: 100, vidas: 5, velocidade: 80 };
// const player3 = { ...player1, ...player2 }; //pega as propriedades comuns do segundo e incomuns de ambos

// console.log(player3);
////////////////////////////////////////////////////////////////////////////////////////

// Exemplo 3 espalhando array para parâmetros de função

// const soma = (v1, v2, v3) => {
//   return v1 + v2 + v3;
// };

// let valores = [6, 8, 4];

// console.log(soma(valores)); // não funciona pois soma espera 3 argumentos e valores é um array
// console.log(soma(...valores)); //espalhando os valores do array valores, o operador spread transforma o array em argumentos separados
////////////////////////////////////////////////////////////////////////////////////////

// Exemplo 4 - Spread em HTMLCollection

// HTMLCollection é uma coleção de elementos HTML, não é um array, mas pode ser transformado em um array com o operador spread

const objs1 = document.getElementsByTagName("div"); 
const objs2 = [...document.getElementsByTagName("div")]; //transforma o HTMLCollection em um array espalhando os elementos dentro do array objs2[]
console.log(objs1); //retorna um HTMLCollection, não é um array
console.log(objs2); //transforma o HTMLCollection em um array 

// objs1.forEach((element) => {
//   console.log(element); //retorna erro de tipagem, pois objs é um HTMLCollection, nã executa o forEach
// });

objs2.forEach((element) => {
    console.log(element); //retorna os elementos dentro do HTMLCollection, agora transformado em um array
    element.innerHTML = "curso"; //altera o conteúdo de cada elemento do array objs2[] para "curso"
});

