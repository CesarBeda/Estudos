//diferença de == e ===

let n1=1;
let n2='1';

console.log(n1 == n2) //considera apenas o valor
console.log(n1 === n2) //considera o tipo

let v1={nome:'Cesar'};
let v2={nome:'Cesar'};

console.log(v1==v2); 
console.log(v1===v2);
//em objetos se considera o endereço de memória que é diferente

let v3={nome:'Cesar'};
let v4=v3; //aponta para o endereço de memória

console.log(v3==v4); 
console.log(v3===v4);

// let nome= prompt('digite seu nome: ') //só é possível receber valores pela interface gráfica html
//não funciona no terminal, apenas no navegador

// != comparação !(==) não igual
// != diferente
// ! not nega o valor, inverte

let c1 =1;
let c2 =2;

console.log(c1!=c2);
console.log(!(c1!=c2));
console.log(!(c1==c2));

