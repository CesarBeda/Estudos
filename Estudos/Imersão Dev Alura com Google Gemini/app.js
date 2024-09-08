
function pesquisar(){
    let section = document.querySelector('.resultados-pesquisa');
    let resultados = '';
    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    for (let dado of dados){
        //sai da função caso campo esteja vazio
        if (campoPesquisa === ''){
            section.innerHTML = '<span>Campo de Busca vazio.</span>'
            return
        }

        //verifica se pesquisa possui resultados
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())){
            //cria um elemento com o resultado da pesquisa
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações.</a>
            </div>`;
        }
        //Caso não possua resultados
        if(!resultados){
            resultados = '<span>Atleta não encontrado.</span>';
        }
        
    }
    //exibe resultados
    section.innerHTML = resultados;
}
