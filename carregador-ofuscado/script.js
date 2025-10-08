// Seleciona o elemento com a classe ".texto-carregando" (onde aparece o percentual de carregamento)
const textoCarregando = document.querySelector(".texto-carregando");

// Seleciona o elemento com a classe ".fundo" (o fundo que vai desfocar)
const fundo = document.querySelector(".fundo");

// Variável que controla a porcentagem de carregamento (de 0 a 100)
let carregando = 0;

// Cria um intervalo que chama a função "desfocar" a cada 30 milissegundos
let intervalo = setInterval(desfocar, 30);

// Função responsável pelo efeito de carregamento e desfoque
function desfocar() {
    // Incrementa a variável de carregamento
    carregando++;

    // Quando o valor passa de 99, o carregamento é finalizado e o intervalo é parado
    if (carregando > 99) {
        clearInterval(intervalo);
    }

    // Atualiza o texto com a porcentagem atual (ex: "45%")
    textoCarregando.innerText = `${carregando}%`;

    // Ajusta a opacidade do texto, indo de 1 (visível) até 0 (invisível) conforme o carregamento avança
    textoCarregando.style.opacity = escala(carregando, 0, 100, 1, 0);

    // Aplica um desfoque no fundo, que começa em 30px e vai diminuindo até 0px
    fundo.style.filter = `blur(${escala(carregando, 0, 100, 30, 0)}px)`;
}

// Função utilitária que converte um número de um intervalo para outro
// Exemplo: transformar o carregamento (0–100) em um valor de opacidade (1–0) ou desfoque (30–0)
const escala = (num, entrada_min, entrada_max, saida_min, saida_max) => {
    return (
        ((num - entrada_min) * (saida_max - saida_min)) /
            (entrada_max - entrada_min) +
        saida_min
    );
};
