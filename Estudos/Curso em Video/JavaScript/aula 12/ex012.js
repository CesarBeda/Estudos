var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();
console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos`);

if (hora > 0 && hora < 6){
    console.log('Boa Madrugada');
}
else if (hora >= 6 && hora < 12){
    console.log("Bom Diaaaa!!!!");
}
else if (hora >= 12 && hora < 18){
    console.log('Boa Tarrrrde');
}
else{
    console.log('Boa Noite');
}