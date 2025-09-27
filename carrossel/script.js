const slides = document.querySelectorAll(".slide");
const botaoProximo = document.querySelector(".botao-proximo");
const botaoAnterior = document.querySelector(".botao-anterior");

slides.forEach(function (slide, indice) {
    slide.style.left = `${indice * 100}%`;
});

let contador = 0;

botaoProximo.addEventListener("click", function () {
    contador++;
    carrossel();
});

botaoAnterior.addEventListener("click", function () {
    contador--;
    carrossel();
});

function carrossel() {
    // trabalhando com os slides
    // if (contador === slides.length) {
    //   contador = 0;
    // }
    // if (contador < 0) {
    //   contador = slides.length - 1;
    // }
    // trabalhando com os botões

    if (contador < slides.length - 1) {
        botaoProximo.style.display = "block";
    } else {
        botaoProximo.style.display = "none";
    }
    if (contador > 0) {
        botaoAnterior.style.display = "block";
    } else {
        botaoAnterior.style.display = "none";
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${contador * 100}%)`;
    });
}

botaoAnterior.style.display = "none";
