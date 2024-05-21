let num
let cont = 5;

for (c=1;  c <= cont;){
    let num = prompt(`Digite o ${c}º número entre 1 e 30`);
    if(Number(num)<=0 || Number(num)>30){
       alert('Número inválido digite outro novo número');
    }else{
        for(let n=1; n<=Number(num); n++ ){ //n = adicionar caracteres
            res.innerText += '*';
        }
    res.innerHTML += '<br>';
    c++;
    }
}