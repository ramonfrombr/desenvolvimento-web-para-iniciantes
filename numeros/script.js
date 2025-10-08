// Seleciona todos os elementos do HTML que possuem a classe ".numero"
// e transforma o NodeList retornado em um array usando o spread [...]
const itens = [...document.querySelectorAll(".numero")];

// Função responsável por animar a contagem de um número dentro de um elemento
const atualizarContagem = (elemento) => {
    // Pega o valor final a partir do atributo "data-value" do elemento
    const valor = parseInt(elemento.dataset.valor);

    // Define o incremento da contagem (quanto aumenta a cada passo)
    // Aqui, divide o valor por 1000 e arredonda para cima, para ajustar a velocidade
    const incremento = Math.ceil(valor / 1000);
    // Alternativa seria incremento = 1 (mas ficaria lento para valores grandes)

    // Valor inicial do contador, começa em 0
    let valorInicial = 0;

    // Cria um intervalo que executa a cada 1 milissegundo
    const aumentarContagem = setInterval(() => {
        // Soma o incremento ao valor atual
        valorInicial += incremento;

        // Se o contador ultrapassar o valor final:
        if (valorInicial > valor) {
            // Define o valor final corretamente no elemento (ex.: "5000+")
            elemento.textContent = `${valor}+`;
            // Para o intervalo para não continuar rodando
            clearInterval(aumentarContagem);
            return;
        }

        // Caso ainda não tenha chegado no valor final,
        // atualiza o texto exibido no elemento
        elemento.textContent = `${valorInicial}+`;
    }, 1); // intervalo de 1 milissegundo para deixar a animação rápida
};

// Para cada elemento com a classe ".numero", aplica a função de contagem
itens.forEach((item) => {
    atualizarContagem(item);
});
