let listaDeRespostas = [
    ["2", "3", "1"], //t'challa
    ["3", "1", "1"], //shuni
    ["2", "1", "3"] //erick_killmonger
]
let listaDeAlertasPositivos = [
    [
        "Resposta correta. Eterno Chadwick Boseman.",
        "T'Challa ficou bastante decepcionado ao descobrir a verdade.",
        "Parabéns, você ajudou o rei T'Challa a retomar o trono."
    ], //t'challa
    [
        "Você acertou",
        "Uhuuull. Está no caminho certo!",
        "Parabéns. Shuni é a rainha da tecnologia."
    ], //shuni
    [
        "Resposta correta.",
        "Isso! A vingança está próxima.",
        "Parabéns. Você conseguiu se tornar o rei de Wakanda."
    ] //erick_killmonger
]

function indicePersonagem(personagem) {
    if (personagem === "tchalla") {
        return 0
    }
    if (personagem === "shuni") {
        return 1
    }
    if (personagem === "erick_killmonger") {
        return 2
    }
}

function responder(fase, personagem) {
    let resposta = prompt("digite a resposta correta")

    // valida se a resposta for 1, 2 ou 3
    while (resposta !== '1' && resposta !== '2' && resposta !== '3') {
        alert("resposta invalida, por favor, escolha um numero de 1 à 3")
        resposta = prompt("digite a resposta certa")
    }

    if (resposta == listaDeRespostas[indicePersonagem(personagem)][fase]) {
        alert(listaDeAlertasPositivos[indicePersonagem(personagem)][fase])
        if (fase == 2) {
            location.assign("../win.html")
        } else {
            location.assign(`./fase${fase + 1}.html`)
        }
    } else {
        alert("Poxa, você errou. Tente mais uma vez.")
        resposta = prompt("Digite a resposta certa.")
        if (resposta == listaDeRespostas[indicePersonagem(personagem)][fase]) {
            alert(listaDeAlertasPositivos[indicePersonagem(personagem)][fase])
            if (fase == 2) {
                location.assign("../win.html")
            } else {
                location.assign(`../fase${fase + 1}.html`)
            }
        } else {
            alert("Poxa, você errou novamente. Acabaram suas chances.")
            location.assign("../game_over.html")
        }
    }
}