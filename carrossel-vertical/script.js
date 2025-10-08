const containerSlider = document.querySelector(".container-slider");
const slideDireito = document.querySelector(".slide-direito");
const slideEsquerdo = document.querySelector(".slide-esquerdo");
const botaoCima = document.querySelector(".botao-cima");
const botaoBaixo = document.querySelector(".botao-baixo");
const totalSlides = slideDireito.querySelectorAll("div").length;

let indiceSlideAtivo = 0;

slideEsquerdo.style.top = `-${(totalSlides - 1) * 100}vh`;

botaoCima.addEventListener("click", () => mudarSlide("cima"));
botaoBaixo.addEventListener("click", () => mudarSlide("baixo"));

const mudarSlide = (direcao) => {
    const alturaSlider = containerSlider.clientHeight;

    if (direcao === "cima") {
        indiceSlideAtivo++;
        if (indiceSlideAtivo > totalSlides - 1) {
            indiceSlideAtivo = 0;
        }
    } else if (direcao === "baixo") {
        indiceSlideAtivo--;
        if (indiceSlideAtivo < 0) {
            indiceSlideAtivo = totalSlides - 1;
        }
    }

    slideDireito.style.transform = `translateY(-${
        indiceSlideAtivo * alturaSlider
    }px)`;
    slideEsquerdo.style.transform = `translateY(${
        indiceSlideAtivo * alturaSlider
    }px)`;
};
