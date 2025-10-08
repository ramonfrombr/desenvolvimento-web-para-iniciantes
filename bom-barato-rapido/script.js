const alternadores = document.querySelectorAll(".alternar");
const bom = document.querySelector("#bom");
const barato = document.querySelector("#barato");
const rapido = document.querySelector("#rapido");

alternadores.forEach((alternar) =>
    alternar.addEventListener("change", (e) => aplicarRegra(e.target))
);

function aplicarRegra(clicado) {
    // Se os três estiverem ativados, um deve ser desmarcado
    if (bom.checked && barato.checked && rapido.checked) {
        if (bom === clicado) {
            rapido.checked = false;
        }

        if (barato === clicado) {
            bom.checked = false;
        }

        if (rapido === clicado) {
            barato.checked = false;
        }
    }
}
