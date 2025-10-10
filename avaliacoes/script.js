// dados locais das avaliações
const avaliacoes = [
    {
        id: 1,
        nome: "sara silva",
        trabalho: "professora",
        imagem: "https://www.course-api.com/images/people/person-1.jpeg",
        descricao:
            "Produto excelente, superou minhas expectativas pela qualidade e pelo custo-benefício, recomendo sem dúvidas!",
    },
    {
        id: 2,
        nome: "bruna souza",
        trabalho: "vendedora",
        imagem: "https://www.course-api.com/images/people/person-2.jpeg",
        descricao:
            "O produto chegou rápido, tem ótima durabilidade e funciona exatamente como descrito, fiquei muito satisfeito.",
    },
    {
        id: 3,
        nome: "pedro teixeira",
        trabalho: "estagiário",
        imagem: "https://www.course-api.com/images/people/person-4.jpeg",
        descricao:
            "Adorei o produto, material de ótima qualidade, fácil de usar e com acabamento impecável.",
    },
    {
        id: 4,
        nome: "carlos gomes",
        trabalho: "gerente",
        imagem: "https://www.course-api.com/images/people/person-3.jpeg",
        descricao:
            "O produto atendeu perfeitamente às minhas necessidades, com desempenho acima do esperado e ótimo design.",
    },
];
// selecionar elementos do HTML e armazenar em variáveis
const imagem = document.getElementById("imagem-pessoa"); // seleciona a tag <img> pelo id "imagem-pessoa"
const pessoa = document.getElementById("pessoa"); // seleciona o elemento que exibirá o nome da pessoa
const trabalho = document.getElementById("trabalho"); // seleciona o elemento que exibirá o cargo/profissão
const descricao = document.getElementById("descricao"); // seleciona o elemento que exibirá a descrição

// seleciona os botões de navegação
const botaoAnterior = document.querySelector(".botao-anterior"); // botão para mostrar avaliação anterior
const botaoProximo = document.querySelector(".botao-proximo"); // botão para mostrar próxima avaliação
const botaoAleatorio = document.querySelector(".botao-aleatorio"); // botão para mostrar avaliação aleatória

// define o índice inicial (primeira avaliação exibida)
let itemAtual = 0;

// evento que carrega o primeiro item assim que a página é carregada
window.addEventListener("DOMContentLoaded", function () {
    const item = avaliacoes[itemAtual]; // pega a avaliação correspondente ao índice atual
    imagem.src = item.imagem; // define a imagem da pessoa
    pessoa.textContent = item.nome; // define o nome da pessoa
    trabalho.textContent = item.trabalho; // define o cargo/profissão
    descricao.textContent = item.descricao; // define a descrição
});

// função que exibe uma pessoa com base no índice fornecido
function mostrarPessoa(indice) {
    const item = avaliacoes[indice]; // pega a avaliação pelo índice
    imagem.src = item.imagem; // atualiza a imagem
    pessoa.textContent = item.nome; // atualiza o nome
    trabalho.textContent = item.trabalho; // atualiza o cargo
    descricao.textContent = item.descricao; // atualiza a descrição
}

// evento para o botão "próximo"
botaoProximo.addEventListener("click", function () {
    itemAtual++; // avança para o próximo índice
    if (itemAtual > avaliacoes.length - 1) {
        // se passar do último item
        itemAtual = 0; // volta para o primeiro
    }
    mostrarPessoa(itemAtual); // mostra a pessoa correspondente
});

// evento para o botão "anterior"
botaoAnterior.addEventListener("click", function () {
    itemAtual--; // volta para o índice anterior
    if (itemAtual < 0) {
        // se passar antes do primeiro item
        itemAtual = avaliacoes.length - 1; // vai para o último item
    }
    mostrarPessoa(itemAtual); // mostra a pessoa correspondente
});

// evento para o botão "aleatório"
botaoAleatorio.addEventListener("click", function () {
    console.log("olá"); // apenas imprime "olá" no console (teste/debug)
    itemAtual = Math.floor(Math.random() * avaliacoes.length); // gera um índice aleatório válido
    mostrarPessoa(itemAtual); // mostra a pessoa sorteada
});
