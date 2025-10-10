const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
    const valor = e.target.value;
    const comprimento = valor.length;
    const valorDesfoque = 20 - comprimento * 2;
    background.style.filter = `blur(${valorDesfoque}px)`;
});
