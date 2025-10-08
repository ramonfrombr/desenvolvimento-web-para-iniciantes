const botao = document.querySelector("button");

botao.addEventListener("click", (evento) => {
    const x = evento.pageX;
    const y = evento.pageY;

    const distanciaTopoBotao = evento.target.offsetTop;
    const distanciaEsquerdaBotao = evento.target.offsetLeft;

    const xDentro = x - distanciaEsquerdaBotao;
    const yDentro = y - distanciaTopoBotao;

    const circulo = document.createElement("span");
    circulo.classList.add("circulo");
    circulo.style.top = yDentro + "px";
    circulo.style.left = xDentro + "px";

    botao.appendChild(circulo);

    setTimeout(() => circulo.remove(), 500);
});
