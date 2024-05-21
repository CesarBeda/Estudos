
var first;  //  first  string  entered  by  user
var second;  //  second  string  entered  by  user
var number1;  //  first  integer
var number2;  //  second  integer

 //  read  first  number  from  user  as  a  string
first = window.prompt("Digite o primeiro numero inteiro:");
number1 = parseInt(first);

//  read  second  number  from  user  as  a  string
second = window.prompt("Digite o segundo numero inteiro:");
number2 = parseInt(second);

if (number1 > number2)
 window.alert(number1 + " é Maior");

if (number1 < number2)
 window.alert(number2 + " é Maior");

if (number1 == number2)
document.write("Os números são iguais"); 
