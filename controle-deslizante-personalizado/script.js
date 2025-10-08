const controlador = document.getElementById("controlador");

controlador.addEventListener("input", (e) => {
    const valor = +e.target.value;
    const rotulo = e.target.nextElementSibling;

    const largura_intervalo = getComputedStyle(e.target).getPropertyValue(
        "width"
    );
    const largura_rotulo = getComputedStyle(rotulo).getPropertyValue("width");

    const num_largura_intervalo = +largura_intervalo.substring(
        0,
        largura_intervalo.length - 2
    );
    const num_largura_rotulo = +largura_rotulo.substring(
        0,
        largura_rotulo.length - 2
    );

    const max = +e.target.max;
    const min = +e.target.min;

    const esquerda =
        valor * (num_largura_intervalo / max) -
        num_largura_rotulo / 2 +
        escala(valor, min, max, 10, -10);

    rotulo.style.left = `${esquerda}px`;

    rotulo.innerHTML = valor;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const escala = (num, entrada_min, entrada_max, saida_min, saida_max) => {
    return (
        ((num - entrada_min) * (saida_max - saida_min)) /
            (entrada_max - entrada_min) +
        saida_min
    );
};
