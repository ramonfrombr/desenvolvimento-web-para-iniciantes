const numeros = document.querySelectorAll(".numeros span");
const contador = document.querySelector(".contador");
const mensagemFinal = document.querySelector(".final");
const reiniciar = document.querySelector("#reiniciar");

executarAnimacao();

function resetarDOM() {
    contador.classList.remove("esconder");
    mensagemFinal.classList.remove("mostrar");

    numeros.forEach((numero) => {
        numero.classList.value = "";
    });

    numeros[0].classList.add("entrando");
}

function executarAnimacao() {
    numeros.forEach((numero, indice) => {
        const ultimoIndice = numeros.length - 1;

        numero.addEventListener("animationend", (e) => {
            if (e.animationName === "entrar" && indice !== ultimoIndice) {
                numero.classList.remove("entrando");
                numero.classList.add("saindo");
            } else if (e.animationName === "sair" && numero.nextElementSibling) {
                numero.nextElementSibling.classList.add("entrando");
            } else {
                contador.classList.add("esconder");
                mensagemFinal.classList.add("mostrar");
            }
        });
    });
}

reiniciar.addEventListener("click", () => {
    resetarDOM();
    executarAnimacao();
});
