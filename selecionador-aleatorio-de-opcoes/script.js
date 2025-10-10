const opcoesEl = document.getElementById("opcoes");
const areaTexto = document.getElementById("area-texto");

areaTexto.focus();

// Cria as opções conforme o usuário digita
areaTexto.addEventListener("keyup", (e) => {
    criarOpcoes(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);

        selecionarAleatoriamente();
    }
});

function criarOpcoes(entrada) {
    const opcoes = entrada
        .split(",")
        .filter((opcao) => opcao.trim() !== "")
        .map((opcao) => opcao.trim());

    opcoesEl.innerHTML = "";

    opcoes.forEach((opcao) => {
        const opcaoEl = document.createElement("span");
        opcaoEl.classList.add("opcao");
        opcaoEl.innerText = opcao;
        opcoesEl.appendChild(opcaoEl);
    });
}

function selecionarAleatoriamente() {
    const vezes = 30;

    const intervalo = setInterval(() => {
        const opcaoAleatoria = escolherOpcaoAleatoria();

        if (opcaoAleatoria !== undefined) {
            destacarOpcao(opcaoAleatoria);

            setTimeout(() => {
                removerDestaque(opcaoAleatoria);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(intervalo);

        setTimeout(() => {
            const opcaoFinal = escolherOpcaoAleatoria();
            destacarOpcao(opcaoFinal);
        }, 100);
    }, vezes * 100);
}

function escolherOpcaoAleatoria() {
    const opcoes = document.querySelectorAll(".opcao");
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function destacarOpcao(opcao) {
    opcao.classList.add("destacada");
}

function removerDestaque(opcao) {
    opcao.classList.remove("destacada");
}
