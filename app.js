const numeroGenio = Math.floor(Math.random() * (100 - 1 + 1));
const pegarEntrada = (id) => document.getElementById(id);
const numeroNegativo = (numero) => numero < 0;
let tentativas = 10;
function respostaGenio() {
    let palpite = pegarEntrada("inPalpite").value
    if (numeroNegativo(palpite)) {
        alert("Calma lá amigo, lembre-se de 1 à 100, não trabalhamos com números negativos aqui.")
        return;
    }
    if (palpite == numeroGenio && tentativas > 8) {
        alert("Parabéns, você é muito bom nisso acertou muito cedo. ")
        return;
    }
    if (palpite == numeroGenio && tentativas <= 8) {
        document.getElementById('outResp').textContent = `Parabéns você acertou faltando ${tentativas} tentativas `;
        return;
    }
    if (palpite !== numeroGenio && palpite > numeroGenio) {
        tentativas = tentativas - 1;
        document.getElementById('contagem').textContent = `Você tem ${tentativas} tentativas. `
        document.getElementById('outResp').textContent = `Ops você errou, chutou muito alto. Você agora tem ${tentativas} tentativas `;
    } else if (palpite !== numeroGenio && palpite < numeroGenio) {
        tentativas = tentativas - 1;
        document.getElementById('contagem').textContent = `Você tem ${tentativas} tentativas. `
        document.getElementById('outResp').textContent = `Ops você errou, chutou muito baixo. Você agora tem ${tentativas} tentativas `;
        return;
    }
    if(tentativas == 0){
        alert("Você usou todas suas chances. Te  desejo  mais sorte na próxima!")
        return;
    }
};
