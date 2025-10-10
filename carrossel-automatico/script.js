const imagens = document.getElementById("imagens");
const botaoEsquerda = document.getElementById("esquerda");
const botaoDireita = document.getElementById("direita");

const img = document.querySelectorAll("#imagens img");

let indice = 0;

let intervalo = setInterval(executar, 2000);

function executar() {
    indice++;
    mudarImagem();
}

function mudarImagem() {
    if (indice > img.length - 1) {
        indice = 0;
    } else if (indice < 0) {
        indice = img.length - 1;
    }

    imagens.style.transform = `translateX(${-indice * 500}px)`;
}

function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(executar, 2000);
}

botaoDireita.addEventListener("click", () => {
    indice++;
    mudarImagem();
    reiniciarIntervalo();
});

botaoEsquerda.addEventListener("click", () => {
    indice--;
    mudarImagem();
    reiniciarIntervalo();
});
