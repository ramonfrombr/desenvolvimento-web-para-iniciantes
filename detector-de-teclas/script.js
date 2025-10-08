const inserir = document.getElementById("inserir");

window.addEventListener("keydown", (evento) => {
    inserir.innerHTML = `
    <div class="tecla">
      ${evento.key === " " ? "Espaço" : evento.key}
      <small>evento.key</small>
    </div>

    <div class="tecla">
      ${evento.keyCode}
      <small>evento.keyCode</small>
    </div>

    <div class="tecla">
      ${evento.code}
      <small>evento.code</small>
    </div>
  `;
});
