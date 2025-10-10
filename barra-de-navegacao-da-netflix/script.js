const botaoAbrir = document.querySelector(".open-btn");
const botaoFechar = document.querySelector(".close-btn");
const navegacoes = document.querySelectorAll(".nav");

botaoAbrir.addEventListener("click", () => {
    navegacoes.forEach((nav) => nav.classList.add("visivel"));
});

botaoFechar.addEventListener("click", () => {
    navegacoes.forEach((nav) => nav.classList.remove("visivel"));
});
