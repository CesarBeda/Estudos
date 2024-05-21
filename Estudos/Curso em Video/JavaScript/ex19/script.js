let valor = []; //vetor

function registrar(){
    //remover_res();
    let txtnum = document.querySelector('input#txtnum');
    let num = Number(txtnum.value); 
    let i = Number(tab.length); //tamanho do vetor /i-1 igual ultima posição do vetor
    if(num<1 || num>100){
        alert('Número inválido ou não informado');
    }else {   //Número já existe.
    if(valor.indexOf(Number(txtnum.value)) >= 0 && valor.indexOf(Number(txtnum.value)) < i){   //Número já existe.
        alert('Esse número já foi registrado');
        }else{
            let tabopt = document.createElement('option'); // se não exise regitrar
            tabopt.text = `valor ${num} foi adicionado`; //aumenta uma posição na tabela tab.length
            tab.appendChild(tabopt);
            remover_res_novo_num(); //remover spam #res caso novo número seja adicionado
            while (i < Number(tab.length)){       //iserir no vetor número registrado
                valor.push(Number(txtnum.value));
                i++; //aumenta 1 tamanho vetor = tamanho tabela
            }
        }
    }
}

function analisar(){
    if(Number(tab.length) == 0){
        alert('Adicione valores antes de finalizar');
    }else{
        remover_res();
        let res = document.createElement('spam');
        res.setAttribute('id', 'res');
        //res.text = `Ao todo temos ${tab.length} números cadastrados.`; //não funcionou .text usei innerHTML
        res.innerHTML = `Ao todo temos ${Number(tab.length)} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maiorvalor(valor)}.<br>`;
        res.innerHTML += `O menor valor informado foi ${menorvalor(valor)}.<br>`;
        res.innerHTML += `Somando todos os valores temos ${soma(valor)}.<br>`;
        res.innerHTML += `A média dos valores informados é ${soma(valor) /Number(tab.length)}.<br>`;
        reg.appendChild(res);
    }
}

function remover_res_novo_num(){
    res = document.getElementById('res');
    if(res == null){  
        //faz nada espera spam #res ser criado
    } else{
        res.remove(); //remover spam #res para novo
        return alert('Novo número adicionado os resultados serão apagados');
    }
}

function remover_res(){
    res = document.getElementById('res');
    if(res == null){  
        //faz nada espera spam #res ser criado
    } else{
        res.remove(); //remover spam #res para novo
        return alert('Resultados já analisados');
    }
}

function maiorvalor(vlr){
    vlr.sort((a, b) => a - b); // => arrow function para ordenação crescente   
    let lastpos = Number(tab.length-1);
    let maiorvlr = vlr[lastpos];
    return maiorvlr;
}
function menorvalor(vlr){
    vlr.sort((a, b) => a - b); // => arrow function para ordenação crescente   
    let menorvlr = vlr[0];
    return menorvlr;
}

function soma(vlr){
    let soma = 0;     //soma todos os valores do vetor
    for (let c=0; c<Number(tab.length); c++){
        soma += vlr[c];
    }
    return soma;
}

function reset(){
    let txtnum = document.querySelector('input#txtnum'); //limpar campos
    let res = document.getElementById('res');
    valor = [];
    tab.length = 0;
    txtnum.value = '';
    if(res == null){  
        //faz nada pq não tem spam para apagar
    } else{
        res.remove(); //remove spam #res para novo
    }
}