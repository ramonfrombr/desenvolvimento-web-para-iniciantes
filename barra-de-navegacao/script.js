// classList - mostra/obtém todas as classes
// contains - verifica se a lista de classes contém uma classe específica
// add - adiciona uma classe
// remove - remove uma classe
// toggle - alterna uma classe

const botaoNavegacao = document.querySelector(".navegacao-botao");
const links = document.querySelector(".navegacao-links");

botaoNavegacao.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("aleatorio"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("mostrar-links")) {
    //   links.classList.remove("mostrar-links");
    // } else {
    //   links.classList.add("mostrar-links");
    // }
    links.classList.toggle("mostrar-links");
});
