// usando seletores dentro do elemento
const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(function (pergunta) {
    const botao = pergunta.querySelector(".pergunta-botao");
    // console.log(botao);

    botao.addEventListener("click", function () {
        // console.log(pergunta);

        perguntas.forEach(function (item) {
            if (item !== pergunta) {
                item.classList.remove("mostrar-texto");
            }
        });

        pergunta.classList.toggle("mostrar-texto");
    });
});

// percorrendo o DOM
// const botoes = document.querySelectorAll(".pergunta-botao");

// botoes.forEach(function (botao) {
//   botao.addEventListener("click", function (e) {
//     const pergunta = e.currentTarget.parentElement.parentElement;

//     pergunta.classList.toggle("mostrar-texto");
//   });
// });
