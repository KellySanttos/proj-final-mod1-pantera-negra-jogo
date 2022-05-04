function escolherPersonagens() {
    location.assign("../personagens")
}

function selecionarPersonagem(personagem) {
    location.assign(`../pages${personagem}/fase0.html`)
}