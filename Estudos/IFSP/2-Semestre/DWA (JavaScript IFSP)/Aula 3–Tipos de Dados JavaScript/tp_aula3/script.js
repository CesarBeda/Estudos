let n1 = Number(prompt('Digite um número'));
document.write(`1-i) ${n1.toFixed(2)}<br>`);
document.write(`1-ii) ${Math.round(n1)}<br>`);
document.write(`1-iii) ${Math.sqrt(n1)}<br>`);
document.write(`1-iv) ${(Math.random() * n1)}<br>`);
let banana = prompt('Digite uma palavra');
document.write(`2-i)${banana} tem ${banana.length} caracteres<br>`);
document.write(`2-ii)${banana.toUpperCase()}<br>`);
if (banana.toUpperCase().includes('JAVA')){
    document.write('2-iii) sim, inclui JAVA<br>');
} else {
    document.write('2-iii) não inclui JAVA<br>');
}
//2-iv
console.log(`${banana.slice(0, 1) + 'mamão' }`);
console.log(banana.slice(2));
document.write(`2-iv ${banana.slice(0, 1) + '<b>mamão</b>' }`.concat(banana.slice(2)));
//document.write(`${banana.padEnd(banana.length, "mamão")}`);
let quantidade = 9;
let precoUnitario = 8.99;
let produto = 'Leite';
let resultado = 'XXXXXXX';
resultado = `${quantidade} itens de ${produto} custam R$ ${precoUnitario * quantidade}.`;
console.log(resultado);