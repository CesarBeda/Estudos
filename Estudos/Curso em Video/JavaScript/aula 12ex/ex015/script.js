function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (formAno.value.length == 0 || Number(formAno.value > ano)){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var formSex = document.getElementsByName('rbsex');
        var idade = ano - Number(formAno.value);
        var genero = ``;
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (formSex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'images/menino.jpg');
            } else if(idade <= 24){
                //jovem
                img.setAttribute('src', 'images/homem-jovem.jpg');
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'images/homem-adulto.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'images/homem-idoso.jpg');
            }
        } else if (formSex[1].checked){
            genero = 'Mulher';
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'images/menina.jpg');
            } else if(idade <= 24){
                //jovem
                img.setAttribute('src', 'images/mulher-jovem.jpg')
            } else if (idade < 60){
                //adulta
                img.setAttribute('src', 'images/mulher-adulta.jpg');
            } else {
                //idosa
                img.setAttribute('src', 'images/mulher-idosa.jpg');
            }
        }
        res.innerHTML = `${genero} com ${idade} anos`;
        res.appendChild(img);
    }

    }