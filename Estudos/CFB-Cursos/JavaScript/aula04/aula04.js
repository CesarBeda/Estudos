// let num; //declarada sem valor
// let num1 = 10; declara e com valor iniciado
// let num1, num2 = 10; //primeira sem valor definido
// let num1, num2, num3; //declaradas sem valor

let num1=0, num2=0,res=0;

num1 = 5;
num2 = 10;
res = (num1+num2)*2; // (entre parentese tem precedência)
console.log(res);

//divisão e resto
res = (num1+num2)/2; //divisão comum
console.log(res);
res = (num1+num2)%2; //operador mod retorna resto da divisão
console.log(res);

//incremento
num1=1;
num1++; //num1 = 2
num1++; //num1 = 3
num1++; //num1 = 4
num1++; //num1 = 5
console.log(num1);

//decremento
num2=5;
num2--; //num2 = 4
num2--; //num2 = 3
num2--; //num2 = 2
num2--; //num1 = 1
console.log(num2);

//operador seguido de igual
console.log('\n');
num1 = 5;
console.log(num1 += 5); //num1 = num1 + 5
num1 = 5;
console.log(num1 -= 5); //num1 = num1 - 5
num1 = 5;
console.log(num1 *= 5); //num1 = num1 * 5
num1 = 5;
console.log(num1 /= 5); //num1 = num1 / 5
num1 = 5;
console.log(num1 %= 4); //num1 = num1 % 4
