'use strict'

const botaoBuscarDog = document.getElementById('buscar-dog')


/* GET do para raças de cachorros */
async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response  = await fetch(url)
    const imagens   =  await response.json()

    if (imagens.status === 'error') {
        return false
    }

    const itens     = imagens.message
    let i = 0 
    let container = document.getElementById('receber-dog')
    
    container.replaceChildren()

    while(i < itens.length){
        let imagem = document.createElement('img')
        container.appendChild(imagem)
        let imagemcachorro = itens[i]
        imagem.src = imagemcachorro
        i++
    }
    return imagens.message
}

function carregarImagens() {
    const raca = document.getElementById('cachorros').value.toLowerCase()

    buscarImagens(raca)
}



botaoBuscarDog.addEventListener('click', carregarImagens)