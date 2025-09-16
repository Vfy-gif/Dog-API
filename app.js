'use strict'

const botaoBuscarDog = document.getElementById('buscar-dog')
const inputCachorros = document.getElementById('cachorros')

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
        let selectImg = document.createElement('a')
        let imagem = document.createElement('img')
        selectImg.appendChild(imagem)
        container.appendChild(selectImg)
        
        let imagemcachorro = itens[i]
        imagem.src = imagemcachorro
        selectImg.href = imagemcachorro
        selectImg.target = '_blank'
        i++
    }
    return imagens.message
}

function carregarImagens() {
    const raca = document.getElementById('cachorros').value.toLowerCase()

    buscarImagens(raca)
}

botaoBuscarDog.addEventListener('click', carregarImagens)
inputCachorros.addEventListener('keydown',  function(event) {
    if (event.key === 'Enter') {
        carregarImagens()
    }
});