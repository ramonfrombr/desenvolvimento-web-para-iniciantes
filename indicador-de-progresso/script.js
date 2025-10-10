const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let passoAtual = 1;

next.addEventListener("click", () => {
    passoAtual++;

    if (passoAtual > circles.length) {
        passoAtual = circles.length;
    }

    atualizar();
});

prev.addEventListener("click", () => {
    passoAtual--;

    if (passoAtual < 1) {
        passoAtual = 1;
    }

    atualizar();
});

function atualizar() {
    circles.forEach((circle, idx) => {
        if (idx < passoAtual) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const ativos = document.querySelectorAll(".active");

    progress.style.width =
        ((ativos.length - 1) / (circles.length - 1)) * 100 + "%";

    if (passoAtual === 1) {
        prev.disabled = true;
    } else if (passoAtual === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
