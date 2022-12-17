// Capturando elementos
let animeInput = document.getElementById('animeinput')

let personagemInput = document.getElementById('personageminput')

let imgInput = document.getElementById('imginput')

let btnCriar = document.getElementById('btncriar')

let divCards = document.getElementById('cards')

let animeAlert = document.getElementById('animealert')
let personagemAlert = document.getElementById('personagemalert')
let imgAlert = document.getElementById('imgalert')

btnCriar.addEventListener('click', (ev) => {
    ev.preventDefault()
    // Criando elementos a serem inseridos na div cards
    let novoCard = document.createElement('div')
    novoCard.setAttribute('class', 'card')
    let h2Anime = document.createElement('h2')
    let h3Personagem = document.createElement('h3')
    let imgPersonagem = document.createElement('img')
    imgPersonagem.setAttribute('class', 'imgcard')
    imgPersonagem.setAttribute('alt', 'Seu link de imagem é inválido!')
    imgPersonagem.style.color = '#fff'

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

// Validções
// input anime
let animeValido;
animeInput.addEventListener('keyup', () =>{
    if(animeInput.value.length < 4){
        animeAlert.innerText = 'Min: 4 caracteres'
        animeValido = false
    }else {
        animeValido = true
        animeAlert.innerText = ''
    }
})

//input personagem
let personagemValido;
personagemInput.addEventListener('keyup', () =>{
    if(personagemInput.value.length < 4){
        personagemAlert.innerText = 'Min: 4 caracteres'
        personagemValido = false
    }else {
        personagemValido = true
        personagemAlert.innerText = ''
    }
})

// input img
let imgValido;
imgInput.addEventListener('keyup', () =>{
    if(imgInput.value.length <= 0){
        imgAlert.innerText = 'Digite o link de uma imagem!'
        imgValido = false;
    } else {
        imgValido = true;
        imgAlert.innerText = ''
    }
})

document.addEventListener('keyup', () =>{
    if(animeValido == true && personagemValido == true && imgValido == true){
        btnCriar.removeAttribute('disabled')
        btnCriar.style.backgroundColor = '#fff'
    } else {
        btnCriar.setAttribute('disabled', true)
        btnCriar.style.backgroundColor = '#fff4'
    }
})





