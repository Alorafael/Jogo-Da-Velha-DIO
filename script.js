var jogador = null;
var vencedor = null;
var jogadorAtual = document.getElementById('jogador-atual');
var vencedorPartida = document.getElementById('vencedor-partida');

trocarJogador('X');

function marcarJogada(id) {
    if (vencedor!==null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    }
    else {
        jogador = 'X';
    }

    trocarJogador(jogador);
    checarVitoria();
}

function trocarJogador(valor) {
    jogador = valor;
    jogadorAtual.innerHTML = jogador;
}

function checarVitoria() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(sequencia(quadrado1, quadrado2, quadrado3)) {
        sequenciaGanhadora(quadrado1, quadrado2, quadrado3);
        mostrarVencedor(quadrado1);
        return;
    }
    if(sequencia(quadrado4, quadrado5, quadrado6)) {
        sequenciaGanhadora(quadrado4, quadrado5, quadrado6);
        mostrarVencedor(quadrado4);
        return;
    }
    if(sequencia(quadrado7, quadrado8, quadrado9)) {
        sequenciaGanhadora(quadrado7, quadrado8, quadrado9);
        mostrarVencedor(quadrado7);
        return;
    }
    if(sequencia(quadrado1, quadrado4, quadrado7)) {
        sequenciaGanhadora(quadrado1, quadrado4, quadrado7);
        mostrarVencedor(quadrado1);
        return;
    }
    if(sequencia(quadrado2, quadrado5, quadrado8)) {
        sequenciaGanhadora(quadrado2, quadrado5, quadrado8);
        mostrarVencedor(quadrado2);
        return;
    }
    if(sequencia(quadrado3, quadrado6, quadrado9)) {
        sequenciaGanhadora(quadrado3, quadrado6, quadrado9);
        mostrarVencedor(quadrado3);
        return;
    }
    if(sequencia(quadrado1, quadrado5, quadrado9)) {
        sequenciaGanhadora(quadrado1, quadrado5, quadrado9);
        mostrarVencedor(quadrado1);
        return;
    }
    if(sequencia(quadrado3, quadrado5, quadrado7)) {
        sequenciaGanhadora(quadrado3, quadrado5, quadrado7);
        mostrarVencedor(quadrado3);
    }
}

function sequencia(quadrado1, quadrado2, quadrado3) {
    var situacao = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        situacao = true;
    }
    return situacao;
}

function sequenciaGanhadora(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function mostrarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorPartida.innerHTML = vencedor;
}

function jogarNovamente() {
    vencedor = null;
    vencedorPartida.innerHTML = '';

    for(var i=1; i<=9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    trocarJogador('X');
}