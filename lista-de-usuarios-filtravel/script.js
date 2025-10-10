const resultado = document.getElementById("resultado");
const filtro = document.getElementById("filtro");
const itensLista = [];

obterDados();

filtro.addEventListener("input", (e) => filtrarDados(e.target.value));

// Função para buscar usuários da API
async function obterDados() {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    // Limpa o conteúdo inicial
    resultado.innerHTML = "";

    results.forEach((usuario) => {
        const li = document.createElement("li");
        itensLista.push(li);

        li.innerHTML = `
      <img src="${usuario.picture.large}" alt="${usuario.name.first}">
      <div class="info-usuario">
        <h4>${usuario.name.first} ${usuario.name.last}</h4>
        <p>${usuario.location.city}, ${usuario.location.country}</p>
      </div>
    `;

        resultado.appendChild(li);
    });
}

// Função de filtragem
function filtrarDados(termoBusca) {
    itensLista.forEach((item) => {
        if (item.innerText.toLowerCase().includes(termoBusca.toLowerCase())) {
            item.classList.remove("oculto");
        } else {
            item.classList.add("oculto");
        }
    });
}
