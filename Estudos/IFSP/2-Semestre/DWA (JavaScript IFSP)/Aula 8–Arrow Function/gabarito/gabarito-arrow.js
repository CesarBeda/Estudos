// 1 - destructuring
const person = {
  nome: 'Kayo Amado',
  idade: 30,
  local: 'São Vicente, Brasil',
};

let { nome, idade, local } = person;
console.log('Eu sou ' + nome + ', idade: ' + idade + ' e sou o prefeito de ' + local + '.');



// 2 - arrow function + rest parameter
let sum = function(a, b, c, ...numbers) {
    let total = a + b + c;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));

// =>
let sum = (a, b, c, ...numbers) => {
    let total = a + b + c;
    for(let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(1,2,3,4,5,6,7,8,9));




// 3  - arrow function + map e lenght
const dominios = [
  'Facebook',
  'Instagram',
  'Hotmail',
  'YouTube'
];

console.log(dominios.map(dominios => dominios.length));
// expected output: Array [8, 6, 7, 9]
