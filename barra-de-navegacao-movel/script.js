const conteudos = document.querySelectorAll(".conteudo");
const itensLista = document.querySelectorAll("nav ul li");

itensLista.forEach((item, indice) => {
    item.addEventListener("click", () => {
        ocultarTodosConteudos();
        desativarTodosItens();

        item.classList.add("ativo");
        conteudos[indice].classList.add("mostrar");
    });
});

function ocultarTodosConteudos() {
    conteudos.forEach((conteudo) => conteudo.classList.remove("mostrar"));
}

function desativarTodosItens() {
    itensLista.forEach((item) => item.classList.remove("ativo"));
}
