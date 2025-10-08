const ameMe = document.querySelector(".ameMe");
const vezes = document.querySelector("#vezes");

let tempoClique = 0;
let cliquesFeitos = 0;

ameMe.addEventListener("click", (e) => {
    if (tempoClique === 0) {
        tempoClique = new Date().getTime();
    } else {
        if (new Date().getTime() - tempoClique < 800) {
            criarCoracao(e);
            tempoClique = 0;
        } else {
            tempoClique = new Date().getTime();
        }
    }
});

const criarCoracao = (e) => {
    const coracao = document.createElement("i");
    coracao.classList.add("fas");
    coracao.classList.add("fa-heart");

    const x = e.clientX;
    const y = e.clientY;

    const deslocamentoEsquerda = e.target.offsetLeft;
    const deslocamentoTopo = e.target.offsetTop;

    const xInterno = x - deslocamentoEsquerda;
    const yInterno = y - deslocamentoTopo;

    coracao.style.top = `${yInterno}px`;
    coracao.style.left = `${xInterno}px`;

    ameMe.appendChild(coracao);

    vezes.innerHTML = ++cliquesFeitos;

    setTimeout(() => coracao.remove(), 1000);
};
