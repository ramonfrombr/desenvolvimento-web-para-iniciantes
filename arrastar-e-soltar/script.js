const preenchido = document.querySelector(".preenchido");
const vazios = document.querySelectorAll(".caixa");
const corpo = document.body;

corpo.addEventListener("dragstart", iniciarArrasto);
corpo.addEventListener("dragend", finalizarArrasto);

for (const caixa of vazios) {
    caixa.addEventListener("dragover", aoArrastarSobre);
    caixa.addEventListener("dragenter", aoEntrar);
    caixa.addEventListener("dragleave", aoSair);
    caixa.addEventListener("drop", soltar);
}

function iniciarArrasto(e) {
    if (!e.target.classList.contains("preenchido")) {
        e.preventDefault();
        return;
    }
    preenchido.className += " segurar";
    setTimeout(() => (preenchido.className = "invisivel"), 0);
}

function finalizarArrasto() {
    preenchido.className = "preenchido";
}

function aoArrastarSobre(e) {
    e.preventDefault();
}

function aoEntrar(e) {
    e.preventDefault();
    this.className += " sobreposto";
}

function aoSair() {
    this.className = "caixa";
}

function soltar() {
    this.className = "caixa";
    this.append(preenchido);
}
