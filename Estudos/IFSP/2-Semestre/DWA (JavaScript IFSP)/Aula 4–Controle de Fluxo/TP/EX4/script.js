let c = 1 // quant de caracteres

for(c; c<=7;){
    for(let n=1; n<=c; n++ ){ //n = adicionar caracteres
        res.innerText += '*';
    }
    res.innerHTML += '<br>'; 
    c+=2;
}
for(c; c>0;){
 for(let n=1; n<=c; n++ ){ //n = adicionar caracteres
        res.innerText += '*';
    }
    res.innerHTML += '<br>'; 
    c-=2
}