function mascara(){
    let txtnum = document.getElementById('txtnum');
    txtnum.type = 'text'
    txtnum.setAttribute('value', `Digite um número`);
    txtnum.style.color = '#989ba3'
    txtnum.style.fontStyle = 'italic';
}
function limpartxtnum(){
    txtnum.style.color = ''
    txtnum.style.fontStyle = ''
    txtnum.value = ''
    txtnum.setAttribute('type', 'number');
}
function gerarTabuada(){
    if(txtnum.value == 'Digite um número' || txtnum.value.length == 0 ){
        alert('[ERRO] Digite um número');
    }else{
        let num = txtnum.value;
        tab.innerHTML = '';
        for (c=1; c<=10; c++){
            let tab_opt = document.createElement('option');
            tab_opt.text = `${num} x ${c} = ${num*c}`;
            tab.appendChild(tab_opt);
            //res.innerHTML = `Tabuada do ${num}`;
            //tab.innerHTML += `<option class"tabopt" value="valor${c}"> ${num} x ${c} = ${num*c} </option>`;
        }
    }  
}