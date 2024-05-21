function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minutos = data.getMinutes();
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'imagesfotomanha.jpg';
    document.body.style.background = "#f1f15d";
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'images/fototarde.jpg';
    img.alt = "foto de tarde";
    document.body.style.background = "#f99b5c"
} else {
    //boa noite
    img.src = 'images/fotonoite.jpg';
    img.alt = "foto de noite";
    document.body.style.background = "#510a69d8";
}
}