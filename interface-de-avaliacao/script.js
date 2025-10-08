const avaliacoes = document.querySelectorAll(".avaliacao");
const containerAvaliacoes = document.querySelector(".container-avaliacoes");
const botaoEnviar = document.querySelector("#enviar");
const painel = document.querySelector("#painel");
let avaliacaoSelecionada = "Satisfeito";

containerAvaliacoes.addEventListener("click", (e) => {
    if (
        e.target.parentNode.classList.contains("avaliacao") &&
        e.target.nextElementSibling
    ) {
        removerAtivo();
        e.target.parentNode.classList.add("ativo");
        avaliacaoSelecionada = e.target.nextElementSibling.innerHTML;
    } else if (
        e.target.parentNode.classList.contains("avaliacao") &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === "IMG"
    ) {
        removerAtivo();
        e.target.parentNode.classList.add("ativo");
        avaliacaoSelecionada = e.target.innerHTML;
    }
});

botaoEnviar.addEventListener("click", () => {
    painel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Obrigado!</strong>
    <br>
    <strong>Avaliação: ${avaliacaoSelecionada}</strong>
    <p>Usaremos sua opinião para melhorar nosso atendimento ao cliente.</p>
  `;
});

function removerAtivo() {
    for (let i = 0; i < avaliacoes.length; i++) {
        avaliacoes[i].classList.remove("ativo");
    }
}
