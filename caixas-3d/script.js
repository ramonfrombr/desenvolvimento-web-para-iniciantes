const containerCaixas = document.getElementById("caixas");
const botao = document.getElementById("botao");

botao.addEventListener("click", () =>
    containerCaixas.classList.toggle("grande")
);

function criarCaixas() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const caixa = document.createElement("div");
            caixa.classList.add("caixa");
            caixa.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            containerCaixas.appendChild(caixa);
        }
    }
}

criarCaixas();
