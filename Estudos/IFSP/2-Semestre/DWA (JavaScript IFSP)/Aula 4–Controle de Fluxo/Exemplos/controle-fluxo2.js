// CONTROLE FLUXO

/* ======================================================================= */
// FOR

for (begin; condition; step) {
  // ... loop body ...
}


//VEJA AS DIFERENÇAS ENTRE VAR E LET
for (var counter = 1; counter < 5; counter++) {
    console.log('Dentro do loop:' + counter);
}
console.log('Fora do loop:' + counter);

//Acessar a countervariável após o loop causou a ReferenceError 
for (let counter = 1; counter < 5; counter++) {
    console.log('Dentro do loop:' + counter);
}
console.log('Fora do loop:' + counter);

//loop sem inicialização - é opcional.
var j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

//loop sem condição - é opcional.
//Se omitido, precisará um break para encerrar o loop
for (let j = 1;; j += 2) {
    console.log(j);
    if (j > 10) {
        break;
    }
}

//loop sem nenhuma expressão - é opcional.
//Se omitido, precisará um break para encerrar o loop
//também modificar a variável do contador 
let j = 1;
for (;;) {
    // terminate the loop if j is greater than 10;
    if (j > 10) break;
    console.log(j);
    // increase the counter j
    j += 2;
}

//loop sem o corpo do loop
//você coloca um ponto-e-vírgula ( ;) imediatamente após a instrução for
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);
