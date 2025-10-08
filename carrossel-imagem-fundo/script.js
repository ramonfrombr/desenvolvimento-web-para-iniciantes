const corpo = document.body;
const slides = document.querySelectorAll(".slide");
const botaoEsquerda = document.getElementById("esquerda");
const botaoDireita = document.getElementById("direita");

let slideAtivo = 0;

botaoDireita.addEventListener("click", () => {
    slideAtivo++;

    if (slideAtivo > slides.length - 1) {
        slideAtivo = 0;
    }

    definirFundoNoCorpo();
    definirSlideAtivo();
});

botaoEsquerda.addEventListener("click", () => {
    slideAtivo--;

    if (slideAtivo < 0) {
        slideAtivo = slides.length - 1;
    }

    definirFundoNoCorpo();
    definirSlideAtivo();
});

definirFundoNoCorpo();

function definirFundoNoCorpo() {
    corpo.style.backgroundImage = slides[slideAtivo].style.backgroundImage;
}

function definirSlideAtivo() {
    slides.forEach((slide) => slide.classList.remove("ativo"));

    slides[slideAtivo].classList.add("ativo");
}
