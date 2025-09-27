const botaoBarraLateral = document.querySelector(".botao-barra-lateral");
const botaoFechar = document.querySelector(".botao-fechar");
const barraLateral = document.querySelector(".barra-lateral");

botaoBarraLateral.addEventListener("click", function () {
    barraLateral.classList.toggle("mostrar-barra-lateral");
});

botaoFechar.addEventListener("click", function () {
    barraLateral.classList.remove("mostrar-barra-lateral");
});
