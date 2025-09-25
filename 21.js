// Seletor de cor
const colorPicker = document.getElementById("colorPicker");
console.log(colorPicker)
colorPicker.addEventListener("input", () => {
    document.body.style.backgroundColor = colorPicker.value;
});

// Botões
const butao1 = document.getElementById("butao1"); // Rosa
const butao2 = document.getElementById("butao2"); // Verde
const butao3 = document.getElementById("butao3"); // Roxo
const butao4 = document.getElementById("butao4"); // Azul

function esconderTexto() {
    document.getElementById("meuTexto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("meuTexto").style.display = "block";
}


butao1.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

butao2.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

butao3.addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});

butao4.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});
// seila
  const textinho = document.getElementById("textinho");
  const botao12 = document.getElementById("botaob");

console.log(botao12)
botao12.addEventListener("click", () => {
    textinho.innerText = "kauma khalla brezzo";
})
