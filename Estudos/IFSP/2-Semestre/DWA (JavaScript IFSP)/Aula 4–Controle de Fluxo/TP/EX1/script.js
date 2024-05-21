const cont= 10;
let maior = 0;

for (c=1;  c <= cont;){
    let num = prompt(`Digite o ${c}º número de apenas um dígito`);

    if(num.length > 1 || num.length == 0){
       alert('Número inválido digite um novo número');
    }else{
        Number(num) > maior? maior = Number(num) : 'faz nada';
        document.write(`${c}º número digitado = ${num}<br>`);
        c++;
    }
}
alert(`Maior Número: ${maior}`);