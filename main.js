const controle = document.querySelectorAll('.controle-ajuste')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})


function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const roboColor = [{
    id: 0,
    color: 'img/Robotron-Amarelo.png'
}, {
    id: 1,
    color: 'img/Robotron-Preto.png'
}, {
    id: 2,
    color: 'img/Robotron-Rosa.png'
}, {
    id: 3,
    color: 'img/Robotron-Vermelho.png'
}, {
    id: 4,
    color: 'img/Robotron- Branco.png'
}, {
    id: 5,
    color: 'img/robotron.png'
},]

let indexRoboImage = 0

function trocaImagem() {
    const robo = document.querySelector('.robo');
    
    if (indexRoboImage == 6) {
        indexRoboImage = 0
    }
    robo.src = roboColor[indexRoboImage].color
    indexRoboImage++

}




