// Capturando elementos
let animeInput = document.getElementById('animeinput')

let personagemInput = document.getElementById('personageminput')

let imgInput = document.getElementById('imginput')

let btnCriar = document.getElementById('btncriar')

let divCards = document.getElementById('cards')

btnCriar.addEventListener('click', (ev) => {
    ev.preventDefault()
    // Criando elementos a serem inseridos na div cards
    let novoCard = document.createElement('div')
    novoCard.setAttribute('class', 'card')
    let h2Anime = document.createElement('h2')
    let h3Personagem = document.createElement('h3')
    let imgPersonagem = document.createElement('img')
    imgPersonagem.setAttribute('class', 'imgcard')

    //  Adicionando valores aos elementos
    h2Anime.innerText = animeInput.value 
    h3Personagem.innerText = personagemInput.value
    imgPersonagem.setAttribute('src', imgInput.value)

    // Adicionando elementos ao novo card
    novoCard.appendChild(h2Anime)
    novoCard.appendChild(h3Personagem)
    novoCard.appendChild(imgPersonagem)

    // Adicionando o novo card a div cards
    divCards.appendChild(novoCard)
})

