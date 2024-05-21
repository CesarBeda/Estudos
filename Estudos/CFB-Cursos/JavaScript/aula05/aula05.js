/* 
    Operadores relacionais:
    < menor
    > maior 
    <= maior ou igual
    >= menor ou igual
    == igual
    === idêntico
    ! negação
    != diferente
*/

let num1 = 10;
let num2 = 5;
let num3 = 10;

console.log(num1 < num2); //false
console.log(num1 < num3); //false
console.log('\n');

console.log(num1 > num2); //true
console.log(num1 > num3); //false
console.log('\n');

console.log(num1 <= num2); //false
console.log(num1 <= num3); //true
console.log('\n');

console.log(num1 >= num2); //true
console.log(num1 >= num3); //true
console.log('\n');

num1 = '10';
num2 = 10;

console.log(num1 == num2); //true
console.log(num1 === num2); //false
console.log('\n');

console.log(!(num1 > num2)); //true