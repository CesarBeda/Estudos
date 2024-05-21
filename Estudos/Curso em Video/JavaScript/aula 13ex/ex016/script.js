function verificar(){
    let txtnum = document.getElementById("txtnum");
    let num = Number(txtnum.value);
    let txtfim = Number(document.getElementById('txtfim').value);
   // let nfim = Number(txtfim.value);
    let passo = Number(document.querySelector('input.txtpasso').value);
    let removeload = document.querySelector('#remover-loading');
    removeload.remove();
    while (num<=txtfim){
        let rtxt = document.createElement('spam');
        rtxt.setAttribute('id', `rtxt`+ String(num));
        rtxt.innerHTML = `${num} 👉 `;
        res.appendChild(rtxt);
        //console.log('num = '+num);
        num += passo;
    }
    num -= passo
    //console.log('saiu do for num =' + num);
    if (num+passo >= txtfim){
         //console.log(`entrou no if rtxt${String(num)}`);
        let rfimtxt = document.getElementById(`rtxt${String(num)}`);
        rfimtxt.innerHTML = `${num} 🚩`;
    }
}