// Seleciona o contêiner principal
const container = document.getElementById("container");

// Define uma lista de cores possíveis
const cores = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

// Define a quantidade de quadrados
const QUADRADOS = 500;

// Cria 500 quadrados dinamicamente
for (let i = 0; i < QUADRADOS; i++) {
    const quadrado = document.createElement("div");
    quadrado.classList.add("quadrado");

    // Quando o mouse passa por cima, muda a cor
    quadrado.addEventListener("mouseover", () => definirCor(quadrado));

    // Quando o mouse sai, volta ao normal
    quadrado.addEventListener("mouseout", () => removerCor(quadrado));

    container.appendChild(quadrado);
}

// Função para aplicar uma cor aleatória ao quadrado
function definirCor(elemento) {
    const cor = obterCorAleatoria();
    elemento.style.background = cor;
    elemento.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}`;
}

// Função para remover a cor e restaurar o padrão
function removerCor(elemento) {
    elemento.style.background = "#1d1d1d";
    elemento.style.boxShadow = "0 0 2px #000";
}

// Função que retorna uma cor aleatória da lista
function obterCorAleatoria() {
    return cores[Math.floor(Math.random() * cores.length)];
}
