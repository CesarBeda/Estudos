// Expressões Regulares - São padrões
// Utilizado para validar campos (senhas etc)
// Extrair caracteres de dentro de uma String
// Substituição de caracateres em lotes

// Entre barras é expressão regular - é object
// mais usual  - aconselhado
/ehgomes@ifsp.edu.br/;

// Podemos também fazer com new RegExp
new RegExp("ehgomes@ifsp.edu.br");


// Vamos testar se o padrão é o mesmo
let regExp = /ehgomes@ifsp.edu.br/;
let result = regExp.test("ehgomes@ifsp.edu.br"); // Se não encontrar?
console.log(result);

// exec - boleano - retorna um array
let regExp = /ehgomes@ifsp.edu.br/;
let result = regExp.exec("ehgomes@ifsp.edu.br");
console.log(result);

// exec - Mostra mais detalhes
// Vamos mostrar o resultado, o indice e a entrada
let regExp = /ehgomes@ifsp.edu.br/;
let result = regExp.exec("ehgomes@ifsp.edu.br");
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// com mais de uma entrada
let regExp = /ehgomes@ifsp.edu.br/;
let result = regExp.exec("E-mail: ehgomes@ifsp.edu.br, E-mail secundário: ehgomes@ifsp.edu.br");
console.log(result[0]);
console.log(result.index);
console.log(result.input);


// Metacaracteres
// Ponto representa qualquer tipo de caracter
// NESTE CASO ELE ENCONTRA!!!!
let regExp = /ehgomes@ifsp.edu.br/;
let result1 = regExp.exec("ehgomes@ifspXeduXbr");
console.log(result1);

// Vamos escapar esses caracteres
let regExp = /ehgomes@ifsp\.edu\.br/;
let result1 = regExp.exec("ehgomes@ifsp.edu.br");
console.log(result1);

// não encontra mais 
let result2 = regExp.exec("ehgomes@ifspXeduXbr");
console.log(result2);

// ^  	Inicialização 
// $ 	Finalização 
let regExp = /^ehgomes@ifsp\.edu\.br$/;
let result1 = regExp.exec("Email: ehgomes@ifsp.edu.br");
console.log(result1);

let result2 = regExp.exec("ehgomes@ifsp.edu.br");
console.log(result2);

let result3 = regExp.test("ehgomes@ifsp.edu.br"); // com test
console.log(result3);


// Grupos de caracteres
// + Um ou mais
//{n} Quantifica um número específico  
let regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result = regExp.exec("gomeseh@hotmail.com");
console.log(result);

// dominio com 2 caracteres
let regExp = /^[a-z]+@[a-z]+\.[a-z]{3}$/;
let result = regExp.exec("gomeseh@hotmail.br");
console.log(result);


// Metacacteres  
let regExp = /^\w+@\w+(\.\w{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result);


// Grupos de captura - Extração de valores
// Vamos extrair nome de usuário + dominio
let regExp = /([a-z]+)@([\.a-z]+)/;
let result = regExp.exec("mary@hotmail.com");
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result.index);
console.log(result.input); 


// Metacaracteres
let regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/;
let result = regExp.exec("mary@hotmail.com.br");
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);


// Modificadores
let regExp = /[a-z]+@[\.a-z]+/g;

let result = regExp.exec("mary@hotmail.com;gomeseh@hotmail.com");
console.log(result[0]);
console.log(result.index);

let result2 = regExp.exec("mary@hotmail.com;gomeseh@hotmail.com");
console.log(result2[0]);
console.log(result2.index);

 
// i  - case sensitive
let regExp = /[a-z]+@[\.a-z]+/g;  //i

let result = regExp.exec("Mary@hotmail.com;gomeseh@hotmail.com");
console.log(result[0]);
console.log(result.index);