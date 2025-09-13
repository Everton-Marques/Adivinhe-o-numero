let numeroGenio;
let tentativas;
let jogoAcabou = false;
const elPalpite = document.getElementById('inPalpite');
const btnChutar = document.getElementById('btnchutar');
const elContagem = document.getElementById('contagem');
const elResposta = document.getElementById('outResp');
function iniciarJogo() {
    numeroGenio = Math.floor(Math.random() * 100) + 1;
    tentativas = 10;
    jogoAcabou = false;
    elContagem.textContent = `Você tem ${tentativas} tentativas.`;
    elResposta.textContent = '';
    elPalpite.value = '';
    btnChutar.disabled = false;
    elPalpite.focus();
}
function processarPalpite() {
    if (jogoAcabou) {
        return;
    }

    const palpite = Number(elPalpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        elResposta.textContent = 'Por favor, digite um número válido entre 1 e 100.';
        elPalpite.focus();
        return;
    }
    if (palpite === numeroGenio) {
        elResposta.textContent = `🎉 Parabéns! Você acertou! O número era ${numeroGenio}. Você ganhou o jogo!`;
        finalizarJogo();
    } else {
        tentativas--;
        elContagem.textContent = `Você tem ${tentativas} tentativas.`;

        if (tentativas === 0) {
            elResposta.textContent = `Game Over! Suas tentativas acabaram. O número era ${numeroGenio}.`;
            finalizarJogo();
        } else {
            const dica = palpite > numeroGenio ? 'muito alto' : 'muito baixo';
            elResposta.textContent = `Ops, você errou. Seu palpite foi ${dica}.`;
        }
    }
}
function finalizarJogo() {
    jogoAcabou = true;
    btnChutar.disabled = true;
}
btnChutar.addEventListener('click', processarPalpite);
window.onload = iniciarJogo;