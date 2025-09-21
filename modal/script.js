// selecionar botao-modal, modal-fundo, botao-fechar
// ouvir os eventos de clique no botao-modal e no botao-fechar
// quando o usuário clicar no botao-modal adicionar .modal-aberto ao modal-fundo
// quando o usuário clicar no botao-fechar remover .modal-aberto do modal-fundo

const botaoModal = document.querySelector(".botao-modal");
const modal = document.querySelector(".modal-fundo");
const botaoFechar = document.querySelector(".botao-fechar");

botaoModal.addEventListener("click", function () {
    modal.classList.add("modal-aberto");
});
botaoFechar.addEventListener("click", function () {
    modal.classList.remove("modal-aberto");
});
