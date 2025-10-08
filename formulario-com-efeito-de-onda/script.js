const labels = document.querySelectorAll(".controle-formulario label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letra, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letra}</span>`
        )
        .join("");
});
