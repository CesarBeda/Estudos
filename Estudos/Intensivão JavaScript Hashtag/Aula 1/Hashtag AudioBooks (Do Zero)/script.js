const btnPlay = document.getElementById('play-pause');
const btnPular = document.getElementById('btn-pular');
const btnVoltar = document.getElementById('btn-voltar');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');
const numCaptulo = 10;
let tocando = false;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    btnPlay.classList.remove('bi-play-circle-fill');
    btnPlay.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioCapitulo.pause();
    btnPlay.classList.remove('bi-pause-circle-fill');
    btnPlay.classList.add('bi-play-circle-fill');
}
function playPause(){
    if (tocando === false){
        tocarFaixa();
        tocando = true;
    } else{
        pausarFaixa();
        tocando = false;
    }
}
function pularFaixa(){
    if (capituloAtual === numCaptulo){
        capituloAtual = 1;
    } else{    
        capituloAtual += 1;
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    tocando = true;
    trocarNomeFaixa()
}
function voltarFaixa(){
    if (capituloAtual === 1){
        capituloAtual = numCaptulo;
    } else{    
        capituloAtual -= 1;
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    tocando = true;
    trocarNomeFaixa()
}
function trocarNomeFaixa(){
    nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
}
btnPlay.addEventListener('click', playPause); //btnPlay.onclick(tocarFaixa())
btnPular.addEventListener('click', pularFaixa);
btnVoltar.addEventListener('click', voltarFaixa);

