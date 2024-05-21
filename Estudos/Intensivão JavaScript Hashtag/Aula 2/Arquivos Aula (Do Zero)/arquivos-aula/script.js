const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
};
const meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
};
const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};
const rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1; //valor(numero do id) da imagem inicial está sendo exibida
let tamanhoSelecionado = 1; //valor(numero do id) do tamanho selecionado exibido inicialmente
let corSelecionada = 1; //valor(numero do id) da cor selecionada exibida inicialmente

function trocarImagem(){
    const idOpcaoSelcionada = document.querySelector('[name="opcao-imagem"]:checked').id; //pegando o id do radiobutton (de selecao de imagem) selecionado
    imagemSelecionada = idOpcaoSelcionada.charAt(0); //primeiro caracter do id
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`; //trocando imagem da página
}

function trocarTamanho(){
    //atualizar variavel de controle de tamanho
    const idOpcaoSelcionada = document.querySelector('[name="opcao-tamanho"]:checked').id; //pegando o id do radiobuton (de selecao de tamanho) selecionado
    tamanhoSelecionado = idOpcaoSelcionada.charAt(0); //primeiro caracter do id
    //mudar titulo do produto
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    //mudar tamanho da imagem de acordo com a opção
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor(){
    //atualizar cor selecionada
    const idOpcaoSelcionada = document.querySelector('[name="opcao-cor"]:checked').id //pegando o id do radiobutton (de selecao de cor) selecionado
    corSelecionada = idOpcaoSelcionada.charAt(0); //primeiro caracter do id
    //trocar titulo do produto
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    //trocar nome da cor
    nomeCor.innerText = opcoesCores[corSelecionada].nome;
    //trocar imagens miniaturas
    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
    //trocar imagens selecionadas
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}