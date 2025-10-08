const pesquisa = document.querySelector(".pesquisa");
const botao = document.querySelector(".botao");
const entrada = document.querySelector(".entrada");

botao.addEventListener("click", () => {
    pesquisa.classList.toggle("ativa");
    entrada.focus();
});
