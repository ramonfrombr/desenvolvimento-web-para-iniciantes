const botao = document.querySelector(".botao-alternar");
const video = document.querySelector(".container-video");

botao.addEventListener("click", function () {
    if (!botao.classList.contains("deslizar")) {
        botao.classList.add("deslizar");
        video.pause();
    } else {
        botao.classList.remove("deslizar");
        video.play();
    }
});

// carregador
const carregador = document.querySelector(".carregador");

window.addEventListener("load", function () {
    carregador.classList.add("ocultar-carregador");
});
