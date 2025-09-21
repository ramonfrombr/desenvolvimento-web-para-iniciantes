const sobre = document.querySelector(".sobre");
const botoes = document.querySelectorAll(".aba-botao");
const abas = document.querySelectorAll(".conteudo");
sobre.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove ativo de outros botoes
        botoes.forEach(function (btn) {
            btn.classList.remove("ativo");
        });
        e.target.classList.add("ativo");
        // esconde outras abras
        abas.forEach(function (article) {
            article.classList.remove("ativo");
        });
        const elemento = document.getElementById(id);
        elemento.classList.add("ativo");
    }
});
