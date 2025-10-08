const cabecalho = document.getElementById("cabecalho");
const titulo = document.getElementById("titulo");
const resumo = document.getElementById("resumo");
const imagem_perfil = document.getElementById("imagem-perfil");
const nome = document.getElementById("nome");
const data = document.getElementById("data");

const fundos_animados = document.querySelectorAll(".fundo-animado");
const textos_fundos_animados = document.querySelectorAll(
    ".texto-fundo-animado"
);

setTimeout(buscarDados, 2500);

function buscarDados() {
    cabecalho.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    titulo.innerHTML = "Lorem ipsum dolor sit amet";
    resumo.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
    imagem_perfil.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    nome.innerHTML = "João da Silva";
    data.innerHTML = "08 de Outubro, 2020";

    fundos_animados.forEach((fundo) => fundo.classList.remove("fundo-animado"));
    textos_fundos_animados.forEach((fundo) =>
        fundo.classList.remove("texto-fundo-animado")
    );
}
