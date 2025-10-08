const coposPequenos = document.querySelectorAll(".copo-pequeno");
const litros = document.getElementById("litros");
const porcentagem = document.getElementById("porcentagem");
const restante = document.getElementById("restante");

atualizarCopoGrande();

coposPequenos.forEach((copo, indice) => {
    copo.addEventListener("click", () => destacarCopos(indice));
});

function destacarCopos(indice) {
    if (indice === 7 && coposPequenos[indice].classList.contains("cheio"))
        indice--;
    else if (
        coposPequenos[indice].classList.contains("cheio") &&
        !coposPequenos[indice].nextElementSibling.classList.contains("cheio")
    ) {
        indice--;
    }

    coposPequenos.forEach((copo, i) => {
        if (i <= indice) {
            copo.classList.add("cheio");
        } else {
            copo.classList.remove("cheio");
        }
    });

    atualizarCopoGrande();
}

function atualizarCopoGrande() {
    const coposCheios = document.querySelectorAll(".copo-pequeno.cheio").length;
    const totalCopos = coposPequenos.length;

    if (coposCheios === 0) {
        porcentagem.style.visibility = "hidden";
        porcentagem.style.height = 0;
    } else {
        porcentagem.style.visibility = "visible";
        porcentagem.style.height = `${(coposCheios / totalCopos) * 330}px`;
        porcentagem.innerText = `${(coposCheios / totalCopos) * 100}%`;
    }

    if (coposCheios === totalCopos) {
        restante.style.visibility = "hidden";
        restante.style.height = 0;
    } else {
        restante.style.visibility = "visible";
        litros.innerText = `${2 - (250 * coposCheios) / 1000}L`;
    }
}
