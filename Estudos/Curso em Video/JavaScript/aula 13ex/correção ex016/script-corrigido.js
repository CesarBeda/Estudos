function verificar(){
    let txtnum = document.getElementById("txtnum");
    let txtfim = document.getElementById('txtfim');
    let txtpasso = document.querySelector('input.txtpasso');
    if (txtnum.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        //alert('Faltam dados.')
        res.innerHTML = 'Faltam dados.';
    } else {
        res.innerHTML = 'Contando:<br>';
        let i = Number(txtnum.value);
        let f = Number(txtfim.value);
        let p =  Number(txtpasso.value);
        if (p<=0){
            alert('Passo inválido! Considerando Passo = 1');
            p = 1;
        }
        if (i<f){ //contagem crescente
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
         else{ // contagem regressiva
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        console.log(res);

        res.innerHTML += `\u{1F3C1}`;
    }
}
   