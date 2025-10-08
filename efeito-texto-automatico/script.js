const textoEl = document.getElementById("texto");
const velocidadeEl = document.getElementById("velocidade");
const texto = "Nós Amamos Programação!";
let indice = 1;
let velocidade = 300 / velocidadeEl.value;

escreverTexto();

function escreverTexto() {
    textoEl.innerText = texto.slice(0, indice);

    indice++;

    if (indice > texto.length) {
        indice = 1;
    }

    setTimeout(escreverTexto, velocidade);
}

velocidadeEl.addEventListener(
    "input",
    (e) => (velocidade = 300 / e.target.value)
);
