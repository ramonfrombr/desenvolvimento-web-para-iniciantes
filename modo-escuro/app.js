moment.locale("pt");

const botaoAlternar = document.querySelector(".botao");
const containerArtigos = document.querySelector(".artigos");

botaoAlternar.addEventListener("click", () => {
    document.documentElement.classList.toggle("tema-escuro");
});

const dadosArtigos = artigos
    .map((artigo) => {
        const { titulo, data, duracao, conteudo } = artigo;
        const dataFormatada = moment(data).format("D [de] MMMM [de] YYYY");
        return `<article class="artigo">
          <h2>${titulo}</h2>
          <div class="info-artigo">
            <span>${dataFormatada}</span>
            <span>${duracao} min de leitura</span>
          </div>
          <p>
            ${conteudo}
          </p>
        </article>`;
    })
    .join("");

containerArtigos.innerHTML = dadosArtigos;
